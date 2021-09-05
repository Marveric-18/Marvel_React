//react import
import React, { useEffect, useState } from 'react';

//material-ui import
import { Container, Grid, Paper, Icon } from '@material-ui/core';
import { loadCSS } from 'fg-loadcss';
import clsx from "clsx";
import Aos from 'aos';
import 'aos/dist/aos.css';

//extra libraries import
import Typewriter from "typewriter-effect";

//custom import 
import { TitleTextXL } from '../../components/Text/TitleText';
import {BasicStyle, AlignStyle, PaddingStyle, MarginStyle} from "../../components/CustomStyle/BasicStyle";

//material-ui import
import { makeStyles, createStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import bgImage from "../../assests/images/contactusBg.jpg";

export const ContactStyle = makeStyles((theme) => createStyles({
    root: {
        textAlign: "center",
    },
    contact_us: {
        marginTop : "2.5%",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        width: "100%",
        height: "120vh",
        maxWidth: "100%",
        minHeight: "85vh",
        textAlign: "center",
        '&::after': {
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
        }
    },
    special: {
        height: "30vw",
        width: "100%",
        padding: "5%",
        paddingTop: "0%",
        paddingBottom: "0%",
        display: 'flex',
        flexWrap: 'wrap',
    },
    divSquare: {

        width: "50%",
        height: "50%",
    }
    
}));

export const FormStyle = makeStyles((theme) => createStyles({
    root: {
        '& > *': {
          margin: theme.spacing(4),
          width: '70vh',
        },
        '& label.Mui-focused': {
            color: 'white',
        },
        '& label': {
            color: 'white',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
        },
        '& .MuiInput-underline:before': {
            borderBottomColor: 'white',
        },
        '& .MuiInput-root': {
            color: 'white',
        },
      },
    field : {
        c : "white"
    }
    
}));

const ContactUs = () => {
    const classes = ContactStyle();
    const formstyle = FormStyle();
    const padding = PaddingStyle();
    const margin = MarginStyle();
    const alignText = AlignStyle();
    const basicstyle = BasicStyle();
    return (
        <>
            <Container className={basicstyle.devider} maxWidth="false" disableGutters="true" ></Container>

            <TitleTextXL variant="h2" className={classes.animatedItem}>
                Contact Us
            </TitleTextXL>

            <Container className={clsx( padding.paddingTop5, classes.contact_us)}  maxWidth="false" disableGutters="true" >
                <Container className={classes.special} maxWidth="false" disableGutters="true" >
                    <div className={classes.divSquare}>
                        
                    </div>
                    <div className={classes.divSquare}>
                        <form className={formstyle.root} noValidate autoComplete="off">
                            <TextField id="standard-basic" label="Email" />
                            <TextField id="standard-basic" label="Name" />
                            <TextField id="standard-basic" label="Subject" />
                            <TextField id="standard-basic" label="Message" />
                        </form>
                    </div>
                        
                </Container >
            </Container>
        </>
    );

}

export default ContactUs;