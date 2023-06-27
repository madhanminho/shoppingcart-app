import { Dispatch } from 'redux';
import { AuthActionTypes, AuthAction, AuthUser, authUserState } from '../types'; 
export const login= (user:authUserState) => ({ type: AuthActionTypes.LOGIN, payload: { user } });
/*
const validateUser=(data: AuthUser):any=> {
    return async (dispatch: Dispatch<AuthAction>) => {

      dispatch({ type:AuthActionTypes.AUTH_USER,data.payload});
      try {
        const response = await fetch( `${process.env.REACT_APP_API_DOMAIN}/login`);
        const respData = await response.json();
        console.log(data, 'data')
       const res= respData.payload.filter(user=>{
        if(user.email===data.payload.useremail && user.password===data.payload.password) return true });
        if(res){
            dispatch({ type: AuthActionTypes.AUTH_SUCCESS, payload: respData });
        }
        else{
            dispatch({ type: AuthActionTypes.AUTH_FAILURE });
        }
       
      } catch (error) {
        dispatch({ type: AuthActionTypes.AUTH_FAILURE });
      }
    };
  }*/
  