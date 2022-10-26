import * as React from 'react';
import {
  Paper,
  Typography,
  TextField,
  Box,
  Button,
} from '@mui/material';
import { useFormik } from 'formik';
import validationSchema from './home-movie-validation';

const HomeMovieForm = ({
  onSubmited,
  formTitle,
  submitText,
  color,
  initValues,
}) => {
  const initialValues = {
    title: (initValues?.title ?? ''),
    img: (initValues?.img ?? ''),
    trailer: (initValues?.trailer ?? ''),
    description: initValues?.description ?? '',
  };

  const onSubmit = (values) => {
    onSubmited({
      title: values.title,
      img: values.img,
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

export default HomeMovieForm;
