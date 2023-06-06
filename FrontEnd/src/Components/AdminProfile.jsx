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
    const fetchAdmin = async() =>{
        const response =await axios.get('http://localhost:6001/user');
        setAdmin(response?.data);
    }
    useEffect(()=>{
        fetchAdmin();
    },[]);
   return (
        <Grid className="admin-body">
            <Grid><AdminNavBar/></Grid>
             {admin ?(
                <Grid>
                    <h3>Profile</h3>
                    <p>User Id</p>
                    <p></p>
                    <p></p>
                </Grid>
             ):(
                <p>Loading admin profile ....</p>
             )}
        </Grid>
   );
};

export default AdminProfile;