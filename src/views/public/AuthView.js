//react import
import React from 'react';

//material-ui import
import { Container } from '@material-ui/core';

//custom import
import {AuthLayoutStyle} from "../../components/CustomStyle/AuthStyle";

import Auth from '../../containers/AuthPage/Auth';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

const AuthView =  ({ props}) => {
    const classes = AuthLayoutStyle();
    return(
        
        <Container className={classes.outerWrapper} maxWidth="false" disableGutters= "true" >
            <Container className={classes.innerWrapper} maxWidth="false" disableGutters= "true" >

             <Router>
                <Switch>
                    <Route exact path={"/login"} render={(props) => {
                        return <Auth {...props} type={"login"}/>
                    }}/>
                    <Route exact path={"/signup"} render={(props) => {
                        return <Auth {...props} type={"signup"}/>
                    }}/>
                </Switch>
            </Router>

            </Container>
        </Container>
        
    );
}

export default AuthView;