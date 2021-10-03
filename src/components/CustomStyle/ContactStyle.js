//material-ui import
import { makeStyles, createStyles, withStyles } from '@material-ui/core/styles';

//custom import
import bgImage from "../../assests/images/contactusBg.jpg";

export const ContactStyle = makeStyles((theme) => createStyles({
    root: {
        textAlign: "center",
    },
    contact_us: {
        marginTop : "2.5%",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        width: "100%",
        height: "120vh",
        maxWidth: "100%",
        minHeight: "85vh",
        textAlign: "center",
        '&::after': {
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
        }
    },
    special: {
        height: "30vw",
        width: "100%",
        padding: "5%",
        paddingTop: "0%",
        paddingBottom: "0%",
        display: 'flex',
        flexWrap: 'wrap',
    },
    divSquare: {

        width: "50%",
        height: "50%",
    }
    
}));