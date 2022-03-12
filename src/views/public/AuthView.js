//react import
import React from 'react';
import { connect, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

//material-ui import
import { Container } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';

//custom import
import {showLoader, hideLoader} from "../../redux/action";
import {AuthLayoutStyle} from "../../components/CustomStyle/AuthStyle";
import Auth from '../../containers/AuthPage';


const AuthView =  (props) => {
    const classes = AuthLayoutStyle();
    const state = useSelector((state) => state.appState)
    console.log("#state:", state)
    return(
        <>
        <div>
                {props.isLoading && (
                    <LinearProgress></LinearProgress>
                )}
                
        </div>
        <Container className={classes.outerWrapper} maxWidth="false" disableGutters= "true" >
            <Container className={classes.innerWrapper} maxWidth="false" disableGutters= "true" >
            
             <Router>
                <Switch>
                    <Route exact path={"/login"} render={(props) => {
                        return <Auth {...props} type={"login"}/>
                    }}/>
                    <Route exact path={"/signup"} render={(props) => {
                        return <Auth {...props} type={"signup"}/>
                    }}/>
                </Switch>
            </Router>

            </Container>
        </Container>
        </>
    );
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
            showLoader: showLoader,
            hideLoader: hideLoader
        }, dispatch);
  };

const mapStateToProps = (state) => {
    return { isLoading: state.appState.isLoading }
};

export default connect(mapStateToProps,mapDispatchToProps)(AuthView);