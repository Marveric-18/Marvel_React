//react import
import React, {useState, forwardRef, useRef, useImperativeHandle} from 'react';
import clsx from "clsx";
import { useGoogleLogin  } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

//material-ui import
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Container, Link } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

//custom import
import CustomInput from '../../../components/Form/CustomInput';
import useFormControls from '../../../components/Form/FormControl';
import {FormStyle} from "../../../components/CustomStyle/ContactFormStyle";

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
        paddingBottom : "5%",
        width : '100%',
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
    const formclasses = FormStyle();

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
    

    return(
        <>
            <Container className={classes.root} maxWidth="false" disableGutters= "true"  >
            <form onSubmit={handleFormSubmit} className={formclasses.root} noValidate autoComplete="off">       
                
                   
                {initialLoginFormFieldValues.map((inputFieldValue, index) => {
                    return (
                        <div className={classes.center}>

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
                            
                            <div style={{ alignItems: "center",justifyContent : "center",}}>
                                <div style={{display : "flex", alignItems: "center",justifyContent : "center", flex:"none", paddingBottom: "5%"}}>
                                    <Button 
                                        variant="contained" disableRipple
                                        //onClick={()=> childRef.current.checkFormValidation()}
                                    >
                                        Login
                                    </Button>
                                </div>
                            
                                <div style={{width: "80%",margin: "0 0 0 10%",bottom: "0",display : "flex", alignItems: "center",justifyContent : "center", flex:"none"}}>
                                    <div style={{width: "50%",display : "flex", alignItems: "center",justifyContent : "center", flex:"none"}}>
                                        <Link 
                                            component="button"
                                            underline="hover"
                                            onClick={signIn}>
                                            Sign in with Google
                                        </Link>
                                    </div>
                                    <div style={{width: "50%",display : "flex", alignItems: "center",justifyContent : "center", flex:"none"}}>
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
export default Login;