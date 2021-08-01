//react import
import React from 'react';

//material-ui import
import { Container } from '@material-ui/core';

//extra libraries import
import Typewriter from "typewriter-effect";

//custom import 
import cindrellaImg from "../../assests/images/cindrellaImg3.jpg";
import { TitleTextXL } from '../../components/Text/TitleText';
import bgImage from "../../assests/images/bgImage.jpg"

//material-ui import
import { makeStyles, createStyles, withStyles } from '@material-ui/core/styles';

export const AboutStyle = makeStyles(() => createStyles({
    root : {
        textAlign : "center",
    },
    about_us : {
        backgroundImage: `url(${bgImage})`,
        backgroundSize : "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "150vh",
        maxWidth: "100%",
        minHeight: "85vh",
        textAlign : "center",
        
        '&::after':{
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
        }
    },
    devider_container:{
        textAlign : "center",
        height : "250px",
    },
    devider : {
        width: "20vh",
        display: "block",
        height: "5px",
        backgroundColor: "#4b4b4d",
        margin: "30px auto 30px",
    },
    vertical_devider : {
        width:"1px",
        height : "100%",
        margin: "auto",
        background: "grey",
        //boxShadow: "0px 0px 15px 10px grey",
        
    },
    advertisment_blocks : {
        width : "40%",
        float : "left",
        margin: "auto",
        marginLeft : "4%",
        paddingTop : "2%",
        textAlign : "left",
        
    },
    advertisment_blocks1 : {
        width : "50%",
        float : "right",
        margin: "2.5%",
        marginTop : "25vh",
        paddingTop : "2%",
        paddingRight : "7%",
        textAlign : "center",
    },
    vertical_devider_outer : {
        width: "2%",
        height: "100%",
        margin: "auto",
        float : "left",
        alignContent : "center",
        position: "relative",
        overflow: "hidden",
    },
    spanTag : {
        fontSize: "3.5vw",
        color : "maroon"
    }
}));
const About = () => {
    const classes = AboutStyle();
    return(
        <React.Fragment>
            <Container className={classes.devider} maxWidth="false" disableGutters= "true" ></Container>
            <Container className={classes.about_us} maxWidth="false" disableGutters= "true" >
                
                <Container maxWidth="false" disableGutters= "true" className={classes.advertisment_blocks}>
                    <TitleTextXL variant="h1">
                        WHAT ARE WE?
                    </TitleTextXL>
                </Container>
                
                <Container maxWidth="false" disableGutters= "true" className={classes.advertisment_blocks1}>
                    <TitleTextXL variant="h3">
                        We are the community
                        <br />
                        aiming to bring together
                        <br />
                        <span className={classes.spanTag}>S</span>hoe <span className={classes.spanTag}>L</span>overs
                        <br />
                        from All over the world.
                    </TitleTextXL>
                </Container>
            </Container>
            {/* <Container className={classes.devider_container} maxWidth="false" disableGutters= "true" >
                <div className={classes.advertisment_blocks}>HEy</div>
                <div className={classes.vertical_devider_outer}>
                    <div className={classes.vertical_devider}></div>
                </div>
                <div className={classes.advertisment_blocks1}>Hey</div>
            </Container> */}
        </React.Fragment>
    );
};

export default About;