//react import
import React, { useState, useEffect } from 'react';

//material-ui import
import { Container } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

//custom import
import marvlogo1 from "../../assests/images/marvlogo1.png";

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    boxSizing : 'border-box',
    fontFamily : ["STIX Two Math", 'serif'],
  },
  navbar :{
    marginTop : "20px",
    display : "inline-block",
    width : "100%",
    float:"left"
  },
  ul : {
    listStyle : "none",
    display : "flex",
    flexDirection : "row",
    justifyContent : "space-evenly"
  },
  a : {
    textDecoration: 'none',
    color: "white",
    fontSize: '20px',
    margin: "12px 14px",
    '&:hover': {
      textDecoration: 'none',
      color: 'rgb(246, 225, 101)',
      fontSize: "22px",
      cursor: "pointer",
      "transitionDuration": "0.5s",
    }
  },
  logoDiv : {
    width : "30%",
    float:"left",
    marginLeft:"5%"
  },
  navItems : {
    width : "60%",
    float:"left",
  },
  logoImg : {
    height: "15%",
    width : "20%",
  }
  
}));


function HorizontalSidebar(){
    const classes = useStyles();
    return(
      
        
          <nav className={classes.navbar}>
            <div className={classes.logoDiv}>
              <strong>
                  <a href="/">
                      <img className={classes.logoImg} src={marvlogo1} />
                  </a>
              </strong>

            </div>
            <div className={classes.navItems}>
              <ul className = {classes.ul}>
                  <li><a href="" className={classes.a}>Home</a></li>
                  <li><a href="" className={classes.a}>About us</a></li>
                  <li><a href="" className={classes.a}>Contact Us</a></li>
                  <li><a href="" className={classes.a}>Subscription</a></li>
                  <li><a href="" className={classes.a}>Login</a></li>
              </ul>
            </div>
          </nav>
        
    );
}

export {HorizontalSidebar};

