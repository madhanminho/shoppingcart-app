// Interface state Product
export interface ProductsState {
    products: Array<string>,
    loading: boolean,
    hasErrors: null | boolean,
}

export interface authUserState {
    profile:{
    useremail:string,
    password:string,
   },
   formSubmitted: boolean,
   /* checkoutItems: Array<string>,
    loading: boolean,
    hasErrors: null | boolean,*/
}
export enum AuthActionTypes {
    LOGIN= 'LOGIN',
    FORM_SUBMITION_STATUS= 'FORM_SUBMITION_STATUS'
}
export interface AuthUser {
    type: AuthActionTypes.LOGIN,
    payload: authUserState
}

// Enum Cart
export enum CartActionTypes {
    ADD_TO_CART = 'ADD_TO_CART',
    REMOVE_FROM_CART = 'REMOVE_FROM_CART',
    ADD_QUANTITY = 'ADD_QUANTITY',
    DEC_QUANTITY = 'DEC_QUANTITY',
}

// Enum produc
export enum ProductsActionTypes {
    GET_PRODUCTS = 'GET_PRODUCTS',
    GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS',
    GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE',
}

// Interface AddToCart action
export interface AddToCart {
    type: CartActionTypes.ADD_TO_CART,
    payload: string
}

// Interface RemoveFromCart action
export interface RemoveFromCart {
    type: CartActionTypes.REMOVE_FROM_CART,
    payload: number
}

// Interface AddQuantity action
export interface AddQuantity {
    type: CartActionTypes.ADD_QUANTITY,
    payload: number
}

// Interface DeqQuantity action
export interface DeqQuantity {
    type: CartActionTypes.DEC_QUANTITY,
    payload: number
}

// Interface GetProductsAction action
export interface GetProductsAction {
    type: ProductsActionTypes.GET_PRODUCTS,
}

// Interface GetProductsSuccesAction action
export interface GetProductsSuccesAction {
    type: ProductsActionTypes.GET_PRODUCTS_SUCCESS,
    payload: []
}

// Interface GetProductsFailureAction action
export interface GetProductsFailureAction {
    type: ProductsActionTypes.GET_PRODUCTS_FAILURE
}

// Types ProductsAction
export type ProductsAction =
    GetProductsAction |
    GetProductsSuccesAction |
    GetProductsFailureAction

// Types CartAction
export type CartAction =
    AddToCart |
    RemoveFromCart |
    AddQuantity |
    DeqQuantity
// Types ProductsAction
export type AuthAction =AuthUser