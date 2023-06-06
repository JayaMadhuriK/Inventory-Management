import {Grid} from '@material-ui/core'
import React,{useState,useEffect} from 'react';
import './AdminBoard.scss'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl} from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import MuiAlert from '@mui/material/Alert';
import AdminNavBar from './AdminNavBar';

const AddItem = () =>{
    const initialValues = {
        itemName:"",
        category:"",
        billNumber:"",
        dateOfPurchase:"",
        warranty:"",
        expireDate: "", 
    };
    const navigate = useNavigate();
    const [focus, setFocused] = useState(false);
    const onFocus = () => setFocused(true);
    const onBlur = () => setFocused(false);
    const [systemErrors,setSystemErrors] = useState("");
    const [formValues, setFormValues] = useState(initialValues);

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert ref={ref} variant="filled" {...props} />;
    });
    const input = {
        disableUnderline: true,
        style: {
            color: "white",
            disableUnderline: true,
        }
    };
    const handleRegister = () =>{
      axios.post('http://localhost:6001/api/auth/signup',formValues)
      .then(response=>{
        if(response?.status==200){
            setSystemErrors({...systemErrors,response:'Item added Successfully'});
            setTimeout(function() {
                setSystemErrors({...systemErrors,response:''})
                navigate('/itemlist')
            }, 5000);
        }
      }).catch(error=>{
        if(error?.message=="Network Error"){
            setSystemErrors({...systemErrors,networkError:error?.message})
            setTimeout(function() {
            setSystemErrors({...systemErrors,networkError:''})
            }, 5000);
        }
      });
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({...formValues,[name]:value});

    };
    return (
        <Grid className="additem">
            <Grid><AdminNavBar/></Grid>
            {systemErrors?.networkError?.length>0 && <Alert severity="error" style={{width:'350px', position:"absolute", marginLeft:'983px', marginTop:'5px'}}>{systemErrors?.networkError}</Alert>}   
            {systemErrors?.response?.length>0 && <Alert severity="success" style={{width:'400px', position:"absolute", marginLeft:'933px', marginTop:'5px'}}>{systemErrors?.response}</Alert>} 
            <Grid className='item-popup'>
                <Grid>
                    <FormControl className="register-form">
                        <h1>Add Item</h1>
                        <Grid className="field-container"> 
                            <Grid className="textbox">
                                <TextField type="text" className="text" variant="standard" InputProps={input} name="itemName" style={{width: "205px"}} onChange={handleChange} label="Item Name" size="small" required></TextField>
                            </Grid>
                            <Grid className="textbox">
                                <TextField type="text" className="text" variant="standard" InputProps={input} name="category" style={{width: "205px",marginLeft:"65px"}} onChange={handleChange} label="Category" size="small" required></TextField>
                            </Grid>
                        </Grid>
                        <Grid className = "field-container">
                            <Grid className="textbox">
                                <TextField type={focus ? "date" : "text"} className="text" variant="standard" InputProps={input} name="dateOfPurchase" style={{width: "205px"}} onChange={handleChange} label="Date of purchase" size="small" onFocus={onFocus} onBlur={onBlur} required></TextField>
                            </Grid>
                            <Grid className="textbox">
                                <TextField type="text" className="text" variant="standard" InputProps={input} InputLabelProps={{input}} inputProps={{ readOnly: true }} name="billNumber" style={{width: "205px",marginLeft:"65px"}} onChange={handleChange} label="Bill Number" size="small" required></TextField>
                            </Grid>
                        </Grid>
                        <Grid className = "field-container">
                            <Grid className="textbox">
                                <TextField type="Number" className="text" variant="standard" InputProps={input} name="warranty" style={{width: "205px"}} onChange={handleChange} label="Warranty(in months)" size="small" required></TextField>
                            </Grid>
                            <Grid className="textbox">
                                <TextField className="text" variant="standard" InputProps={input}  name="expireDate" style={{width: "205px",marginLeft:"65px"}} onChange={handleChange} label="Expire Date" size="small" required></TextField>
                            </Grid>
                        </Grid>
                        <Grid className="button-label">
                            <Button variant="contained" className="button" onClick={handleRegister} InputProps={input} size="large" >Add</Button>
                        </Grid>
                    </FormControl>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default AddItem;