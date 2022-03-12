//react import
import React, { useEffect, useState } from 'react';

//material-ui import
import { Container} from '@material-ui/core';
import clsx from "clsx";

//custom import 
import { TitleTextXL } from '../../../components/Text/TitleText';
import {BasicStyle, PaddingStyle} from "../../../components/CustomStyle/BasicStyle";
import FooterComponent from '../../../components/Footer/FooterComponent';

const Footer = React.memo(() => {
    const basicstyle = BasicStyle();
    return (
        <>
            <Container className={basicstyle.devider} maxWidth="false" disableGutters= "true" ></Container>
            <FooterComponent></FooterComponent>
        </>
    );
});

export default Footer;