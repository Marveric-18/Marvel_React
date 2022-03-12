//react import
import React, {useState} from 'react';
import PropTypes from "prop-types";
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from 'react-router-dom';

//material-ui import
// import { FaBars } from 'react-icons/fa'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon  from '@material-ui/icons/Close';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';


//custom import
import { VerticalNavbarStyle} from "../CustomStyle/NavbarStyle";
import VerticalDrawer from '../../components/navigration/VerticalDrawer';







const VerticalNavbar = (props) => {
    // const [sidebar, setSidebar] = useState(true);
    const classes = VerticalNavbarStyle();
    // const showSidebar = () => setSidebar(!sidebar);
    
    return(
        <>
        
          <div className={classes.navBar}>
                <Link to='#' className={classes.menuBars}>
                    <MenuIcon fontSize={"large"} onClick={props.showSidebar} />
                </Link>
                <div className={classes.sidebarSidePanel}>
                    <div className={classes.floatLeft}>
                        <Link to='#'>
                            <NotificationsIcon  style={{}} fontSize={"inherit"}  />
                        </Link>
                    </div>
                    <div className={classes.floatLeft}>
                        <Link to='#'>
                            <AccountCircleIcon  fontSize={"inherit"}  />
                        </Link>
                    </div>
                    <div className={classes.floatLeft}>
                        <Link to='#'>
                            <h3>Logo</h3>
                        </Link>
                    </div>     
                </div>
              
          </div>
          <hr style={{background : "linear-gradient(to right, #800080, #ffc0cb)", height : "5px", marginTop: 0, paddingTop: 0}}/>
          <nav className={props.sidebar ? classes.navMenuActive : classes.navMenu}>
            <ul className={classes.navMenuItems} onClick={props.showSidebar}>
                <li className={classes.navbarToggle}>
                {props.sidebar ?
                    <Link to='#' className={classes.menuBars}>
                        <CloseIcon fontSize="medium" />
                    </Link>
                    
                 : <Link to='#' className={classes.menuBars}>
                        <MenuIcon fontSize={"medium"} onClick={props.showSidebar} />
                    </Link>
                };
                </li>
                
                {VerticalDrawer.map((item, index) => {
                return (
                    <li key={index} className={classes.navText}>
                        <Link to={item.path}>
                            {item.icon}
                            {props.sidebar ? <span className={classes.span}>{item.title}</span> : "" }
                        </Link>
                    </li>
                );
                })}
            </ul>
          </nav>
        </>
);}
  
VerticalNavbar.propTypes = {
/**
 * Whether to display the navbar, or not.
 */
noNavbar: PropTypes.bool,
/**
 * Whether to display the footer, or not.
 */
noFooter: PropTypes.bool
};

VerticalNavbar.defaultProps = {
    noNavbar: false,
    noFooter: false
};

export default VerticalNavbar;