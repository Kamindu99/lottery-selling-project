import { ReactNode, useState } from 'react';

// material-ui
import { Button, DialogContent, DialogTitle, Divider, Stack, Step, StepLabel, Stepper, Typography } from '@mui/material';

// project imports
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import AnimateButton from 'components/@extended/AnimateButton';
import CustomerDetailsForm, { CustomerDetailsData } from './CustomerDetailsForm';
import LotteryNumbersForm, { LotteryNumbersData } from './LotteryNumbersForm';
import PaymentDetailsForm, { PaymentDetailsData } from './PaymentDetailsForm';

// step options
const steps = ['Ticket Number', 'Customer Details', 'Payment Details'];

const getStepContent = (
  step: number,
  handleNext: () => void,
  handleBack: () => void,
  lastSavedFormIndex: number,
  customerId: number | undefined,
  setErrorIndex: (i: number | null) => void,
  customerDetailsData: CustomerDetailsData,
  setCustomerDetailsData: (d: CustomerDetailsData) => void,
  lotteryNumbersData: LotteryNumbersData,
  setLotteryNumbersData: (d: LotteryNumbersData) => void,
  paymentDetailsData: PaymentDetailsData,
  setPaymentDetailsData: (d: PaymentDetailsData) => void,
) => {
  switch (step) {
    case 0:
      return (
        <LotteryNumbersForm
          handleNext={handleNext}
          activeStep={step}
          lastSavedFormIndex={lastSavedFormIndex}
          setErrorIndex={setErrorIndex}
          lotteryNumbersData={lotteryNumbersData}
          setLotteryNumbersData={setLotteryNumbersData}
        />
      );
    case 1:
      return (
        <CustomerDetailsForm
          handleNext={handleNext}
          handleBack={handleBack}
          activeStep={step}
          lastSavedFormIndex={lastSavedFormIndex}
          setErrorIndex={setErrorIndex}
          customerDetailsData={customerDetailsData}
          setCustomerDetailsData={setCustomerDetailsData}
          customerId={customerId}
        />
      );
    case 2:
      return (
        <PaymentDetailsForm
          handleNext={handleNext}
          handleBack={handleBack}
          activeStep={step}
          lastSavedFormIndex={lastSavedFormIndex}
          setErrorIndex={setErrorIndex}
          paymentDetailsData={paymentDetailsData}
          setPaymentDetailsData={setPaymentDetailsData}
          customerId={customerId}
        />
      );
    default:
      throw new Error('Unknown step');
  }
};

// ==============================|| Customer Forms WIZARD - VALIDATION ||============================== //

export interface Props {
  onCancel: () => void;
}

const CustomerFormWizard = ({ onCancel }: Props) => {
  const [activeStep, setActiveStep] = useState(0);
  const [lastSavedFormIndex, setLastSavedFormIndex] = useState(-1);
  const [customerId] = useState<number | undefined>(undefined);

  const [customerDetailsData, setCustomerDetailsData] = useState<CustomerDetailsData>({

  });

  const [lotteryNumbersData, setLotteryNumbersData] = useState<LotteryNumbersData>({

  })

  const [paymentDetailsData, setPaymentDetailsData] = useState<PaymentDetailsData>({

  })

  const [errorIndex, setErrorIndex] = useState<number | null>(null);
  console.log(errorIndex);


  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setErrorIndex(null);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DialogTitle>{'Add New Booking'}</DialogTitle>
      <Divider />
      <DialogContent sx={{ p: 2.5 }}>
        <>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label, index) => {
              const labelProps: { error?: boolean; optional?: ReactNode } = {};
              return (
                <Step key={label}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          <>
            {activeStep === steps.length ? (
              <>
                <Typography variant="h5" gutterBottom>
                  Customer Code<br />
                  Customer Creation Successful !
                </Typography>
                <Stack direction="row" justifyContent="flex-end">
                  <AnimateButton>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => {
                        setCustomerDetailsData({

                        });
                        setLotteryNumbersData({

                        });
                        setPaymentDetailsData({

                        })
                        setLastSavedFormIndex(-1);
                        window.location.replace('/member-registration/member/registration');
                      }}
                      sx={{ my: 3, ml: 1 }}
                    >
                      Done
                    </Button>
                  </AnimateButton>
                </Stack>
              </>
            ) : (
              <>
                <>
                  {getStepContent(activeStep, handleNext, handleBack, lastSavedFormIndex,
                    customerId, setErrorIndex, customerDetailsData, setCustomerDetailsData,
                    lotteryNumbersData, setLotteryNumbersData, paymentDetailsData,
                    setPaymentDetailsData)}
                </>
              </>
            )}
          </>
        </>
      </DialogContent>
      {/* <Divider /> */}
      {/* <DialogActions sx={{ p: 2.5 }}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
          </Grid>
          <Grid item>
            <Stack direction="row" spacing={2} alignItems="center">
              <Button color="error" onClick={onCancel}>
                Cancel
              </Button>
              <Button type="submit" variant="contained" >
                Submit
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </DialogActions> */}
    </LocalizationProvider>
  );
};

export default CustomerFormWizard;
