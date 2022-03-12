//react import
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useFacebookLogin, FacebookLogin } from 'react-facebook-login';

//material-ui import
import { Container} from '@material-ui/core';
import clsx from "clsx";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


//custom import 
import { TitleTextXL } from '../../../components/Text/TitleText';
import {BasicStyle, PaddingStyle} from "../../../components/CustomStyle/BasicStyle";
import {ContactFormStyle} from "../../../components/CustomStyle/ContactFormStyle";
import {ContactStyle} from "../../../components/CustomStyle/ContactStyle";

const initialFormValues = {
    fullName: "",
    email: "",
    subject:"",
    message:"",
    formSubmitted: false,
    success: false
}

const inputFieldValues = [
    {
      name: "fullName",
      label: "Full Name",
      id: "my-name"
    },
    {
      name: "email",
      label: "Email",
      id: "my-email"
    },
    {
        name: "subject",
        label: "Subject",
        id: "my-subject"
      },
    {
      name: "message",
      label: "Message",
      id: "my-message",
      multiline: true,
      rows: 5
    }
];

const useFormControls = () => {
    // We'll update "values" as the form updates
    const [values, setValues] = useState(initialFormValues);
    // "errors" is used to check the form for errors
    const any = {}
    const [errors, setErrors] = useState(any);
    const validate = (fieldValues = values) => {
      // this function will check if the form values are valid
        let temp = { ...errors }

        if ("fullName" in fieldValues)
        temp.fullName = fieldValues.fullName ? "" : "This field is required."

        if ("email" in fieldValues) {
            temp.email = fieldValues.email ? "" : "This field is required."
            if (fieldValues.email)
                temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
                ? ""
                : "Email is not valid."
        }

        if ("message" in fieldValues)
            temp.message =
            fieldValues.message ? "" : "This field is required."
        
        if ("subject" in fieldValues)
            temp.subject =
            fieldValues.subject ? "" : "This field is required."

        setErrors({
        ...temp
        });
    }
    const handleInputValue = (e) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value
        });
        validate({ [name]: value });
    };
    const handleFormSubmit = async (e) => {
      // this function will be triggered by the submit event
        e.preventDefault();
        if (formIsValid()) {
            //await postContactForm(values);
            alert("You've posted your form!")
        }
    }
    const formIsValid = (fieldValues = values) => {
      // this function will check if the form values and return a boolean value
        const isValid =
        fieldValues.fullName &&
        fieldValues.email &&
        fieldValues.subject &&
        fieldValues.message &&
        Object.values(errors).every((x) => x === "");
        return isValid;
    }
    return {
        handleInputValue,
        handleFormSubmit,
        formIsValid,
        errors
    };
}


const ContactUs = React.memo(() => {
    const classes = ContactStyle();
    const formstyle = ContactFormStyle();
    const padding = PaddingStyle();
    const basicstyle = BasicStyle();
    const {
        handleInputValue,
        handleFormSubmit,
        formIsValid,
        errors
    } = useFormControls();

   const googleResponse = (e) => {

   }
    return (
        <>

            <Container className={basicstyle.devider} maxWidth="false" disableGutters="true" >
            {/* <GoogleLogin
                clientId="716732479779-lrspuvtr6emort92ljt5lqnd8jk02mqo.apps.googleusercontent.com"
                buttonText="Login"
                //responseType={"code"}
                onSuccess={googleResponse}
                onFailure={googleResponse}
                
                //uXmode={"redirect"}
                redirectUri={"postmessage"}
            />*/}
                    {/* <FacebookLogin
                        appId="966557880872685"
                        autoLoad={false}
                        fields="name,email,picture"
                        // redirectUri = "http://localhost:8000/auth/redirect"
                        callback={googleResponse} />  */}
            </Container>

            <TitleTextXL variant="h2" className={classes.animatedItem}>
                Contact Us
            </TitleTextXL>

            <Container className={clsx( padding.paddingTop5, classes.contact_us)}  maxWidth="false" disableGutters="true" >
                <Container className={classes.special} maxWidth="false" disableGutters="true" >
                    <div className={classes.divSquare}>
                        
                    </div>
                    <div className={classes.divSquare}>
                        <form onSubmit={handleFormSubmit} className={formstyle.root} noValidate autoComplete="off">
                            {/* <TextField id="standard-basic" name="email" label="Email" />
                            <TextField id="standard-basic" name="fullname" label="Name" />
                            <TextField id="standard-basic" name="subject" label="Subject" />
                            <TextField id="standard-basic" name="message" label="Message" multiline /> */}
                            {inputFieldValues.map((inputFieldValue, index) => {
                                return (
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
                                );
                            })}
                            <Button type="submit"
                                disabled={!formIsValid()}
                                variant="contained" >Submit
                            </Button>
                        </form>
                    </div>
                        
                </Container >
            </Container>
        </>
    );

});

export default ContactUs;