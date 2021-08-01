//react import
import React from 'react';
import PropTypes from "prop-types";

//material-ui import
import { Container } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

//custom import
import {HorizontalSidebar} from '../components/navigration/horizontalNavbar';
import bgImage from "../assests/images/bgImage1.jpg";

//custom style
const useStyles = makeStyles((theme) => createStyles({
    header : {
        width : "100%",
        height: "85vh",
        minHeight: "85vh",
        minWidth : "100%",
        '&::before':{
            backgroundImage: `url(${bgImage})`,
            backgroundSize : "cover",
            backgroundRepeat: "no-repeat",
            content: "''",
            position: 'absolute',
            width: "100%",
            height: "105%",
            maxWidth: "100%",
            minHeight: "85vh",
            zIndex: '-1',
            opacity: "0.5",
            //* Create the parallax scrolling effect */
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
        }
      },
      content: {
        position: "relative",
        display: "inline-block",
        //padding:"30px",
        left:"50%",
        bottom:"-125px",
        transform: "translateX(-50%)",
        width:"100%",
        background:"white",
        minHeight: "100px",
        height: "auto",
        
    },

    
  }));

const PublicLayout = ({ children, noNavbar, noFooter }) => {
    const classes = useStyles();
    return(
    <Container maxWidth="false" disableGutters= "true" >
        
        <Container className={classes.header} maxWidth="false" disableGutters= "true">
            <HorizontalSidebar/>
        </Container>
        
        <Container className={classes.content} maxWidth="false" disableGutters= "true">
            {children}
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

