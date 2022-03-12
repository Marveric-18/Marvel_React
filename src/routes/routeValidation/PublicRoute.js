import React, { Component } from 'react';
// import {connect , useSelector } from "react-redux";
import {Route, Redirect} from "react-router-dom";
import {connect  } from "react-redux";
export const PublicRoute = ({
    isAuthenticated,
    component : Component,
    ...props
  }) => {
    console.log("ROuuue: ", props)
    return(
      <Route 
        ceaser = "marv"
        {...props}
        component = {(props) => {
          return (
            isAuthenticated ? (
              <Redirect to='/'/>
            ) : (
              <Component {...props} />
            ));
          }
      }
      />
  );}

// const getFlag = () => {
//   const token = useSelector(state => state.token);
//   return token
// }
const mapStatetoProps = (state) => ({
  isAuthenticated : false
});

export default connect(mapStatetoProps)(PublicRoute);