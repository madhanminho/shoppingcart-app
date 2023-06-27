import style from './style.module.css';
import React, { ReactElement } from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/userAuthAction';
import { authUserState } from '../../redux/types';
import { CheckoutSummary } from '../checkout/CheckoutSummary';
type TypeCartSummary = {
    items: any[],
  }
  
  export type TypeCartSummaryItem = {
    price: number,
    quantity: number,
    id: never,
    image: string,
    title: string
  }
const Summary = ({ items }: TypeCartSummary) => {
    const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [loginOpen, setLoginOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("test");
 
const [useremail, setEmail] = React.useState('');
const [pwd, setPwd] = React.useState('');
  const handleClickOpen = () => {
    console.log("handleclick")
    setOpen(true);
  };
  const openLogin = () => {
    handleClose();
    setLoginOpen(true);
  }
  
  const handleLoginClose = () => {
    
    setLoginOpen(false);

  };
  
  const handleInputChange = (e:any)  => {
    
    if(e.currentTarget.id==='email'){
        setEmail(e.currentTarget.value);
    }
    if(e.currentTarget.id==='password'){
        setPwd(e.currentTarget.value);
    }

  }
  const getCheckoutSummary=():JSX.Element=>{
    console.log("madhanndddd");
 return <CheckoutSummary items={items}/>;
  }
  const handleSubmit = (e:any) => {
    console.log("Form submitted");
    e.preventDefault();
    console.log("Form submitted",useremail,pwd);
    if(useremail==='test@test.com' && pwd === 'test'){
        alert("this is a success alert ");
        const prof:authUserState={"profile":{"useremail":useremail,"password":pwd},"formSubmitted":true};
        dispatch(login(prof));
        handleLoginClose();
        getCheckoutSummary();
     }
     else{
        alert("Invalid cred ");
        //handleLoginClose();
         return (<Alert severity="error">This is an error alert — check it out!</Alert>)
        
     }
  }

  const handleClose = () => {
    setOpen(false);
  
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
    const sumItem = items.map((item: TypeCartSummaryItem) => item.quantity * item.price);
    // Total of all items
    const sumTotal = parseFloat((sumItem.reduce((a, b) => a + b, 0)).toFixed(2));
    return (
  <div className={style.cartCheckout}>
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
              Check Out
            </Button>
            <Dialog onClose={()=>handleClose()} open={open}>
      <DialogTitle>You must sign in to continue checking out</DialogTitle>
      <div className={style.dflexCenter}>
        <Button onClick={()=>handleClose()}>Continue shopping</Button>
      &nbsp;<Button onClick={()=>openLogin()}>Sign in to checkout</Button></div>
  </Dialog>

  {/*login*/}
  <Dialog onClose={()=>handleLoginClose()} open={loginOpen}>
      <DialogTitle>Sign In</DialogTitle>
      <div className={style.dflexCenter}>
      <form onSubmit={(e)=>handleSubmit(e)}>
 
      <Input
            
            id="email"
            placeholder="email"
            onChange={(event)=>{handleInputChange(event)}}
            type="text"
          /><br></br>
          <Input

            id="password"
    placeholder='enter your password'
            onChange={(event)=>{handleInputChange(event)}}
            type="password"
          />
          <br></br>
      &nbsp;<Button type="submit" variant='outlined'>Sign in</Button>
    </form>
      </div>
  </Dialog>
   </div>)
  };     
  export default Summary;