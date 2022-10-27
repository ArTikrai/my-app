import * as yup from 'yup';

const validationSchema = yup.object({
  email: yup.string()
    .required('Required')
    .email('Invalid email format'),
  password: yup.string()
    .required('Required'),
});

export default validationSchema;
