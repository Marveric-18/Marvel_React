import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals';
// import store from './app/store'
import { PersistGate } from 'redux-persist/integration/react';
import Store, {persistor} from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
        <Provider store={Store}>
            <PersistGate loading={null} persistor={persistor}>
                  <Router basename={process.env.REACT_APP_BASENAME || ""}>
                        <App />
                  </Router>
            </PersistGate>
        </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

serviceWorker.unregister();
