
import {Grid} from '@material-ui/core'
import './login.scss'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl, FormLabel } from '@mui/material';


const Login = () =>{
    return (
        <Grid className="home">
            <Grid className='login-popup'>
                <Grid>
                    <FormControl className="register-form">
                        <h1>SignIn</h1>
                        <Grid className="first-name">
                            <TextField type="email" label = "Email ID" required  size="small"></TextField>
                        </Grid>
                        <Grid className="first-name">
                            <TextField type="password" label = "Password"  required size="small"></TextField>
                        </Grid>
                        <Grid className="buttonlabel">
                            <Button variant="contained" className="button" >Login</Button>
                        </Grid>
                    </FormControl>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Login;