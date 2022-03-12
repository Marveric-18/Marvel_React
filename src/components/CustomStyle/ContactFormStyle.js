//material-ui import
import { makeStyles, createStyles, withStyles } from '@material-ui/core/styles';

export const ContactFormStyle = makeStyles((theme) => createStyles({
    root: {
        '& > *': {
          margin: theme.spacing(4),
          width: '70vh',
        },
        '& label.Mui-focused': {
            color: 'white',
        },
        '& label': {
            color: 'white',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
        },
        '& .MuiInput-underline:before': {
            borderBottomColor: 'white',
        },
        '& .MuiInput-root': {
            color: 'white',
        },
        '& .MuiButton-contained' : {
            color: 'black',
        }
      },
    field : {
        c : "white"
    }
    
}));


export const FormStyle = makeStyles((theme) => createStyles({
    root: {
        
        '& .MuiFormControl-root' : {
            width : "50%"
        }
    }
}));