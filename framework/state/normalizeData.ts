import getAllFieldResponses from './getAllFieldResponses';

const normalizeData = (data: any) => {
  const fieldResponses = getAllFieldResponses(data);

  const normalizedData = fieldResponses.reduce((acc, field) => {
    return field &&
      field?.name &&
      field?.value &&
      field?.name !== '' &&
      field?.value !== ''
      ? {
          ...acc,
          [field.name]: field.value,
        }
      : {
          ...acc,
        };
  }, {});

  return normalizedData;
};

export default normalizeData;
