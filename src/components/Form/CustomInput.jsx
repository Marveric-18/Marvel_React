import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import { makeStyles, createStyles } from '@material-ui/core/styles';

//custom style
const useStyles = makeStyles(() => createStyles({
    root: {
       
    },
    labelRoot : {
        
    } 
  }));

const CustomInput = (props) => {
    const classes = useStyles();
    const {
        formControlProps,
        labelText,
        id,
        labelProps,
        inputProps,
        error,
        white,
        inputRootCustomClasses,
        success,
        handleChange,
        type
      } = props;
    return (
        <FormControl>
          {labelText !== undefined ? (
            <InputLabel
              className={classes.labelRoot}
              htmlFor={id}
            >
              "{labelText}"
            </InputLabel>
          ) : null}
          <Input
            // classes={{
            //   input: inputClasses,
            //   root: marginTop,
            //   disabled: classes.disabled,
            //   underline: underlineClasses
            // }}
            // id={id}
            // onChange={handleChange}
            // {...inputProps}
            type={type}
          />
        </FormControl>
      );
}

export default CustomInput;