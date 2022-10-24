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
    price: (initValues?.price ?? ''),
    img: (initValues?.img ?? ''),
    description: initValues?.description ?? '',
  };

  const onSubmitRef = React.useRef((credentials) => {
    onSubmited(credentials);
  });

  const {
    values, errors, touched, dirty, isValid,
    handleChange, handleBlur, handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: onSubmitRef.current,
  });

  // React.useEffect(() => {
  //   (async () => {
  //     const fethedCategories = await CategoryService.fetchAll();
  //     setCategories(fethedCategories);
  //   })();
  // }, []);

  const fetchCategories = async () => {
    const fetchedCategories = await CategoryService.fetchAll();
    setCategories(fetchedCategories);
  };

  React.useEffect(() => { fetchCategories(); }, [categories]);

  return (
    <Paper component="form" sx={{ p: 3, minWidth: { xs: '250px', sm: '400px' } }} onSubmit={handleSubmit} disabled={!dirty || !isValid}>
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
          value={values.id}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.category && Boolean(errors.category)}
          helperText={touched.category && errors.category}
        >
          {categories.map(({ id, title: categoryTitle }) => (
            <MenuItem key={id} value={id}>{categoryTitle}</MenuItem>
          ))}
        </TextField>
        <TextField
          name="price"
          label="Price €"
          type="price"
          fullWidth
          variant="filled"
          value={values.price}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.price && Boolean(errors.price)}
          helperText={touched.price && errors.price}
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
