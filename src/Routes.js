import React, { Component } from 'react';

// Route Type
import publicRoute from "./routes/routeType/publicRoute";

// Route Validations
import PublicRoute from "./routes/routeValidation/PublicRoute";

import withTracker from "./routes/withTracker";
// import ModalView from "./components/modal/modal";

class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        
    }
    render() { 
        return ( 
            <div>
        {publicRoute.map((route, index) => {
            return (
            <PublicRoute
                key={index}
                path={route.path}
                exact={route.exact}
                pushHistory = {this.props.pushHistory}
                component={withTracker(props => {
                    return (
                        <route.layout {...props}>
                            <route.component {...props} />
                        </route.layout>
                    );
                })}
            />
            );
        })}
        
        </div>
         );
    }
}

export default Routes;