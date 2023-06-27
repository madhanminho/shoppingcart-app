import { combineReducers } from 'redux';
import productsReducer from './productsReducer'; 
import cartReducer from './cartReducer'; 
import authReducer from './authReducer';
// CombineReducers
const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  profile:authReducer,
});

export default rootReducer;
