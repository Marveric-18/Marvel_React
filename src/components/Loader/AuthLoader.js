//react import
import React, {useState, forwardRef, useRef, useImperativeHandle} from 'react';
import clsx from "clsx";

//custom import
import {LoaderLayoutStyle} from "../CustomStyle/LoaderStyle";

const Loading =()=> {
    const classes = LoaderLayoutStyle();
    return(
        <div className={classes.loader}>
            <div></div>
            <div></div>
        </div>
    );
}
  