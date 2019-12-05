import { FORM_ERROR } from 'final-form';

const handleError = (error) => {
  const errors = {};

  if (typeof error.response !== 'undefined') {
    errors[FORM_ERROR] = error.response.data.errortext;
  } else {
    errors[FORM_ERROR] = 'Oh no! Something went wrong. Please try again later, or contact Sitoo support';
  }

  return errors;
};

export default handleError;
