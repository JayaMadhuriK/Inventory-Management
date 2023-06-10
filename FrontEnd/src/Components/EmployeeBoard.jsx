import Grid from '@material-ui/core/Grid'
import React,{useState,useEffect} from 'react'
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
import AdminBoard from './AdminBoard';
import EmployeeList from './EmployeeList';
import ItemList from './ItemList';
import UserProfile from './UserProfile';
import EmployeeAssignedItems from './EmployeeAssignedItems';
import AddEmployee from './AddEmployee';
import axios from 'axios';

const EmployeeBoard = () =>{
    const [anchorEl, setAnchorEl] = useState(null);
    const [isDialogOpen,setIsDialogOpen] = useState(false);
    const navigate = useNavigate();
    const [navigation,setNavigation] = useState({
        items:true,
        profile:false,
    });
    const handleItem = ()=>{
        setNavigation({...navigation,items:true,profile:true});
    };
    const handleProfile = () => {
        setNavigation({...navigation,items:false,profile:true});
        setAnchorEl(null);
    };
    const handleLogOut = () => {
        setAnchorEl(null);
        setTimeout(function() {
        navigate('/');
        },1000);
    };
    const handleClose = () =>{
        setIsDialogOpen(false);
        setAnchorEl(null);
    };
    const handleCloseMenu = () =>{
        setAnchorEl(null);
    };
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
   return (
        <Grid className="adminnav-body">
            <Grid className='label'>
                <Grid className="logo">WalMart</Grid>
                <Button variant="standard" className="items" onClick={handleItem}>{navigation.items ? <u>Inventory Items</u>:<>Inventory Items</>}</Button>
                <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    <AccountCircleIcon className="icon" sx={{fontSize:'40px', color:'white', marginTop:'-5px', position: 'absolute', marginLeft:'170px'}}/>
                </IconButton>
                <Menu
                    keepMounted
                    anchorEl={anchorEl}
                    style={{top: 50,marginLeft:'55px'}}
                    onClose={handleCloseMenu}
                    open={Boolean(anchorEl)}
                    autoFocus
                >
                    <MenuItem onClick={handleProfile}>Profile</MenuItem>
                    <MenuItem onClick={()=>{setIsDialogOpen(true)}}>Logout</MenuItem>
                </Menu>
            </Grid>
            {navigation ?.items && <UserProfile/>}
            {navigation ?.profile && <UserProfile/>}
            <Dialog sx={{
                    "& .MuiDialog-container": {
                        "& .MuiPaper-root": {
                        width: "100%",
                        maxWidth: "400px", 
                        marginLeft:"80px"
                        },
                    },
                }} onClose={handleClose} open={isDialogOpen} >
                    <DialogContent>
          <DialogContentText>
            Do you want to Logout?
          </DialogContentText>
        </DialogContent>
                <DialogActions>
                    <Button variant="contained" className="button"  onClick={handleLogOut}>Agree</Button>
                    <Button variant="contained" className="button" onClick={handleClose}>Disagree</Button>
                </DialogActions>
            </Dialog>
        </Grid>
   )
}

export default EmployeeBoard;