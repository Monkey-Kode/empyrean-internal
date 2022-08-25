/** @type {import('next').NextConfig} */
const csps = ['*.goempyrean.com'];
const urls = csps.join(' ');
const ContentSecurityPolicy = `
  default-src https: 'self' ${urls};
  script-src https: 'self' 'unsafe-inline' 'unsafe-eval' ${urls};
  style-src https: 'self' 'unsafe-inline' *;
  img-src https: 'self' data: ${urls};
  object-src https: 'self' *.bolt.com;
  frame-ancestors https: 'self' ${urls};
  connect-src 'self' ws: ${urls};
`;

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
  },
  {
    key: 'Access-Control-Allow-Origin',
    value: '*',
  },
];
const headers = {
  source: '/:path*',
  headers: securityHeaders,
};
const config = {
  reactStrictMode: true,
  // async headers() {
  //   return [headers];
  // },
};

module.exports = config;
