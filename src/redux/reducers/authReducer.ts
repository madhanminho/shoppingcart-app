import { AuthActionTypes, authUserState } from '../types';
// Intiial state
export const initialState: authUserState = {
    profile: {
    useremail: '',
    password: '',
    },
    formSubmitted:false,
  };
// Reducer
function authReducer(state:Array<any> = [], action:any) {

  switch (action.type) {
    case AuthActionTypes.LOGIN:
        console.log('login', action.payload.user)
        return {
          ...state,
          profile: action.payload.user,
          formSubmitted: false // after update user formsubmition reset
        }
    case AuthActionTypes.FORM_SUBMITION_STATUS:
        return {
            ...state,
            formSubmitted: action.payload.status
          }
        default:
          return state;
  }
}

export default authReducer;