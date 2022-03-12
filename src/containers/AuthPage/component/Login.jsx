//react import
import React, {useState, forwardRef, useRef, useImperativeHandle} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import clsx from "clsx";
import { useGoogleLogin  } from 'react-google-login';
import { useFacebookLogin, FacebookLogin } from 'react-facebook-login';

//material-ui import
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Container, Link } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import axios from 'axios';

//custom import
import {auth_login, loginUser} from "../action"
import useFormControls from '../../../components/Form/FormControl';
import {FormStyle} from "../../../components/CustomStyle/ContactFormStyle";
import { BasicStyle, PaddingStyle, WidthStyle } from '../../../components/CustomStyle/BasicStyle';

//custom style
const useStyles = makeStyles(() => createStyles({
    root: {
       width : '100%',
       marginBottom : "3%"
    }, 
    center : {
        display: "flex", 
        alignItems: "center", 
        justifyContent : "center",
        width : '100%',
        flex : "none"
    },
    bottom : {
        bottom : "0"
    }
  }));

const initialLoginFormFieldValues = [
    {
        name: "email",
        label: "Email",
        id: "my-email"
    },
    {
        name: "password",
        label: "Password",
        id: "my-pass"
    },
]

const Login = (props) => {

    const {
        handleInputValue,
        handleFormSubmit,
        formIsValid,
        errors
    } = useFormControls(props);

    const classes = useStyles();
    const basicStyle = BasicStyle();
    const paddingStyle = PaddingStyle();
    const widthStyle = WidthStyle();
    const formclasses = FormStyle();
    console.log("loginSetToken", props);
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
    
    const handleSubmitPls = async () => {
        // const res = await axios.post( 'http://54.243.224.221:8080/auth/user/login', {});
        props.loginSetToken({})
    }

    return(
        <>
            <Container className={classes.root} maxWidth="false" disableGutters= "true"  >
            <form onSubmit={handleFormSubmit} className={formclasses.root} noValidate autoComplete="off">       
                
                   
                {initialLoginFormFieldValues.map((inputFieldValue, index) => {
                    return (
                        <div className={clsx(basicStyle.center, paddingStyle.paddingBottom5)} >
                        <TextField
                            key={index}
                            onBlur={handleInputValue}
                            onChange={handleInputValue}
                            name={inputFieldValue.name}
                            label={inputFieldValue.label}
                            multiline={inputFieldValue.multiline ?? false}
                            rows={inputFieldValue.rows ?? 1}
                            autoComplete="none"
                            {...(errors[inputFieldValue.name] && { error: true, helperText: errors[inputFieldValue.name] })}

                        />
                        </div>   
                                        
                        );
                    })}
                <Container style={{bottom: "0"}} maxWidth="false" disableGutters= "true">
                            
                            <div>
                                <div className={clsx(basicStyle.center, paddingStyle.paddingBottom5)} >
                                    <Button 
                                        variant="contained" disableRipple
                                        onClick={handleSubmitPls}
                                    >
                                        Login
                                    </Button>
                                </div>
                            
                                <div className={clsx(classes.center, basicStyle.bottom, widthStyle.width80)} >
                                    <div className={clsx(basicStyle.center, widthStyle.width50)}>
                                        <Link 
                                            component="button"
                                            underline="hover"
                                            onClick={signIn}>
                                            Sign in with Google
                                        </Link>
                                    </div>
                                    <div className={clsx(basicStyle.center, widthStyle.width50)}>
                                    
                                       <Link 
                                            component="button"
                                            underline="hover"
                                            onClick={signIn}>
                                            Sign in with Facebook
                                        </Link>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </Container>
                </form>
                
            </Container>
        </>
    );
};


const mapDispatchToProps = (dispatch) => {
    return {
        loginSetToken : (payLoad) => dispatch(loginUser(payLoad))
    }
}

export default connect(null,mapDispatchToProps)(Login);