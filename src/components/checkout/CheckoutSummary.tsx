import style from './style.module.css';
import React from 'react';

import Button from '@mui/material/Button';

import { useDispatch } from 'react-redux';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import CartList, { CartListPropsType } from '../CartItems/CartList';
type TypeCart = {
  cart: [],
  quantity: number
}

  export  const CheckoutSummary = () => {
    const itemsCart = useSelector((state: TypeCart) => state.cart);
    const cartItems:Array<any> = [...itemsCart].reverse();
    const items:Array<any> =cartItems;
    const itemLength =itemsCart.length>0? itemsCart.map((item: TypeCart) => item.quantity).reduce((a, b) => a + b, 0):0;
  const isItemsAvail = itemLength !== 0;
    const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const steps = ['Order Summary', 'Shipping Details', 'Payment Info'];
  const handleClickOpen = () => {
    console.log("handleclick")
    setOpen(true);
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

 

  const handleReset = () => {
    setActiveStep(0);
  };

    // Line item amount
    const sumItem = items.map((item: any) => item.quantity * item.price);
    // Total of all items
    const sumTotal = parseFloat((sumItem.reduce((a, b) => a + b, 0)).toFixed(2));
    return (
      <Box sx={{ width: '100%' }}>
      <div className={style.cartCheckout}>
        <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
        
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
      {activeStep===0 && (<>
        <div>
          <div className={style.cartList}>        
        {isItemsAvail && cartItems.map((product:CartListPropsType)=> (
          <div><CartList price={product.price}  quantity={product.quantity} id={product.id}
          image={product.image}  title={product.title}/></div>)
        )}
        </div>
        <div className={style.cartTotal}>
                <p className={style.cartTotalTitle}>Subtotal Amout:</p>
                <h2 className={style.cartTotalAmount}>
                  {sumTotal}
                </h2>
              </div>
    
    </div>{/* 
      <div className={style.cartTotal}>
                <p className={style.cartTotalTitle}>Subtotal Amout:</p>
                <h2 className={style.cartTotalAmount}>
                  {sumTotal}
                </h2>
              </div> */}
              </>)}
      {activeStep===1 &&(<><h3>Shipping Info Here</h3></>)}
      {activeStep===2 && (<><h3>Payment Info Here</h3></>)}
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
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
            
   </div></Box>)
  };     
