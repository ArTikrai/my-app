import * as yup from 'yup';

const validationSchema = yup.object({
  title: yup.string()
    .required('Required'),
  category: yup.string()
    .required('Required'),
  price: yup.number().typeError('Cup.price must be a number')
    .required('Required'),
  img: yup.string()
    .required('Required'),
  description: yup.string()
    .required('Required'),
});

export default validationSchema;
