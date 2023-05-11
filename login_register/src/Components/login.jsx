import {useState} from 'react';
import {Grid} from '@material-ui/core'
import './login.scss'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl, FormLabel } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom'; 
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import axios from 'axios'

const Login = () =>{
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    const input = {
        disableUnderline: true,
        style: {
            color: "white",
            disableUnderline: true,
        },
        endAdornment: (
            <InputAdornment position="end">
              <AccountCircleIcon sx={{ color: "white"}}/>
            </InputAdornment>
          ),
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
    return (
        <Grid className="home">
            <Grid className="image"></Grid>
            <Grid className='login-popup'>
                <Grid>
                    <FormControl className="register-form">
                        <h1>SignIn</h1>
                        <Grid className="first-name">
                            <TextField type="email" className="text" name="email" style={{width: "235px"}} InputProps={input} variant="standard" label = "Email ID" required  size="small"></TextField>
                        </Grid>
                        <Grid className="first-name">
                            <TextField type={showPassword ? "text" : "password"} name="password" className="text" InputProps={inputpass} variant="standard" label = "Password"  required size="small"></TextField>
                        </Grid>
                        <Grid className="buttonlabel">
                            <Button variant="contained" className="button" onClick={()=>{window.alert("login successfull")}}>Login</Button>
                            <Button variant="text" className="link" onClick={()=>{navigate("/register")}} >New User! Click here</Button>
                        </Grid>
                    </FormControl>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Login;