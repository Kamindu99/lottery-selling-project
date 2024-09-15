// material-ui
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

// third-party
import { Form, FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';

// project imports
import { useState } from 'react';
import AnimateButton from 'components/@extended/AnimateButton';

const validationSchema = Yup.object({
});

// ==============================|| Customer Management Form Wizard - Basic Information  ||============================== //

export type LotteryNumbersData = {
  email?: string
};

interface LotteryNumbersFormProps {
  lotteryNumbersData: LotteryNumbersData;
  setLotteryNumbersData: (d: LotteryNumbersData) => void;
  handleNext: () => void;
  lastSavedFormIndex: number;
  activeStep: number;
  setErrorIndex: (i: number | null) => void;
}

const LotteryNumbersForm = ({
  lotteryNumbersData,
  setLotteryNumbersData,
  handleNext,
  activeStep,
  lastSavedFormIndex,
  setErrorIndex,
}: LotteryNumbersFormProps) => {

  const formik = useFormik({
    initialValues: {
      email: lotteryNumbersData.email || ''
    },
    validationSchema,
    onSubmit: async (values) => {
      if (lastSavedFormIndex >= activeStep) {
        setLotteryNumbersData({
          email: values.email
        });
        handleNext();
      }
      else {
        setLotteryNumbersData({
          email: values.email
        });
        handleNext();
      }
    }
  });

  const { handleSubmit } = formik;

  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);

  const handleNumberClick = (number: number) => {
    if (selectedNumbers.includes(number)) {
      setSelectedNumbers(selectedNumbers.filter((n) => n !== number));
    } else if (selectedNumbers.length < 4) {
      setSelectedNumbers([...selectedNumbers, number]);
    }
  };

  return (
    <>
      <FormikProvider value={formik}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Box sx={{ padding: '20px', textAlign: 'center' }}>
              <Typography variant="h5" gutterBottom>
                Select Your Lottery Numbers
              </Typography>

              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: {
                    xs: 'repeat(4, 1fr)', // 4 columns on extra small devices (mobile)
                    sm: 'repeat(5, 1fr)', // 5 columns on small devices (tablet)
                    md: 'repeat(6, 1fr)', // 6 columns on medium and larger devices (desktop)
                  },
                  gap: '15px',
                  justifyItems: 'center',
                  marginBottom: '20px',
                }}
              >
                {[...Array(30)].map((_, index) => {
                  const number = index + 1;
                  const isSelected = selectedNumbers.includes(number);
                  return (
                    <Button
                      key={number}
                      onClick={() => handleNumberClick(number)}
                      sx={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        backgroundColor: isSelected
                          ? 'linear-gradient(45deg, #ff6b6b, #f065c5)'
                          : '#f0f0f0',
                        color: isSelected ? 'white' : '#333',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        transition: '0.3s',
                        '&:hover': {
                          backgroundColor: isSelected
                            ? 'linear-gradient(45deg, #ff6b6b, #f065c5)'
                            : '#d8d8d8',
                        },
                      }}
                    >
                      {number}
                    </Button>
                  );
                })}
              </Box>
              <Box sx={{ marginTop: '20px' }}>
                <Typography variant="h6" gutterBottom>
                  Selected Numbers
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                  {selectedNumbers.map((number: any) => (
                    <Box
                      key={number}
                      sx={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        backgroundColor: '#6298f5',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'black',
                        fontWeight: 'bold',
                        fontSize: '18px',
                      }}
                    >
                      {number}
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
            <Grid item xs={12}>
              <Stack direction="row" justifyContent="flex-end">
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
          </Form>
        </LocalizationProvider >
      </FormikProvider >
    </>
  );
};

export default LotteryNumbersForm;
