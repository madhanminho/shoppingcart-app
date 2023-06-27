import { Dispatch } from 'redux';
import { ProductsActionTypes, ProductsAction } from '../types'; 

// Combine them all in an asynchronous thunk
const fetchProducts=():any=> {
  return async (dispatch: Dispatch<ProductsAction>) => {
    dispatch({ type: ProductsActionTypes.GET_PRODUCTS });
    try {
      const response = await fetch(`${process.env.REACT_APP_API_DOMAIN}/products`);
      const data = await response.json();
      console.log(data, 'data')
      dispatch({ type: ProductsActionTypes.GET_PRODUCTS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: ProductsActionTypes.GET_PRODUCTS_FAILURE });
    }
  };
}

export default fetchProducts;
