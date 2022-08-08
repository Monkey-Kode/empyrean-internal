import { State } from '../context/form';

const getAllFieldResponses = (state: State) => {
  const fields = state.map((section, index) => {
    const sectionObject = section?.[`section_${index - 1}`];
    console.log('section', sectionObject);
    return (
      Array.isArray(sectionObject?.fields) &&
      sectionObject?.fields?.map((field) => {
        return {
          name: field?.name,
          value: field?.value,
        };
      })
    );
  });
  return fields.flat();
};

export default getAllFieldResponses;
