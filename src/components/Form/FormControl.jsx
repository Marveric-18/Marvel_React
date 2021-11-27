import React, { useEffect, useState } from 'react';

const useFormControls = (props) => {
    // We'll update "values" as the form updates
    // const [values, setValues] = useState(props.initialFormValues);
    // "errors" is used to check the form for errors
    console.log("PROPSIN FORM", props)
    const any = {}
    const [errors, setErrors] = useState(any);

    const checkPassword = (password) =>{
        const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return re.test(password);
    }
    const validate: any = (fieldValues = props.initialFormValues) => {
      // this function will check if the form values are valid
        let temp: any = { ...errors }

        if ("fullName" in fieldValues) {
            temp.fullName = fieldValues.fullName ? "" : "This field is required."
            if (fieldValues.fullName)
                temp.fullName = /^[a-zA-Z]+$/.test(fieldValues.fullName)
                ? ""
                : "Name field should only contain alphabets."
        }

        if ("lastName" in fieldValues) {
            temp.lastName = fieldValues.lastName ? "" : "This field is required."
            if (fieldValues.lastName)
                temp.lastName = /^[a-zA-Z]+$/.test(fieldValues.lastName)
                ? ""
                : "Name field should only contain alphabets."
        }

        if ("email" in fieldValues) {
            //temp.email = fieldValues.email ? "" : "This field is required."
            if (fieldValues.email)
                temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
                ? ""
                : "Email is not valid."
        }

        if ("password" in fieldValues) {
            //temp.password = fieldValues.password ? "" : "This field is required."
            if (fieldValues.password)
                temp.password = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(fieldValues.password)
                ? ""
                : "Password must contain A-Z a-z 0-9 /*@#!"
        }

        if ("confirmPassword" in fieldValues) {
            temp.confirmPassword = fieldValues.password ? "" : "This field is required."
            if (temp.confirmPassword != props.initialFormValues.confirmPassword)
                return "Confirm password must match Password."
            return ''
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
    const handleInputValue = (e: any) => {
        const { name, value } = e.target;
        props.setValues({
          ...props.initialFormValues,
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
    const formIsValid = (fieldValues = props.initialFormValues) => {
      // this function will check if the form values and return a boolean value
        let isValid = false;
        if (fieldValues.auth_type == "login"){
            isValid = fieldValues.email &&
                    fieldValues.password &&
                    Object.values(errors).every((x) => x === "");

        }else if(fieldValues.auth_type == "signup"){
            isValid = fieldValues.firstName &&
                    fieldValues.lastName &&
                    fieldValues.email &&
                    fieldValues.password &&
                    Object.values(errors).every((x) => x === "");
        }else{
            isValid = fieldValues.email &&
                    Object.values(errors).every((x) => x === "");
        }
        return !!isValid;
    }
    return {
        handleInputValue,
        handleFormSubmit,
        formIsValid,
        errors
    };
}

export default useFormControls;