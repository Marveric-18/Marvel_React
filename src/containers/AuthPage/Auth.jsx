//react import
import React, {useState, useEffect, useRef} from 'react';

//material-ui import
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Container, Button, Link  } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { GoogleLogin,useGoogleLogin, onFailure, onSuccess, redirectUri,clientId, uxMode  } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
// import Button from '@material-ui/Button';

//custom import
import Login from "./component/Login";
import LoginBgImage from "../../assests/images/sell.jpg";
import SignupBgImage from "../../assests/images/shoes.jpg";

//custom style
const AuthStyle = makeStyles({
    root: {
        margin : "0",
        padding : "0",
        display: "flex",
        justifyContent: "center",
        width : "60%",
        minWidth : "60%",
        boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
    }, 
    leftDiv : {
        width : "40%",
        justifyContent: "center",
        display: "flex",
        height : "65vh",
        backgroundImage : props => (props.type == "login") ? `url(${LoginBgImage})` : `url(${SignupBgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize : "cover"
    },
    rightDiv : {
        width : "65%",
        justifyContent: "center",
        display: "flex",
        height : "65vh",
        // border : "1px solid black",
        // backgroundColor: "white"
        backgroundImage : "linear-gradient(to bottom right, #ECE9E6, #FFFFFF)",
        paddingTop : "8%",
        overflowY: "auto",
    },
});

    

const initialFormValues = {
    //--------LOGIN---------------Fields(LOGIN)
    email : "",
    password : "",
    authType : "",
    //--------SIGNUP--------------Fields(LOGIN + SIGNUP)
    firstName : "",
    lastName : "",
    confirmPassword : ""
}
const Auth = ({...props}) => {
    console.log("PROPS AUTHVIEW1: ", props)
    const [values, setValues] = useState(initialFormValues);
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const childRef = useRef();
    console.log("Props", props)
    const classes = AuthStyle(props);


    const googleResponse = (e) => {
        console.log("Response from Google: ",e);
        
    }
    const clientId="716732479779-lrspuvtr6emort92ljt5lqnd8jk02mqo.apps.googleusercontent.com";
    const { signIn, loaded } = useGoogleLogin({
        clientId,
        onSuccess:{googleResponse},
        //uxMode : "redirect",
        isSignedIn: true,
        accessType: 'offline',
      })
      
    useEffect(() => {
        console.log("Login",values)
    }, [values]); // Only re-run the effect if values changes

    useEffect(() => {
        setValues({
            ...props.initialFormValues,
            "auth_type": props.type
        });
        //set image as well
    }, [props.type]);
    
        return(
            <>
            <Container className={classes.root} maxWidth="false" disableGutters= "true">
                <Container className={classes.leftDiv} maxWidth="false" disableGutters= "true">
                    <ArrowBackIcon color={"error"} onClick={() => {props.history.push("/home");}}  style={{ fontSize: 42,marginTop: "5%", marginRight: "80%", color : "white" }}/>
                </Container>
                <Container className={classes.rightDiv} maxWidth="false" disableGutters= "true">
                    {/* <Component> */}
                    <Container  maxWidth="false" disableGutters= "true">
                        { props.type === "login" && 
                    
                        <Login 
                            style={{width: "100%",position:"relative"}}
                            ref={childRef} 
                            initialFormValues={values} 
                            setValues={setValues} 
                            setSuccess={setSuccess} 
                            error = {errors}
                            setErrors={setErrors}
                        />}
                        { props.type === "signup" && <h1>Signup</h1>}
                        { props.type === "forgetPass" && <h1>Forget Pass</h1>}
                        
                    </Container>
                    
                </Container>
            </Container>
            </>
        );
    
}
export default Auth;