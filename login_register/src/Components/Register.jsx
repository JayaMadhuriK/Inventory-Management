import {Grid} from '@material-ui/core'
import './Register.scss'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl} from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {useState} from 'react';
import { IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Register = () =>{
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);
    const handleMouseDownConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

    const [focus, setFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);

    const onFocus = () => setFocused(true);
    const onBlur = () => setFocused(false);
    
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const input = {
        disableUnderline: true,
        style: {
            color: "white",
            disableUnderline: true,
        }
    };
    const inputpass = {
        disableUnderline: true,
        style: {
            color: "white",
            disableUnderline: true,
        },
        endAdornment: (
            <InputAdornment position="end">
                <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                >
                {showPassword ? <VisibilityIcon sx={{ color: "white"}}/> : <VisibilityOffIcon sx={{ color: "white"}}/>}
                </IconButton>
            </InputAdornment>
          ),
    };
    const inputconf = {
        disableUnderline: true,
        shrink: true,
        style: {
            color: "white",
            disableUnderline: true,
        },
        endAdornment: (
            <InputAdornment position="end">
                <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowConfirmPassword}
                onMouseDown={handleMouseDownConfirmPassword}
                >
                {showConfirmPassword ? <VisibilityIcon sx={{ color: "white"}}/> : <VisibilityOffIcon sx={{ color: "white"}}/>}
                </IconButton>
            </InputAdornment>
          ),
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    }
    const handleRegister = () =>{
        if(password != confirmPassword) {
            setError("Password and confirm password do not match");
        } else {
            window.alert("registration successful")
        }
    };
    return (
        <Grid className="img">
            <Grid className="image"></Grid>
            <Grid className='register-popup'>
                <Grid>
                    <FormControl className="register-form">
                        <h1>SignUp</h1>
                        <Grid className="error" style={{color:"red"}}>{error}</Grid>
                        <Grid className="first-name">
                            <TextField className="text" type="text" 
                                InputProps={input} 
                               variant="standard" style={{width: "205px"}} label="First Name" required  size="small"></TextField>
                        </Grid>
                        <Grid className="first-name">
                            <TextField type="text" InputProps={input} style={{width: "205px"}} className="text" variant="standard" label="Last Name" required size="small"></TextField>
                        </Grid>
                        <Grid className="first-name">
                        <TextField type={hasValue || focus ? "date" : "text"}  onFocus={onFocus} onBlur={onBlur} style={{width: "205px"}} InputProps={input} onfocus="(this.type='date')" className="text" variant="standard" label="Date of birth" required size="small"></TextField>
                        </Grid>
                        <Grid className="first-name">
                            <TextField type="Number" style={{width: "205px"}} InputProps={input} className="text" variant="standard" label="Age" required size="small"></TextField>
                        </Grid>
                        <Grid className="first-name">
                            <TextField type="Number" style={{width: "205px"}} InputProps={input} className="text" variant="standard" label="Mobile Number" required size="small"></TextField>
                        </Grid>
                        <Grid className="first-name">
                            <TextField type="email" style={{width: "205px"}} InputProps={input} className="text" variant="standard" label="Email Id" required  size="small"></TextField>
                        </Grid>
                        <Grid className="first-name">
                            <TextField type={showPassword ? "text" : "password"} onChange={handlePasswordChange} style={{width: "210px"}} InputProps={inputpass} className="text" variant="standard" label="Password" required size="small"></TextField>
                        </Grid>
                        <Grid className="first-name">
                            <TextField type={showConfirmPassword ? "text" : "password"} onChange={handleConfirmPasswordChange} style={{width: "210px"}} InputProps={inputconf} className="text" variant="standard" label="Confirm Password" required size="small"></TextField>
                        </Grid>
                        <Grid className="buttonlabel">
                            <Button variant="contained" onClick={handleRegister} InputProps={input} size="large" className="button">Register</Button>
                        </Grid>
                    </FormControl>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Register;