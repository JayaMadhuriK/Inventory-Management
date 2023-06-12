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
import EmployeeBoard from './EmployeeBoard';
import UserProfile from './UserProfile';
import axios from 'axios';
import EmployeeItemList from './EmployeeItemList';

const EmployeeNavbar = () =>{
    const [anchorEl, setAnchorEl] = useState(null);
    const [navigation,setNavigation] = useState({
        home:true,
        items:false,
        profile:false
    });
    const userId = 63;
    const [isDialogOpen,setIsDialogOpen] = useState(false);
    const [searchQuery1, setSearchQuery1] = useState('');
    const [filteredItemData, setFilteredItemData] = useState([]);
    const [count,setCount] = useState(0);
    const navigate = useNavigate();
    const handleProfile = () => {
        setNavigation({...navigation,home:false,items:false,profile:true});
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
    const handleHome = ()=>{
        setNavigation({...navigation,home:true,items:false,profile:false});
    };
    const handleItem = ()=>{
        setNavigation({...navigation,home:false,items:true,profile:false});
    };
    const getItemData = async () =>{
        const response =await axios.get(`http://localhost:6001/api/employeeitems/assignitems/${userId}`);
        const data = response?.data?.assignedItems;
        const filteredData = data?.filter((item) =>{
            const itemNameMatch = item.itemName.toLowerCase().includes(searchQuery1.toLowerCase());
            const itemIdMatch = item.itemId.toString().includes(searchQuery1.toLowerCase());
            const categoryMatch = item.category.toLowerCase().includes(searchQuery1.toLowerCase());
            const billNumberMatch = item.billNumber.toString().includes(searchQuery1.toLowerCase());    
            return itemNameMatch || itemIdMatch || categoryMatch || billNumberMatch;
        });
        setFilteredItemData(filteredData)
        setCount(data.length);
    };
    useEffect(() => {
        getItemData();
    },[searchQuery1]);
    return (
        <Grid className="employeenav-body">
            <Grid className='label'>
                <Grid className="logo">WalMart</Grid>
                <Button variant="standard" className="home" onClick={handleHome}>{navigation.home ? <u>Home</u>:<>Home</>}</Button>
                <Button variant="standard" className="items" onClick={handleItem}>{navigation.items ? <u>Inventory</u>:<>Inventory</>}</Button>
                <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    <AccountCircleIcon className="icon" sx={{fontSize:'40px', color:'white', marginTop:'-5px', position: 'absolute', marginLeft:'140px'}}/>
                </IconButton>
                <Menu
                    keepMounted
                    anchorEl={anchorEl}
                    style={{top: 50,marginLeft:'40px'}}
                    onClose={handleCloseMenu}
                    open={Boolean(anchorEl)}
                    autoFocus>
                    <MenuItem onClick={handleProfile}>Profile</MenuItem>
                    <MenuItem onClick={()=>{setIsDialogOpen(true)}}>Logout</MenuItem>
                </Menu>
            </Grid>
            {navigation ?.home && <EmployeeBoard count={count}/>}
            {navigation ?.items && <EmployeeItemList
            searchQuery1={searchQuery1}
            filteredItemData={filteredItemData}
            setSearchQuery1={setSearchQuery1}/>}
            {navigation ?.profile && <UserProfile/>}
            <Dialog 
                sx={{
                    "& .MuiDialog-container": {
                        "& .MuiPaper-root": {
                            width: "100%",
                            maxWidth: "400px", 
                            marginLeft:"80px"
                        },
                    },
                }} onClose={handleClose} open={isDialogOpen}>
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

export default EmployeeNavbar;