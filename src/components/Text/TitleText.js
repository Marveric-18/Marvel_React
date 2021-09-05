import { makeStyles, createStyles, withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
//custom style
export const TitleText = withStyles({
    root: {
        textAlign:"center",   
    },
    h1 : {
        fontFamily: "Fuggles,Ink Free, Lucida Console, Arial, Tahoma, Serif",
        fontSize : "5.5vw",
    },
    h3 :{
        fontFamily: "Ink Free",
        //fontWeight : 500,
        margin : "0 25% 0 25%",
        fontSize : "3.5vw",
        
    }
})(Typography);

export const TitleTextXL = withStyles({
    root: {
        fontFamily: 'Oswald',
        fontWeight : "500",
        fontSize : "8.5vw",
    },
    h1 : {
        fontFamily: 'Oswald',
        fontWeight : "300",
        fontSize : "10.5vw",
    },
    h2 : {
        fontFamily: 'Oswald',
        fontWeight : "500",
        fontSize : "4.5vw",
        textAlign: "center"
    },
    h3 : {
        fontFamily: 'Oswald',
        fontWeight : "200",
        fontSize : "2.5vw",
    },
    h4 : {
        fontFamily : "'Hina Mincho', serif",
        fontWeight : "500",
        fontSize : "2.5vw", 
        //textShadow:"0 0 2px #ddd"
    }
   
})(Typography);