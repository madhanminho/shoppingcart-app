import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ImageComp from '../ImageComp/Image'; 
import Logo from '../../static/logo.png';
import Basket from '../../static/basket.png';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import style from './style.module.css';
import Badge, { BadgeProps } from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import React from 'react';
import CartComp from '../../pages/cart/cart';
export type NaviagationType = {
  cart: []
}
type Anchor = 'top' | 'left' | 'bottom' | 'right';
const Naviagation = () => {
  // Number of products
  const itemCartAmount = useSelector((state: NaviagationType) => state.cart.length);
  const [toggleSidebar, setToggleSidebar] = React.useState(false);

  const toggleDrawer =
    ( open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setToggleSidebar( open );
    };
    const toggleCartCallback=()=>{
      console.log("callback",toggleSidebar);
      setToggleSidebar(!toggleSidebar);
    }
  return (
    <header>
      <nav className={style.navigation}>
        <Link to="/">
          <ImageComp
            src={Logo}
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
        <div className={style.wrapper}>
        <Button onClick={toggleDrawer(true)}>Cart</Button>
          
            {/* <ImageComp
              src={Basket}
              width={50}
              height={40}
              alt="basket"
            /> */}
            <IconButton aria-label="cart">
      <Badge badgeContent={itemCartAmount} color="secondary">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
    <Drawer
            anchor={'right'}
            open={toggleSidebar}
            onClose={toggleDrawer(false)}
          >
            {<CartComp toggleCallback={toggleCartCallback}/>}
          </Drawer>
      
        </div>
      </nav>
    </header>
  );
};

export default Naviagation;
