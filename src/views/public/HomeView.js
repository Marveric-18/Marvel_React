import React, { Component } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { render } from '@testing-library/react';
// class HomeView extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }
//     render() { 
//         return ( 
//         <div>
//             <h1>Ceaser APP</h1>
//         </div> );
//     }
// }
const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        position : "relative",
    },
    
  }));
const HomeView = () => {
    const classes = useStyles();
    
        return(
            <div className={classes.root}>
                <h1>Ceaser APP</h1>
            </div>
        );
    
}
export default HomeView;