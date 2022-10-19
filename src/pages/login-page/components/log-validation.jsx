import * as yup from 'yup';

const validationSchema = yup.object({
  email: yup.string()
    .required('Required')
    .email('Invalid email format'),
});

export default validationSchema;
