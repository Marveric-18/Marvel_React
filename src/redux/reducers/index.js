import { combineReducers } from 'redux';
// import * as actionType from '../actions/type';

// import storage from 'redux-persist/lib/storage';

// //import reducers
// import toggleSidebar from "./toggleSidebar";
// import userDetail from "./userDetail";

// let tokenInitialState = {
//     user:{
//         token : {
//             activation_token : "",
//             refresh_token : ""
//         },
//         is_admin : false,
//         is_authenticated : false,
//         is_staff : false
//     }
// }



// const token = (state = tokenInitialState, action) => {

    
//     switch(action.type) {
        
//         case actionType.SET_TOKEN:
//             return {
//                 ...state,
//                 user : {
//                     ...state.user,
//                     is_admin : action.payLoad.data.is_admin,
//                     is_authenticated : action.payLoad.data.is_authenticated,
//                     is_staff : action.payLoad.data.is_staff,
//                     token : {
//                         ...state.user.token,
//                         activation_token : action.payLoad.data.access,
//                         refresh_token : action.payLoad.data.refresh
//                     }
//                 }
//             }
//         case actionType.CREATE_USER:
//             return state;
        
//         case actionType.UNSET_TOKEN:
//             return tokenInitialState;
            
//         default:
//             return state;

//     }

// }

const appReducer = combineReducers({

})

const rootReducer = (state, action) => {

    // if (actionType.USER_LOGGED_OUT === 'USER_LOGGED_OUT') {
    //     storage.removeItem('persist:root')
    //     return appReducer(undefined, action);
    // }

    return appReducer(state, action);

}

export default rootReducer;