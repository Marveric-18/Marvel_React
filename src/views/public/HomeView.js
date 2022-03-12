


//react import
import React from 'react';
import { Parallax, Background } from "react-parallax";
import PropTypes from "prop-types";

//material-ui import
import { Container } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

//custom import
import HorizontalSidebar from "../../components/navigration/horizontalNavbar"
import bgImage from "../../assests/images/bgImage1.jpg";
import HomeComponent from '../../containers/LandingPage/Home.jsx';
//custom style
const HomeLayoutStyle = makeStyles((theme) => createStyles({
    outerWrapper : {
        background : "rgb(58, 55, 55)",
    },
    header : {
        opacity: "0.5"

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
        overflowX: "hidden"
    },
    lol :{
        opacity: "0.5",
        zIndex: "-1"
    }

    
  }));

const HomeParallax = React.memo(() => {
    const classes = HomeLayoutStyle();
    return(
        <Parallax bgImage={bgImage} strength={300} style={{position:""}} bgClassName={classes.header}>
            <Container maxWidth="false" disableGutters= "true" >
                <HorizontalSidebar/>
            </Container>
        </Parallax>
    );
});

const HomeView = ({...props}) => {
    const classes = HomeLayoutStyle();
    return(
        <Container maxWidth="false" disableGutters= "true" >
            
                <Parallax bgImage={bgImage} strength={300} style={{position:""}} bgClassName={classes.header}>
                    <Container maxWidth="false" disableGutters= "true" >
                        <HorizontalSidebar {...props}/>
                    </Container>
                </Parallax>
           
            
            <Container className={classes.content} maxWidth="false" disableGutters= "true">
                <HomeComponent></HomeComponent>
            </Container>
            
        </Container>
);}
  
// HomeView.propTypes = {
// /**
//  * Whether to display the navbar, or not.
//  */
//  HomeView: PropTypes.bool,
// /**
//  * Whether to display the footer, or not.
//  */
//  HomeView: PropTypes.bool
// };

// HomeView.defaultProps = {
//     noNavbar: false,
//     noFooter: false
// };

export default HomeView;

