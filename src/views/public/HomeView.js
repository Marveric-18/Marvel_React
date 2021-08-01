//react import
import React from 'react';


//material-ui import
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

//custom import 
import Home from "../../containers/LandingPage/Home";
import About from "../../containers/LandingPage/About";

//custom style
const useStyles = makeStyles(() => createStyles({
    root: {
        position : "relative",
        background : "white",
        background:"white",
        minHeight: "100vh",
        height: "auto",
        marginBottom : "5%",
    }, 
  }));

const HomeView = () => {
    const classes = useStyles();
    
        return(
            <Container className={classes.root} maxWidth="false" disableGutters= "true" >
                
                <Container  className={classes.root} maxWidth="xl" disableGutters= "true" >
                    <Home />
                </Container>
                <Container className={classes.root} maxWidth="false" disableGutters= "true" >
                    <About />
                </Container>
            </Container>
        );
    
}
export default HomeView;