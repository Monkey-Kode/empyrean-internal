import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const formDataJson = JSON.parse(req.body);
  const formBody = Object.keys(formDataJson)
    .map(
      (key) =>
        encodeURIComponent(key) + '=' + encodeURIComponent(formDataJson[key])
    )
    .join('&');

  console.log('formBody', formBody);

  try {
    const response = await fetch(
      'http://info.goempyrean.com/l/71942/2022-03-04/b54xmp',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
        },
        body: formBody,
      }
    );

    res.json({
      success: true,
      statusCode: response.status,
      message: 'Form submitted successfully',
      response: response.json(),
    });
  } catch (error) {
    res.status(500).json(error);
  }
}
