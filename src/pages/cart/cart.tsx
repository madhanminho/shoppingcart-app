import { useSelector } from 'react-redux';
import styles from './style.module.css';
import Button from '@mui/material/Button';
import Summary from '../../components/CartSummary/Summary';
import CartList, { CartListPropsType } from '../../components/CartItems/CartList';
type TypeCart = {
  cart: [],
  quantity: number
}
interface CartInterface{
  toggleCallback():void
}
const CartPage = (props:CartInterface) => {
  const itemsCart = useSelector((state: TypeCart) => state.cart);
  //console.log(itemsCart);
  const cartItems:Array<any> = [...itemsCart].reverse();
  const itemLength =itemsCart.length>0? itemsCart.map((item: TypeCart) => item.quantity).reduce((a, b) => a + b, 0):0;
  const isItemsAvail = itemLength !== 0;
  console.log(itemsCart, 'itemsCart');

  return (
    <div>
          <div className={styles.cartList}>
            <div className={styles.cartHeader}>
            <h3 className={styles.cartHeaderTitle}>
              My Cart &nbsp;
              <span>
                (
                {` ${itemLength} ${itemLength > 1 ? 'items' : 'item'}`}
                )
              </span>
            </h3>
            <Button className={styles.closeButton} onClick={()=>{props.toggleCallback()}}>Close</Button>
            </div>
           
          
         {!isItemsAvail && (
            <div className={styles.cartEmpty}>
              <h5 className="basket-empty-msg">Your cart is empty</h5>
            </div>
        )}
        {isItemsAvail && cartItems.map((product:CartListPropsType)=> (
          <div><CartList price={product.price}  quantity={product.quantity} id={product.id}
          image={product.image}  title={product.title}/></div>)
        )}
        </div>
        <Summary items={cartItems}/>
    
    </div>
    );
  };
export default CartPage;
