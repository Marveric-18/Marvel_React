
//material-ui import
import { makeStyles, createStyles, withStyles } from '@material-ui/core/styles';

//custom style
export const VerticalNavbarStyle = makeStyles((theme) => createStyles({
    outerWrapper : {
        // background : "rgb(58, 55, 55)",
        backgroundColor : "white",
        // color : "white",
        // border : "2px solid white",
        height : "100vh",
        overflow : "hidden"
    },
    navBar : {
        //backgroundColor: "#ADA996",//"#060b26",
        //background : "linear-gradient(to right, #800080, #ffc0cb)",
        background : "linear-gradient(to right, white, #FAF9F6)", //upper app bar
        height: "60px",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        
        
    },
    menuBars : {
        marginLeft: "2rem",
        fontSize: "0.5rem",
        background: 'none',
    },
    navMenu : {
        backgroundColor: "#060b26",
        width: "90px",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        top: 0,
        //left: "-80%",
        transition: "850ms",
    },
    navMenuActive : {
        backgroundColor: "#060b26", // whole navbar without close button bar
        width: "250px",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        top: 0,
        left: "0",
        transition: "350ms",
    },
    navText : {
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        padding: "8px 0px 8px 16px",
        listStyle: "none",
        height: "60px",
        '&:hover': {
            backgroundColor: "#1a83ff",
            //textDecoration : "none"
        },
        '& a': {
            textDecoration: "none",
            color: "#f5f5f5",
            fontSize: 17,
            width: "95%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            padding: "0 16px",
            borderRadius: "4px",
            '&:hover': {
              //backgroundColor: "#1a83ff",
              textDecoration : "none"
          },
        },
      },
      navMenuItems : {
        width: "100%",
        padding : "0"
      },
      navbarToggle : {
        backgroundColor: "#060b26", //close button
        width: "100%",
        height: "60px",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
      },
      span : {
        marginLeft: "16px",
      },
      widthFull : {
          width : "100%"
      },
      widthLess : {
        marginLeft: "20%"
    },
    sidebarSidePanel : {
        marginLeft: "80%", 
        display : "inline-block"
    },
    floatLeft : {
        float: "left",
        marginLeft : "5px",
        fontSize : "1.5rem",
        color: "#060B26",
        '& a': {
            textDecoration : "none",
            //color: "#060B26",
        }
    },
    navContainer : {
        // position : "relative",
    },
    mainContent : {
        // position : "relative",
        // width : "calc(100% - 250px)",
        marginLeft : "250px"
    }
    
}));