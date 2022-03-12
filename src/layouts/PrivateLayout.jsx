//react import
import React from 'react';
import PropTypes from "prop-types";

//material-ui import
import { Container } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import {
    Box, 
    CssBaseline,
    Toolbar, 
    } from '@material-ui/core';

//custom import
import AppBar from '../components/Header/AppBar';
import VerticalNavbar from '../components/navigration/VerticalNavbar';

//custom style
const PrivateLayoutStyle = makeStyles((theme) => createStyles({
    outerWrapper : {
        background : "rgb(58, 55, 55)",
    }

    
}));





const PrivateLayout = ({ children, noNavbar, noFooter }) => {
    const classes = PrivateLayoutStyle();
    
    const drawerWidth = 240;

    return(
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar drawerWidth={drawerWidth} title={"CEASER- The Shoe Lover"}/>

            <VerticalNavbar drawerWidth={drawerWidth} />

             {/* MAIN WINDOW */}
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
            <Toolbar />
                {children}
            </Box>
        </Box>
);}
  
PrivateLayout.propTypes = {
/**
 * Whether to display the navbar, or not.
 */
noNavbar: PropTypes.bool,
/**
 * Whether to display the footer, or not.
 */
noFooter: PropTypes.bool
};

PrivateLayout.defaultProps = {
    noNavbar: false,
    noFooter: false
};

export default PrivateLayout;
