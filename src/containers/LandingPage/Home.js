//react import
import React from 'react';

//material-ui import
import { Container } from '@material-ui/core';
import Grow from '@material-ui/core/Grow';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

//extra libraries import
import Typewriter from "typewriter-effect";

//custom import 
import cindrellaImg from "../../assests/images/cindrellaImg3.jpg";
import { TitleText } from '../../components/Text/TitleText';
import { HomeStyle } from "../../components/CustomStyle/HomeStyle";

const Home = () => {
    const classes = HomeStyle();
    // const [checked, setChecked] = React.useState(false);

    // const handleChange = () => {
    //     setChecked((prev) => !prev);
    // };
    
    return(
        <React.Fragment>
                <Container className={classes.devider} maxWidth="false" disableGutters= "true" ></Container>
                <Container className={classes.contentWrapper} maxWidth="false" disableGutters= "true" >
                    <TitleText variant="h1">
                        Good Shoes Take you good places
                    </TitleText>
                    <div className={classes.imageWrapper}>
                        <img src={cindrellaImg} className={classes.image}></img> 
                    </div>
                </Container>
                <Container maxWidth="false" disableGutters= "true" >
                    <TitleText  variant="h3">
                        <Typewriter
                            onInit={(typewriter)=> {
                                typewriter
                                .typeString("Cindrella is the proof<br />that a new pair of shoes can<br />change your life")
                                .start();
                            }}
                        />
                    </TitleText>
                    
                </Container>
        </React.Fragment>
    );
}

export default Home;