//react import
import React from 'react';

//material-ui import
import { Container } from '@material-ui/core';

//custom import
import {AuthLayoutStyle} from "../components/CustomStyle/AuthStyle";

const AuthLayout =  ({ children}) => {
    const classes = AuthLayoutStyle();
    return(
        
        <Container className={classes.outerWrapper} maxWidth="false" disableGutters= "true" >
            <Container className={classes.innerWrapper} maxWidth="false" disableGutters= "true" >
                {children}
            </Container>
        </Container>
        
    );
}

export default AuthLayout;