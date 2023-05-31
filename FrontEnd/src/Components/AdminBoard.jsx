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
            <Grid className='label'>
                <Grid className="logo">WalMart</Grid>
                <Button variant="standard" className="employee">Employees</Button>
                <Button variant="standard" className="items">Items</Button><IconButton aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}><AccountCircleIcon className="icon" sx={{fontSize:'40px', color:'white', marginTop:'-5px', position: 'absolute', marginLeft:'170px'}}/></IconButton>
                <Menu
                    keepMounted
                    anchorEl={anchorEl}
                    style={{top: 50,marginLeft:'55px'}}
                    onClose={handleClose}
                    open={Boolean(anchorEl)}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={()=>{setIsDialogOpen(true)}}>Logout</MenuItem>
                </Menu>
            </Grid>
            <Dialog sx={{
                    "& .MuiDialog-container": {
                        "& .MuiPaper-root": {
                        width: "100%",
                        maxWidth: "400px", 
                        marginLeft:"80px"
                        },
                    },
                }} onClose={handleClose1} open={isDialogOpen} >
                    <DialogContent>
          <DialogContentText>
            Do you want to Logout?
          </DialogContentText>
        </DialogContent>
                <DialogActions>
                    <Button variant="contained" className="button"  onClick={handleLogOut}>Agree</Button>
                    <Button variant="contained" className="button" onClick={handleClose1}>Disagree</Button>
                </DialogActions>
            </Dialog>
        </Grid>
   )
}

export default AdminBoard;