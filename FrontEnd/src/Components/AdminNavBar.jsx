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

const AdminNavBar = () =>{
    const [anchorEl, setAnchorEl] = useState(null);
    const [underline,setUnderline] = useState({
        home:true,
        employee:false,
        items:false,
    });
    const [isDialogOpen,setIsDialogOpen] = useState(false);
    const navigate = useNavigate();
    const handleProfile = () => {
        navigate('/profile');
    };
    const handleLogOut = () => {
        setTimeout(function() {
        navigate('/');
        },1000);
    };
    const handleClose = () =>{
        setIsDialogOpen(false);
    };
    const handleCloseMenu = () =>{
        setAnchorEl(null);
    };
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleHome = ()=>{
        setUnderline({...underline,home:true,employee:false,items:false});
        navigate('/adminboard');
    };
    const handleEmployee = ()=>{
        setUnderline({...underline,home:false,employee:true,items:false});
        navigate('/employeelist');
    }
    const handleItem = ()=>{
        setUnderline({...underline,home:false,employee:false,items:true});
        navigate('/itemlist');
    }
   return (
        <Grid className="adminnav-body">
            <Grid className='label'>
                <Grid className="logo">WalMart</Grid>
                <Button variant="standard" className="home" onClick={handleHome}>{underline.home ? <u>Home</u>:<>Home</>}</Button>
                <Button variant="standard" className="employee" onClick={handleEmployee}>{underline.employee ? <u>Employee</u>:<>Employee</>}</Button>
                <Button variant="standard" className="items" onClick={handleItem}>{underline.items ? <u>Items</u>:<>Items</>}</Button>
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

export default AdminNavBar;