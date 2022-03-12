//react import
import React, {lazy, Suspense} from 'react';


//material-ui import
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

//custom import 
const Home = React.lazy(() => import("./components/Home"));
const About = React.lazy(() => import("./components/About"));
const ContactUs = React.lazy(() => import("./components/ContactUs"));
const Footer = React.lazy(() => import("./components/Footer"));

//custom style
const useStyles = makeStyles(() => createStyles({
    root: {
        position : "relative",
        background : "white",
        background:"white",
        minHeight: "50vh",
        height: "auto",
        marginBottom : "5%",
    }, 
  }));

const HomeComponent = () => {
    const classes = useStyles();
    
        return(
            <>
            <Container className={classes.root} maxWidth="false" disableGutters= "true" >
                <Container  className={classes.root} maxWidth="xl" disableGutters= "true" >
                    <Suspense fallback={<div>Loading...</div>}>
                        <Home />
                    </Suspense>
                </Container>
                <Container className={classes.root} maxWidth="false" disableGutters= "true" >
                    <Suspense fallback={<div>Loading...</div>}>
                        <About />
                    </Suspense>
                </Container>
                <Container className={classes.root} maxWidth="false" disableGutters= "true" >
                   
                    <Suspense fallback={<div>Loading...</div>}>
                        <ContactUs />
                    </Suspense>
                </Container>
                
            </Container>
            
            
            <Suspense fallback={<div>Loading...</div>}>
                <Footer />
            </Suspense>
            
            </>
        );
    
}
export default HomeComponent;