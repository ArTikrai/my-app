import * as yup from 'yup';

const validationSchema = yup.object({
  title: yup.string()
    .required('Required'),
  img: yup.string()
    .required('Required'),
  trailer: yup.string()
    .required('Required'),
  description: yup.string()
    .required('Required'),
});

export default validationSchema;
