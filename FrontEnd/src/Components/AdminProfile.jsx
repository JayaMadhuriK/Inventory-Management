import {Grid} from '@material-ui/core'
import React,{useEffect, useState} from 'react'
import './AdminBoard.scss';
import axios from 'axios'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { useNavigate } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import AdminNavBar from './AdminNavBar';

const AdminProfile = () =>{
    const [admin,setAdmin] = useState(null);
    const navigate = useNavigate();
    const userId = 2;
    const fetchAdmin = async() =>{
        try{
        const response =await axios.get(`http://localhost:6001/api/users/getusers/${userId}`);
        setAdmin(response?.data);
        }catch(error){
            console.log(error);
        }
    };
    useEffect(()=>{
        fetchAdmin();
    },[]);
   return (
        <Grid className="adminprofile-body">
            <Grid><AdminNavBar/></Grid>
             {admin ?(
                <Grid>
                    <h3>Profile</h3>
                    <p>User Id:{admin.userId}</p>
                    <p>Email: {admin.email}</p>
                    <p>First Name:{admin.firstName}</p>
                    <p>Last Name:{admin.lastName}</p>
                    <p>Date of Birth:{admin.dateOfbirth}</p>
                    <p>Age:{admin.age}</p>
                    <p>Mobile Number:{admin.mobileNumber}</p>
                </Grid>
             ):(
                <p>Loading admin profile ....</p>
             )}
        </Grid>
   );
};

export default AdminProfile;