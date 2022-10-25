import * as yup from 'yup';

const validationSchema = yup.object({
  title: yup.string()
    .required('Required'),
  category: yup.string()
    .required('Required'),
  date: yup.number().typeError('Movie.date must be a number')
    .required('Required'),
  img: yup.string()
    .required('Required'),
  bigImg: yup.string()
    .required('Required'),
  trailer: yup.string()
    .required('Required'),
  play: yup.string()
    .required('Required'),
  description: yup.string()
    .required('Required'),
});

export default validationSchema;
