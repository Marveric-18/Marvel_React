//material-ui import
import { makeStyles, createStyles, withStyles } from '@material-ui/core/styles';

export const HomeStyle = makeStyles(() => createStyles({
    devider : {
        width: "20vh",
        display: "block",
        height: "5px",
        backgroundColor: "#4b4b4d",
        margin: "30px auto 30px",
    },
    contentWrapper : {
        width:"60%",
        margin:"0 auto",
        textAlign : "center",
    },
    imageWrapper : {
        position: "relative",
        display: "inline-block",
        width:"80%",
        margin:"5% auto 50px",
        padding:"25px",
        border:"1px solid #eee",
        '&::before':{
            content:"''",
            position: "absolute",
            background: "#fff",
            width:"calc(100% + 50px + 2px - 120px)",
            height:"calc(100% + 2px)",
            top:"-1px",
            left:"50%",
            transform:"translateX(-50%)",
            zIndex: "1",
        },
        '&::after':{
            content:"''",
            position: "absolute",
            background: "#fff",
            height:"calc(100% + 50px + 2px - 120px)", 
            width:"calc(100% + 2px)",
            left:"-1px",
            top:"50%",
            transform:"translateY(-50%)",
            zIndex: "1",
        },
        '&:hover' : {
            borderColor:"red",
        }
    },
    image : {
        position:"relative",
        display:"block",
        margin:"0",
        padding:"0",
        zIndex:"5",
        width: "100%"
    }
    
  }));