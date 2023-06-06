import {Grid} from '@material-ui/core'
import React,{useState} from 'react'
import './AdminBoard.scss'
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

const AdminBoard = () =>{
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isDialogOpen,setIsDialogOpen] = useState(false);
    const navigate = useNavigate();
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogOut = () => {
        setTimeout(function() {
        navigate('/');
        },1000);
    };
    const handleClose1 = () =>{
        setIsDialogOpen(false);
    };
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
   return (
        <Grid className="admin-body">
            <Grid><AdminNavBar/></Grid>
            
        </Grid>
   )
}

export default AdminBoard;