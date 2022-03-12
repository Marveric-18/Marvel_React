import { combineReducers } from 'redux';
// import * as actionType from '../actions/type';

// import storage from 'redux-persist/lib/storage';

// //import reducers
// import toggleSidebar from "./toggleSidebar";
import tokenReducer from "../../containers/AuthPage/reducer"

let initialState = {
    
        error : {
            message : "",
            code : ""
        },
        isLoading : false,
        isError : false
    
}



const appState = (state = initialState, action) => {

    
    switch(action.type) {
        
        case "SHOW_LOADER":
            return {
                ...state,
                
                isLoading : true,
                error : {
                    ...state.error,
                }
                
            };
        case "HIDE_LOADER":
            return {
                ...state,
                
                isLoading : false,
                error : {
                    ...state.error,
                    
                }
            };
            
        default:
            return state;

    }

}

const appReducer = combineReducers({
    tokenReducer,
    appState
})

const rootReducer = (state, action) => {

    // if (actionType.USER_LOGGED_OUT === 'USER_LOGGED_OUT') {
    //     storage.removeItem('persist:root')
    //     return appReducer(undefined, action);
    // }

    return appReducer(state, action);

}

export default rootReducer;