import * as yup from 'yup';

const validationSchema = yup.object({
  email: yup.string()
    .required('Required')
    .email('Invalid email format'),
  password: yup.string()
    .required('Required')
    .min(8, 'Minimum 8 characters')
    .matches(/[a-z]/, 'At least one lowercase letter')
    .matches(/[A-Z]/, 'At least one capital letter')
    .matches(/\d/, 'At least one number')
    .matches(/\W/, 'At least one special character'),
  passwordConfirmation: yup.string()
    .required('Required')
    .oneOf([yup.ref('password')], 'Passwords do not match'),
  fullname: yup.string()
    .required('Required')
    .min(6, 'Minimum 6 characters')
    .matches(/^[a-ząčęėįšųūž ]+$/i, 'Can only contain letters and spaces'),
});

export default validationSchema;
