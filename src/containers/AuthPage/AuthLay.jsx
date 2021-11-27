//react import
import React from 'react';

//material-ui import
import { Container } from '@material-ui/core';

//custom import
import {AuthLayoutStyle} from "../../components/CustomStyle/AuthStyle";

import Auth from "./Auth";
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

const AuthLay =  (props) => {
    const classes = AuthLayoutStyle();
    return(
        
        <Container className={classes.outerWrapper} maxWidth="false" disableGutters= "true" >
            <Container className={classes.innerWrapper} maxWidth="false" disableGutters= "true" >

             <Router>
                <Switch>
                    <Route exact path={"/login"} render={(props) => {
                        return <Auth {...props} type={"signup"}/>
                    }}/>
                    <Route exact path={"/signin"} render={(props) => {
                        return <Auth {...props} type={"login"}/>
                    }}/>
                </Switch>
            </Router>

            </Container>
        </Container>
        
    );
}

export default AuthLay;