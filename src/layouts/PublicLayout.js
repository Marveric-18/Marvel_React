import React from 'react';
import PropTypes from "prop-types";


import { Container } from '@material-ui/core';
import {HorizontalSidebar} from '../components/navigration/horizontalNavbar';
import { Grid } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import bgImage from "../assests/images/bgImage1.jpg";
const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        position : "absolute",
    },
    roo1 : {
        
        position : "relative",
    },
    header : {
        width : "100%",
        
        '&::before':{
            backgroundImage: `url(${bgImage})`,
            backgroundSize : "cover",
            backgroundRepeat: "no-repeat",
            content: "''",
            position: 'absolute',
            width: "100%",
            height: "105%",
            maxWidth: "100%",
            maxHeight: "105%",
            zIndex: '-1',
            opacity: "0.5",
            
            
        }
      },
      inner: {
        position: "absolute",
        display: "inline-block",
        padding:"30px",
        left:"50%",
        bottom:"-125px",
        
        transform: "translateX(-50%)",
        width:"100%",
        background:"white",
        
        textAlign:"center",
    }
    
  }));
const PublicLayout = ({ children, noNavbar, noFooter }) => {
    const classes = useStyles();
    return(
    <Container maxWidth="false" disableGutters= "true" >
        <Container className={classes.header}  maxWidth="false" disableGutters= "true">
                <HorizontalSidebar/>
                <Container className={classes.inner} maxWidth="false" disableGutters= "true">
                    {children}
                </Container>
        </Container>
        
    </Container>
);}
  
PublicLayout.propTypes = {
/**
 * Whether to display the navbar, or not.
 */
noNavbar: PropTypes.bool,
/**
 * Whether to display the footer, or not.
 */
noFooter: PropTypes.bool
};

PublicLayout.defaultProps = {
    noNavbar: false,
    noFooter: false
};

export default PublicLayout;

