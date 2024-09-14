// material-ui
import { Button, Grid, InputLabel, Stack, TextField, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

// third-party
import { Form, FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';

// project imports

const validationSchema = Yup.object({
  registerDate: Yup.string().required('Register Date is required'),
});

// ==============================||  Basic Information  ||============================== //

export type GenaralInformationData = {
  registerDate?: string
  fullName?: string
};

const GeneralInformationForm = () => {

  const formik = useFormik({
    initialValues: {
      registerDate: '',
      fullName: '',
    },
    validationSchema,
    onSubmit: async (values) => {
    }
  });

  const { errors, touched, handleSubmit, getFieldProps, isSubmitting } = formik;

  return (
    <>
      <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
        Basic Information
      </Typography>
      <FormikProvider value={formik}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={3}>
                    <Stack spacing={1.25}>
                      <InputLabel htmlFor="registerDate">
                        Date Created<span style={{ color: 'red' }}>*</span>
                      </InputLabel>
                      <TextField
                        type='date'
                        fullWidth
                        id="registerDate"
                        placeholder="Enter Date Created"
                        {...getFieldProps('registerDate')}
                        error={Boolean(touched.registerDate && errors.registerDate)}
                        helperText={touched.registerDate && errors.registerDate}
                      />
                    </Stack>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Stack spacing={1.25} sx={{ mr: 2 }}>
                      <InputLabel htmlFor="fullName">
                        Full Name <span style={{ color: 'red' }}>*</span>
                      </InputLabel>
                      <TextField
                        fullWidth
                        id="fullName"
                        placeholder="Enter Full Name"
                        {...getFieldProps('fullName')}
                        error={Boolean(touched.fullName && errors.fullName)}
                        helperText={touched.fullName && errors.fullName}
                      />
                    </Stack>
                  </Grid>

                  <Grid container justifyContent="space-between" alignItems="center">
                    <Grid item>

                    </Grid>
                    <Grid item>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Button color="error">
                          Cancel
                        </Button>
                        <Button type="submit" variant="contained" disabled={isSubmitting}>
                          Submit
                        </Button>
                      </Stack>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Form>
        </LocalizationProvider>
      </FormikProvider>
    </>
  );
};

export default GeneralInformationForm;
