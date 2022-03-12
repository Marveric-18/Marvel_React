import React from 'react';
import PropTypes from "prop-types";

//material-ui import
import { Container } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { 
    AppBar, 
    Toolbar,
    IconButton ,
    Typography } from '@material-ui/core';



import MenuIcon from '@material-ui/icons/Menu';

const AppBarView = (props) => {
    console.log("Appbarview: ", props)
    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                width: { sm: `calc(100% - ${props.drawerWidth}px)` },
                ml: { sm: `${props.drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={props.handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        {props.title}
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default AppBarView;