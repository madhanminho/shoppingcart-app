import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, addQuantity, decQuantity } from '../../redux/actions/cartAction'; 
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import style from './style.module.css'; 
import CloseIcon from '@mui/icons-material/Close';
export interface CartListPropsType {
    price: number,
    quantity: number,
    id: never,
    image: string,
    title: string
  }

const CartList = (props:CartListPropsType) => {
    const {
        price, quantity, image, id, title,
      } = props;
      const cartItemsSum = parseFloat((price * quantity).toFixed(2));
  const dispatch = useDispatch();
  return (
    <div className={style.cartItem}>
      <div className={style.cartItemControl}>
      <Button
        className="button button-border button-border-gray button-small basket-control basket-control-add"
        
        onClick={() => dispatch(addQuantity(id))} 
        type="button"
      >
        <AddIcon />
      </Button>
      <Button
        className="button button-border button-border-gray button-small basket-control basket-control-minus"
        disabled={quantity === 1}
        onClick={() => dispatch(decQuantity(id))} 
        type="button"
      >
        <RemoveIcon />
      </Button>
    </div>


      <div className={style.cartItemWrapper}>
        <div className={style.cartItemImageWrapper}>
          <img
        src={image}
        alt="product"
        className={style.cartItemImage}
      />
        </div>
        <div className={style.cartItemDetails}>
       
            <h4 className="underline basket-item-name">
              {title}
            </h4>
         
          <div className={style.cartItemSpecs}>
            <div>
              <span className={style.specTitle}>Quantity</span>
              <h5 className="my-0">{quantity}</h5>
            </div>
            <div>
            <div className={style.cartItemPrice}>
            <span className={style.specTitle}>Total Price</span>
          <h4 className="my-0">{cartItemsSum}</h4>
          </div>
        </div>
          </div>
        </div>
        
        <Button
          className={style.cartItemRemove}
          onClick={() =>dispatch(removeFromCart(id))}
        >
           <CloseIcon />
        </Button>
      </div>
    </div>
  );
};
export default CartList;
