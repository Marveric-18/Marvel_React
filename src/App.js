// import logo from './logo.svg';
import React from 'react';
import Routes from "./Routes";
import { useHistory } from "react-router-dom";

import './App.css';
// import LandingPage from "./containers/landingPage/index"
function App() {
  const history = useHistory();
    function pushHistory (location) {
        history.push("/"+location);
    };
  return (
    // <React.Fragment>
    //   <LandingPage/>
    // <h1>
    //   Ceaser APP
    // </h1>
    // </React.Fragment>
    <Routes pushHistory= {pushHistory} />
  );
}

export default App;
