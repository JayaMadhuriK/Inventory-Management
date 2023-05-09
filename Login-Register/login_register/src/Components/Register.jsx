import {Grid} from '@material-ui/core'
import './Register.scss'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl} from '@mui/material';


const Register = () =>{
    return (
        <Grid className="img">
            <Grid className='register-popup'>
                <Grid>
                    <FormControl className="register-form">
                        <h1>SignUp</h1>
                        <Grid className="first-name">
                            <TextField type="text" label="First Name" required  size="small"></TextField>
                        </Grid>
                        <Grid className="first-name">
                            <TextField type="text" label="Last Name" required size="small"></TextField>
                        </Grid>
                        <Grid className="first-name">
                            <TextField type="text" label="Date of birth" required  size="small"></TextField>
                        </Grid>
                        <Grid className="first-name">
                            <TextField type="Number" label="Age" required size="small"></TextField>
                        </Grid>
                        <Grid className="first-name">
                            <TextField type="Number" label="Mobile Number" required size="small"></TextField>
                        </Grid>
                        <Grid className="first-name">
                            <TextField type="email" label="Email Id" required  size="small"></TextField>
                        </Grid>
                        <Grid className="first-name">
                            <TextField type="password" label="Password" required size="small"></TextField>
                        </Grid>
                        <Grid className="first-name">
                            <TextField type="password" label="Confirm Password" required size="small"></TextField>
                        </Grid>
                        <Grid className="buttonlabel">
                            <Button variant="contained" size="large" className="button">Login</Button>
                        </Grid>
                    </FormControl>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Register;