//react import
import React, { useEffect, useState } from 'react';

//material-ui import
import { Container, Grid, Link, List, ListItem, ListItemText, Icon } from '@material-ui/core';
import clsx from "clsx";

//material-ui import
import { makeStyles, createStyles, withStyles } from '@material-ui/core/styles';
import YouTubeIcon from '@material-ui/icons/YouTube';
import ForumIcon from '@material-ui/icons/Forum';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedIn from '@material-ui/icons/LinkedIn';

export const FooterStyle = makeStyles((theme) => createStyles({
    root: {
        textAlign: "center",
    },
    footerDiv : {
        width : "15%",
        margin : "5%"
    },
    iconDiv : {
        width : "5%",
        margin : "5%",
        float : "middle",
        '& .MuiIcon-fontSizeLarge	' : {
            color: "white",
        }
    },
    bgFooter : {
        backgroundColor : "#FFE4B5"
    }
}));

const initialValues = [
    {
        column: "Explore",
        name: "Explore",
        stack : [
            {
                lable: "About Us",
                link : ""
            },
            {
                lable: "Custom Plans",
                link : ""
            },
        ]
    },
    {
        column: "Publish",
        name: "Publish",
        stack : [
            {
                lable: "Publish Center",
                link : ""
            },
        ]
    },
    {
        column: "Resources",
        name: "Resources",
        stack : [
            {
                lable: "Blog",
                link : ""
            },
            {
                lable: "Beta Version",
                link : ""
            },
        ]
    },
    {
        column: "Support",
        name: "Support",
        stack : [
            {
                lable: "Contact Us",
                link : ""
            },
            {
                lable: "Our Vision",
                link : ""
            },
            {
                lable: "Forums",
                link : ""
            },
        ]
    },
];

const iconInitial = [
    {
        icon: "Youtube"
    }
]
const FooterComponent = () => {
    const columns = initialValues;
    const classes = FooterStyle();
    console.log("Columns", columns)
    return (
        <>
            <Container className={clsx(classes.bgFooter)} maxWidth="false" disableGutters="true" >
                <Grid container spacing={0}>
                    <Grid container spacing={0} xs={6} md={4}>
                        Icon
                    </Grid>
                    <Grid container spacing={0} xs={6} md={8}>
                        {columns.map((columnInput) => {
                            return(
                                <List className={clsx(classes.footerDiv)} dense="false">
                                    <ListItem>
                                        <ListItemText
                                            primary={columnInput.name}
                                        />
                                    </ListItem>
                                    {columnInput.stack.map((stackInput) => {
                                        return(
                                            <ListItem>
                                                <Link href="#" underline="none">
                                                    {stackInput.lable}
                                                </Link>
                                            </ListItem>
                                        );
                                    })}
                                </List>
                            );
                        })}
                    </Grid>
                </Grid>
                <Grid container spacing={0}>
                    <Grid item xs={6} md={8}>
                        Copyright | Terms and Conditions
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Link href="#" underline="none">
                            <TwitterIcon    className={clsx(classes.iconDiv)} fontSize="large" />
                        </Link>
                        <Link href="#" underline="none">
                            <LinkedIn    className={clsx(classes.iconDiv)} fontSize="large" />
                        </Link>
                        <Link href="#" underline="none">
                            <GitHubIcon    className={clsx(classes.iconDiv)} fontSize="large" />
                        </Link>
                        <Link href="#" underline="none">
                            <YouTubeIcon    className={clsx(classes.iconDiv)} fontSize="large" />
                        </Link>
                        <Link href="#" underline="none">
                            <ForumIcon    className={clsx(classes.iconDiv)} fontSize="large" />
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default FooterComponent;