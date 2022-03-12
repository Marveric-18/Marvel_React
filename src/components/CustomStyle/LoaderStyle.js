import { makeStyles, createStyles } from '@material-ui/core/styles';

// AuthLayoutStyle
export const LoaderLayoutStyle = makeStyles(() => createStyles({
    loader: {
        display: "inline-block",
        position: 'relative',
        width: "64px",
        height: "64px",
        
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