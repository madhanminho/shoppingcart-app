import style from './style.module.css';
import React from 'react';

import Button from '@mui/material/Button';

import { useDispatch } from 'react-redux';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
type TypeCheckoutSummary = {
    items: any[],
  }
  
  export type TypeCheckoutSummaryItem = {
    price: number,
    quantity: number,
    id: never,
    image: string,
    title: string
  }

  export  const CheckoutSummary = ({ items }: TypeCheckoutSummary) => {
    const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];
  const handleClickOpen = () => {
    console.log("handleclick")
    setOpen(true);
  };
  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
    const onCheckOut = () => {
        console.log("triggered")
        handleClickOpen();
        if ((items.length !== 0 //&& user
            )) {
          document.body.classList.remove('is-basket-open');
          //history.push(CHECKOUT_STEP_1);
        } else {
        //  onOpenModal();
       
        }
      };
    // Line item amount
    const sumItem = items.map((item: TypeCheckoutSummaryItem) => item.quantity * item.price);
    // Total of all items
    const sumTotal = parseFloat((sumItem.reduce((a, b) => a + b, 0)).toFixed(2));
    return (
      <div className={style.cartCheckout}>
        <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
            <div className={style.cartTotal}>
              <p className={style.cartTotalTitle}>Subtotal Amout:</p>
              <h2 className={style.cartTotalAmount}>
                {sumTotal}
              </h2>
            </div>
            <Button
              className={style.cartCheckoutButton}
             /*  disabled={basket.length === 0 || pathname === '/checkout'} */
              onClick={()=>onCheckOut()}
              type="button"
              variant="contained"
            >
              Next Step
            </Button>
   
  
   </div>)
  };     
