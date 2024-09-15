// material-ui
import { Button, Grid, InputLabel, Stack, TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

// third-party
import { Form, FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';

// project imports
import AnimateButton from 'components/@extended/AnimateButton';

const validationSchema = Yup.object({
});

// ==============================|| Customer Management Form Wizard - Basic Information  ||============================== //

export type CustomerDetailsData = {
  email?: string
};

interface CustomerDetailsFormProps {
  customerDetailsData: CustomerDetailsData;
  setCustomerDetailsData: (d: CustomerDetailsData) => void;
  handleNext: () => void;
  handleBack: () => void;
  lastSavedFormIndex: number;
  activeStep: number;
  setErrorIndex: (i: number | null) => void;
  customerId?: number;
}

const CustomerDetailsForm = ({
  customerDetailsData,
  setCustomerDetailsData,
  handleNext,
  handleBack,
  activeStep,
  lastSavedFormIndex,
  setErrorIndex,
  customerId
}: CustomerDetailsFormProps) => {

  const formik = useFormik({
    initialValues: {
      email: customerDetailsData.email || ''
    },
    validationSchema,
    onSubmit: async (values) => {
      if (lastSavedFormIndex >= activeStep) {
        setCustomerDetailsData({
          email: values.email
        });
        handleNext();
      }
      else {
        setCustomerDetailsData({
          email: values.email
        });
        handleNext();
      }
    }
  });

  const { errors, touched, handleSubmit, getFieldProps } = formik;

  return (
    <>
      <FormikProvider value={formik}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12}>
                <Grid container spacing={3}>

                  <Grid item xs={12} md={6}>
                    <Stack spacing={1.25} sx={{ mr: 2 }}>
                      <InputLabel htmlFor="email">
                        Email Address <span style={{ color: 'red' }}>*</span>
                      </InputLabel>
                      <TextField
                        fullWidth
                        id="email"
                        placeholder="Enter Email Address"
                        {...getFieldProps('email')}
                        error={Boolean(touched.email && errors.email)}
                        helperText={touched.email && errors.email}
                      />
                    </Stack>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Stack spacing={1.25} sx={{ mr: 2 }}>
                      <InputLabel htmlFor="email">
                        Email Address <span style={{ color: 'red' }}>*</span>
                      </InputLabel>
                      <TextField
                        fullWidth
                        id="email"
                        placeholder="Enter Email Address"
                        {...getFieldProps('email')}
                        error={Boolean(touched.email && errors.email)}
                        helperText={touched.email && errors.email}
                      />
                    </Stack>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Stack spacing={1.25} sx={{ mr: 2 }}>
                      <InputLabel htmlFor="email">
                        Email Address <span style={{ color: 'red' }}>*</span>
                      </InputLabel>
                      <TextField
                        fullWidth
                        id="email"
                        placeholder="Enter Email Address"
                        {...getFieldProps('email')}
                        error={Boolean(touched.email && errors.email)}
                        helperText={touched.email && errors.email}
                      />
                    </Stack>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Stack spacing={1.25} sx={{ mr: 2 }}>
                      <InputLabel htmlFor="email">
                        Email Address <span style={{ color: 'red' }}>*</span>
                      </InputLabel>
                      <TextField
                        fullWidth
                        id="email"
                        placeholder="Enter Email Address"
                        {...getFieldProps('email')}
                        error={Boolean(touched.email && errors.email)}
                        helperText={touched.email && errors.email}
                      />
                    </Stack>
                  </Grid>


                  <Grid item xs={12}>
                    <Stack direction="row" justifyContent="flex-end">
                      <Button onClick={handleBack} sx={{ my: 3, ml: 1 }}>
                        Back
                      </Button>
                      <AnimateButton>
                        <Button
                          variant="contained"
                          sx={{ my: 3, ml: 1 }}
                          type="submit"
                          onClick={() => {
                            setErrorIndex(0);
                          }}
                        >
                          Next
                        </Button>
                      </AnimateButton>
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Form>
        </LocalizationProvider >
      </FormikProvider >
    </>
  );
};

export default CustomerDetailsForm;
