import * as Yup from 'yup';

export const taxRuleSchema = Yup.object().shape({
  countryId: Yup.string()
    .required('Country is required'),
  
  stateId: Yup.string()
    .required('State is required'),
  
  cityId: Yup.string()
    .required('City is required'),
  
  tax: Yup.number()
    .required('Tax rate is required')
    .min(0, 'Tax rate must be 0 or greater')
    .max(100, 'Tax rate cannot exceed 100%')
    .typeError('Tax rate must be a valid number'),
});


