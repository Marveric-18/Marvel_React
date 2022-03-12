import { combineReducers } from 'redux';
import * as actionType from './actionType';

import storage from 'redux-persist/lib/storage';

// //import reducers
// import toggleSidebar from "./toggleSidebar";
// import userDetail from "./userDetail";

let userTokenInitialState = {
    userAuth:{
        token : {
            activation_token : "",
            refresh_token : ""
        },
        is_admin : false,
        is_authenticated : false,
        is_staff : false
    },
}



const tokenReducer = (state = userTokenInitialState, action) => {

    
    switch(action.type) {
        
        case actionType.AUTH_SET_TOKEN:
            return {
                ...state,
                userAuth : {
                    ...state.userAuth,
                    is_admin : action.payLoad.data.is_admin,
                    is_authenticated : action.payLoad.data.is_authenticated,
                    is_staff : action.payLoad.data.is_staff,
                    token : {
                        ...state.userAuth.token,
                        activation_token : action.payLoad.data.access,
                        refresh_token : action.payLoad.data.refresh
                    }
                }
            }
        
        case actionType.AUTH_UNSET_TOKEN:
            return userTokenInitialState;
            
        default:
            return state;

    }

}

export default tokenReducer;