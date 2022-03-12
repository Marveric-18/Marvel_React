//material-ui import
import { makeStyles, createStyles, withStyles } from '@material-ui/core/styles';


export const MarginStyle = makeStyles((theme) => createStyles({
    root: {
        margin: "auto",
    },
    margin50: {
        margin: "50%",
    },
    margin20: {
        margin: "20%",
    },
    marginTop5: {
        marginTop: "5%",
    },
    marginBottom5: {
        marginBottom: "5%",
    },
}));

export const WidthStyle = makeStyles((theme) => createStyles({
    root: {
        width: "100%",
    },
    width50: {
        width: "50%",
    },
    width20: {
        width: "20%",
    },
    width80: {
        width: "80%",
    },
}));

export const PaddingStyle = makeStyles((theme) => createStyles({
    root: {
        padding: "auto",
    },
    padding50: {
        padding: "50%",
    },
    padding20: {
        padding: "20%",
    },
    paddingTop5: {
        paddingTop: "5%",
    },
    paddingTop10: {
        paddingTop: "10%",
    },
    paddingTop15: {
        paddingTop: "15%",
    },
    paddingBottom5: {
        paddingBottom: "5%",
    },
    paddingLeftRight10 : {
        paddingLeft : "10%",
        paddingRight : "10%",
    }
}));
export const AlignStyle = makeStyles((theme) => createStyles({
    root: {
        textAlign: "center"
    },
    left: {
        textAlign: "left"
    },
    right: {
        textAlign: "right"
    },

}));


export const BasicStyle = makeStyles((theme) => createStyles({
    devider : {
        width: "20vh",
        display: "block",
        height: "5px",
        backgroundColor: "#4b4b4d",
        margin: "30px auto 30px",
    },
    center : {
        // center content inside Div
        display: "flex", 
        alignItems: "center", 
        justifyContent : "center",
        flex : "none"
    },
    bottom :{
        //stick div to bottom
        bottom : "0"
    }

}));
