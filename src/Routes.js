import React, { Component } from 'react';

// Route Type
import publicRoute from "./routes/routeType/publicRoute";

// Route Validations
import PublicRoute from "./routes/routeValidation/PublicRoute";

import withTracker from "./routes/withTracker";
// import ModalView from "./components/modal/modal";

import AuthView from './views/public/AuthView';
import HomeView from './views/public/HomeView'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        
    }
    render() { 
        
        return ( 
            <div>
        {/* {publicRoute.map((route, index) => {
            return (
            <PublicRoute
                key={index}
                path={route.path}
                exact={route.exact}
                pushHistory = {this.props.pushHistory}
                type={route.type}
                component={withTracker(props => {
                    return (
                        <route.layout  {...props}>
                            <route.component type={route.type} {...props} />
                        </route.layout>
                    );
                })}
            />
            );
        })} */}
        <Route exact path={"/login"} component={(props) => <AuthView {...props} pushHistory = {this.props.pushHistory} type="login"/>}/>
        <Route exact path={"/signup"} component={(props) => <AuthView {...props} pushHistory = {this.props.pushHistory} type="signup"/>}/>
        <Route exact path={"/home"} component={(props) => <HomeView {...props} pushHistory = {this.props.pushHistory} />}/>
        <Route exact path={"/"} component={(props) => <HomeView {...props} pushHistory = {this.props.pushHistory} />}/>
        </div>
         );
    }
}

export default Routes;