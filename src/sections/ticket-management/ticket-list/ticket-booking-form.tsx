
// material-ui
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  InputLabel,
  Stack,
  TextField
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

// third-party
import { Form, FormikProvider, FormikValues, useFormik } from 'formik';
import _ from 'lodash';
import * as Yup from 'yup';

// project imports

// assets

// constant
const getInitialValues = (businessNatureCode: FormikValues | null) => {

  const newBusinessNatureCode = {
    fullName: '',
    nic: '',
  }

  if (businessNatureCode) {
    return _.merge({}, newBusinessNatureCode, businessNatureCode);
  }

  return newBusinessNatureCode;
};

// ==============================|| CUSTOMER ADD / EDIT ||============================== //

export interface Props {
  onCancel: () => void;
}

const AddEditBusinessNature = ({ onCancel }: Props) => {

  const businessNatureCodeSchema = Yup.object().shape({
    fullName: Yup.string().required('Full Name is required'),
    nic: Yup.string().required('NIC is required'),
  });

  const formik = useFormik({
    initialValues: getInitialValues(null),
    validationSchema: businessNatureCodeSchema,
    enableReinitialize: true,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      try {
        //post

        resetForm()
        setSubmitting(false);
        onCancel();
      } catch (error) {
        console.error(error);
      }
    }
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <>
      <FormikProvider value={formik}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <DialogTitle>{'Add New Booking'}</DialogTitle>
            <Divider />
            <DialogContent sx={{ p: 2.5 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={12}>
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <Stack spacing={1.25}>
                        <InputLabel htmlFor="fullName"> Full Name <span style={{ color: 'red' }}>*</span></InputLabel>
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
                    <Grid item xs={6}>
                      <Stack spacing={1.25}>
                        <InputLabel htmlFor="nic"> NIC <span style={{ color: 'red' }}>*</span></InputLabel>
                        <TextField
                          fullWidth
                          id="nic"
                          placeholder="Enter NIC"
                          {...getFieldProps('nic')}
                          error={Boolean(touched.nic && errors.nic)}
                          helperText={touched.nic && errors.nic}
                        />
                      </Stack>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </DialogContent>
            <Divider />
            <DialogActions sx={{ p: 2.5 }}>
              <Grid container justifyContent="space-between" alignItems="center">
                <Grid item>
                </Grid>
                <Grid item>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Button color="error" onClick={onCancel}>
                      Cancel
                    </Button>
                    <Button type="submit" variant="contained" disabled={isSubmitting}>
                      Submit
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </DialogActions>
          </Form>
        </LocalizationProvider>
      </FormikProvider>
    </>
  );
};

export default AddEditBusinessNature;
