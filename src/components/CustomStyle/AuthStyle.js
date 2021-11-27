import { makeStyles, createStyles } from '@material-ui/core/styles';

// AuthLayoutStyle
export const AuthLayoutStyle = makeStyles(() => createStyles({
    outerWrapper: {
        background : "white",
        height:"100%",
        width:"100%",
        position: "absolute",
        backgroundImage : "linear-gradient(to bottom right, #FFEEEE, #DDEFBB)"
        
    }, 
    innerWrapper: {
        position: "relative",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        justifyContent: "center",
    },
}));