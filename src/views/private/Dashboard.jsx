//react import
import React, {useState} from 'react';
import PropTypes from "prop-types";
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from 'react-router-dom';

//material-ui import
import { Container } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

//custom import
import VerticalNavbar from '../../components/navigration/VerticalNavbar';

//custom style
const PrivateLayoutStyle = makeStyles((theme) => createStyles({
    outerWrapper : {
        backgroundColor : "white",
        minHeight : "100vh",
        //overflow : "hidden"
    },
    widthFull : {
        width : "100%"
    },
    widthLess : {
        marginLeft: "20%"
    },
    navContainer : {
        // position : "relative",
        position: "sticky",
        //position: "webkit-sticky",
        top: 0,
    },
    mainContent : {
        marginLeft : "255px",
        transition: "400ms",
        height : "100vh",
        //background : "linear-gradient(to right, #ada996, #f2f2f2, #dbdbdb, #eaeaea)"
    },
    mainContentFull : {
        minHeight : "100vh",
        marginLeft : "100px",
        transition: "400ms",
        //background : "linear-gradient(to right, #ada996, #f2f2f2, #dbdbdb, #eaeaea)"
    }
    
}));





const Dashboard = (props) => {
    const [sidebar, setSidebar] = useState(false);
    const classes = PrivateLayoutStyle();
    const showSidebar = () => setSidebar(!sidebar);
    const closeSidebar = () => setSidebar(false);
    return(
        <>
        <div className={classes.outerWrapper}>
            <div className={classes.navContainer}>
                <VerticalNavbar showSidebar={showSidebar} sidebar={sidebar}/>
            </div>
            <div onClick={closeSidebar} className={sidebar ? classes.mainContent : classes.mainContentFull }>
                <Router>
                    <Switch>
                        <Route exact path={"/dashboard"} render={(props) => {
                            return <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum libero vel sollicitudin maximus. Donec et enim et nisl tincidunt pretium. Nam vel suscipit mi. Sed non arcu elementum, lacinia felis sed, posuere nibh. Proin dignissim tempor purus, sit amet malesuada lorem imperdiet et. Vivamus at mi interdum est blandit condimentum. Donec nulla lacus, malesuada a tellus et, aliquet feugiat urna. Aenean massa enim, sollicitudin aliquam sagittis eu, dignissim in elit. Donec ullamcorper cursus neque, in sodales risus eleifend vitae. Vestibulum et enim a tortor ornare dapibus et vel neque. Praesent consectetur porttitor tortor, a lacinia magna viverra a. Maecenas vel felis ligula. Curabitur et quam in velit elementum lacinia.
                                </p>
                        }}/>
                        <Route exact path={"/profile"} render={(props) => {
                            return <h1 className={classes.mainContent}>Profile</h1>
                        }}/>
                    </Switch>
                </Router>
            </div>
        </div>
        </>
        
);}
  
Dashboard.propTypes = {
/**
 * Whether to display the navbar, or not.
 */
noNavbar: PropTypes.bool,
/**
 * Whether to display the footer, or not.
 */
noFooter: PropTypes.bool
};

Dashboard.defaultProps = {
    noNavbar: false,
    noFooter: false
};

export default Dashboard;