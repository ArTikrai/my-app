import * as React from 'react';
import {
  Paper,
  Typography,
  TextField,
  Box,
  Button,
  MenuItem,
} from '@mui/material';
import { useFormik } from 'formik';
import CategoryService from '../../../services/category-service';
import validationSchema from './movie-validation';

const MovieForm = ({
  onSubmited,
  formTitle,
  submitText,
  color,
  initValues,
}) => {
  const [categories, setCategories] = React.useState([]);

  const initialValues = {
    title: (initValues?.title ?? ''),
    category: (initValues?.categoryId ?? ''),
    date: (initValues?.date ?? ''),
    img: (initValues?.img ?? ''),
    bigImg: (initValues?.bigImg ?? ''),
    trailer: (initValues?.trailer ?? ''),
    description: initValues?.description ?? '',
  };

  const onSubmit = (values) => {
    onSubmited({
      title: values.title,
      categoryId: values.category,
      date: values.date,
      img: values.img,
      bigImg: values.bigImg,
      trailer: values.trailer,
      description: values.description,
    });
  };

  const {
    values, errors, touched, dirty, isValid,
    handleChange, handleBlur, handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const fetchCategories = async () => {
    const fetchedCategories = await CategoryService.fetchAll();
    setCategories(fetchedCategories);
  };

  React.useEffect(() => { fetchCategories(); }, []);

  return (
    <Paper component="form" sx={{ p: 3, minWidth: { xs: '300px', sm: '400px' } }} onSubmit={handleSubmit} disabled={!dirty || !isValid}>
      <Typography variant="h4" sx={{ textAlign: 'center', pb: 2 }}>{formTitle}</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <TextField
          name="title"
          label="Title"
          type="title"
          fullWidth
          variant="filled"
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.title && Boolean(errors.title)}
          helperText={touched.title && errors.title}
        />
        <TextField
          name="category"
          label="Category"
          type="category"
          fullWidth
          select
          variant="filled"
          value={values.category}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.category && Boolean(errors.category)}
          helperText={touched.category && errors.category}
        >
          {categories.map(({ id, title: category }) => (
            <MenuItem key={id} value={id}>{category}</MenuItem>
          ))}
        </TextField>
        <TextField
          name="date"
          label="Release Year"
          fullWidth
          variant="filled"
          value={values.date}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.date && Boolean(errors.date)}
          helperText={touched.date && errors.date}
        />
        <TextField
          name="img"
          label="Photo path"
          type="img"
          fullWidth
          variant="filled"
          value={values.img}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.img && Boolean(errors.img)}
          helperText={touched.img && errors.img}
        />
        <TextField
          name="bigImg"
          label="Large Img Photo path"
          type="bigImg"
          fullWidth
          variant="filled"
          value={values.bigImg}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.bigImg && Boolean(errors.bigImg)}
          helperText={touched.bigImg && errors.bigImg}
        />
        <TextField
          name="trailer"
          label="Youtube Embed"
          type="trailer"
          fullWidth
          variant="filled"
          value={values.trailer}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.trailer && Boolean(errors.trailer)}
          helperText={touched.trailer && errors.trailer}
        />
        <TextField
          name="description"
          label="Description"
          type="description"
          fullWidth
          variant="filled"
          multiline
          rows={4}
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.description && Boolean(errors.description)}
          helperText={touched.description && errors.description}
        />
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            type="submit"
            variant="contained"
            color={color}
            size="large"
          >
            {submitText}
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default MovieForm;
