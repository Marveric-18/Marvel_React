//react import
import React, { useEffect, useState } from 'react';

//material-ui import
import { Container, Grid, Paper, Icon } from '@material-ui/core';
import { loadCSS } from 'fg-loadcss';
import clsx from "clsx";
import Aos from 'aos';
import 'aos/dist/aos.css';


//custom import 
import { TitleTextXL } from '../../../components/Text/TitleText';
import {BasicStyle, AlignStyle, PaddingStyle, MarginStyle} from "../../../components/CustomStyle/BasicStyle";
import {AboutStyle} from "../../../components/CustomStyle/AboutStyle";
// images 
import shareButton from "../../../assests/svg/shareButton.svg";
import brandButton from "../../../assests/svg/brandButton.svg";
import designButton from "../../../assests/svg/designButton.svg";
import shoes from "../../../assests/images/shoes2.jpg";
import sell from "../../../assests/images/sell.jpg";


const About = React.memo(() => {
    const classes = AboutStyle();
    const padding = PaddingStyle();
    const margin = MarginStyle();
    const alignText = AlignStyle();
    const basicstyle = BasicStyle();
    useEffect(() => {
        Aos.init({ duration: 2000 });
        const node = loadCSS(
            'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
            document.querySelector('#font-awesome-css'),
        );
        return () => {
            node.parentNode.removeChild(node);
        };

    }, []);
    return (
        <React.Fragment>
            <Container className={basicstyle.devider} maxWidth="false" disableGutters="true" ></Container>

            <Container className={classes.about_us} maxWidth="false" disableGutters="true" >

                <Container maxWidth="false" disableGutters="true" className={classes.advertisment_blocks}>
                    <TitleTextXL variant="h1">
                        WHAT ARE WE?
                    </TitleTextXL>
                </Container>

                <Container maxWidth="false" disableGutters="true" className={classes.advertisment_blocks1}>
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

            <Container className={basicstyle.devider} maxWidth="false" disableGutters="true" ></Container>

            <TitleTextXL variant="h2" className={classes.animatedItem}>
                Our Platform
            </TitleTextXL>

            <Container maxWidth="false" disableGutters="true" >
                <Grid container spacing={7} className={classes.grid}>
                    <Paper elevation={0} className={classes.share_and_sell}>
                        <Paper elevation={0} className={classes.share_image}>
                            <img className={clsx(classes.imgSize)} src={sell} />
                        </Paper>
                        <Paper elevation={0} className={clsx(classes.share, alignText.root)}>
                            <TitleTextXL className={clsx([padding.paddingTop5])} data-aos="slide-right" variant="h1" >
                                SELL
                            </TitleTextXL>
                        </Paper>
                    </Paper>
                    <Paper elevation={0} className={classes.share_and_sell}>
                        <Paper elevation={0} className={clsx(classes.share, alignText.root)}>
                            <TitleTextXL className={clsx(padding.paddingTop5)} data-aos="slide-left" variant="h1" >
                                SHARE
                            </TitleTextXL>
                        </Paper>
                        <Paper elevation={0} className={classes.share_image}>
                            <img className={clsx(classes.imgSize)} src={shoes} />
                        </Paper>
                    </Paper>
                </Grid>
            </Container>

            <Container className={classes.special} maxWidth="false" disableGutters="true" >
                <Paper className={classes.glowBorder} variant="elevation" elevation={6} square >
                    <div className={classes.divSquare}>
                        <img src={brandButton}></img>
                    </div>
                    <div>
                        <TitleTextXL className={clsx(padding.paddingLeftRight10, padding.paddingTop5, margin.root, alignText.root)} variant="h4" >
                            Create Your Own <br></br>Brands
                        </TitleTextXL>
                    </div>
                </Paper>
                <Paper className={classes.glowBorder} variant="elevation" elevation={6} square >
                    <div className={classes.divSquare}>
                        <img src={shareButton}></img>
                    </div>
                    <div>
                        <TitleTextXL className={clsx(padding.paddingLeftRight10, padding.paddingTop5, margin.root, alignText.root)} variant="h4" >
                            Share Your Shoe<br></br>Expereince
                        </TitleTextXL>
                    </div>
                </Paper>
                <Paper className={classes.glowBorder} variant="elevation" elevation={6} square >
                    <div className={classes.divSquare}>
                        <img src={designButton}></img>
                    </div>
                    <div>
                        <TitleTextXL className={clsx(padding.paddingLeftRight10, padding.paddingTop5, margin.root, alignText.root)} variant="h4" >
                            Make Your Own<br></br>Design
                        </TitleTextXL>
                    </div>
                </Paper>
            </Container>

        </React.Fragment>
    );
});

export default About;