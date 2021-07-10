import { compose, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducers/index.js';

const persistConfig = {
    key: 'rootReducer4',
    storage: storage,
    // blacklist : ['toggleSidebar']
};

const presistedReducer = persistReducer(persistConfig, rootReducer );

const Store = createStore(

    presistedReducer,
    
    composeWithDevTools(
    
        applyMiddleware(
        
            thunk
    
        ),

    )
    
);
    
export const persistor = persistStore(Store);

export default Store;
