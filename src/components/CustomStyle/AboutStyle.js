//material-ui import
import { makeStyles, createStyles, withStyles } from '@material-ui/core/styles';
import bgImage from "../../assests/images/bgImage.jpg";


export const AboutStyle = makeStyles((theme) => createStyles({
    root: {
        textAlign: "center",
    },
    grid: {
        margin: "auto",
        width: "80%",
        marginTop: "2.5%",
        padding: "0%",

    },
    share_and_sell: {
        width: "46%",
        textAlign: 'center',
        height: "700px",
        margin: "2%",
        boxShadow: "0",
    },
    share: {
        height: "200px",
        width: "100%",
        margin: "0",
        padding: "0",
        boxShadow: "0",
    },
    share_image: {
        height: "500px",
        width: "100%",
        margin: "0",
        padding: "0",
    },
    about_us: {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "150vh",
        maxWidth: "100%",
        minHeight: "85vh",
        textAlign: "center",
        '&::after': {
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
        }
    },
    devider_container: {
        textAlign: "center",
        height: "250px",
    },
    vertical_devider: {
        width: "1px",
        height: "100%",
        margin: "auto",
        background: "grey",
    },
    advertisment_blocks: {
        width: "40%",
        float: "left",
        margin: "auto",
        marginLeft: "4%",
        paddingTop: "2%",
        textAlign: "left",
    },
    advertisment_blocks1: {
        width: "50%",
        float: "right",
        margin: "2.5%",
        marginTop: "25vh",
        paddingTop: "2%",
        paddingRight: "7%",
        textAlign: "center",
    },
    vertical_devider_outer: {
        width: "2%",
        height: "100%",
        margin: "auto",
        float: "left",
        alignContent: "center",
        position: "relative",
        overflow: "hidden",
    },
    imgSize: {
        height: "35vw",
        width: "35vw",
        padding: "5%",
        margin: "5%"
    },
    special: {
        height: "30vw",
        width: "100%",
        padding: "5%",
        paddingTop: "0%",
        paddingBottom: "0%",
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: "auto",
            height: "25vw",
            width: "28%",
        },
        
    },
    divSquare: {
        margin: "auto",
        marginTop: "5%",
        marginBottom: "5%",
        width: "40%",
        height: "40%",
        borderBlockEnd : "5px solid #FFF1A4",
        borderBlockStart : "5px solid #FFF1A4",
        borderRadius: "25px",
        '& > img': {
            width: "80%",
            height: "80%",
            margin: "auto",
            marginTop: "10%",
            marginLeft: "10%",
        },
        "&:hover": {
            background: "#FFF1A4"
        },

    },
    glowBorder : {
        "&:hover": {
            boxShadow :"0 0 10px #FFF1A4",
        },
    }
}));