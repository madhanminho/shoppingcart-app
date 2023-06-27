import style from './style.module.css';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
type TypeCartRow = {
  title: string,
  amount?: number,
  sum: number
} & typeof defaultProps;

const defaultProps = {
  amount: 0,
};

const CartRow = ({ title, amount, sum }: TypeCartRow) => (
  <div className={style.row}>
    <p>
      {amount === 0 ? '' : amount}
      {' '}
      {title}
    </p>
    <p>
    {/* <CurrencyRupeeIcon fontSize='inherit'/> */}
    ₹{sum}
    </p>
  </div>
);

CartRow.defaultProps = defaultProps;

export default CartRow;
