import Grid from '@material-ui/core/Grid'
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
import AdminBoard from './AdminBoard';
import EmployeeList from './EmployeeList';
import ItemList from './ItemList';
import UserProfile from './UserProfile';
import EmployeeAssignedItems from './EmployeeAssignedItems';
import AddEmployee from './AddEmployee';

const AdminNavBar = () =>{
    const [anchorEl, setAnchorEl] = useState(null);
    const [navigation,setNavigation] = useState({
        home:true,
        employee:false,
        items:false,
        profile:false,
        employeeAssigned:false,
        addEmployee:false,
    });
    const [isDialogOpen,setIsDialogOpen] = useState(false);
    const [employeeDetails,setEmployeeDetails] = useState({});
    const [assignItemCount, setAssignItemCount] = useState(0);
    const [unAssignItemCount, setUnAssignItemCount] = useState(0);
    const [employeeCount, setEmployeeCount] = useState(0);
    const navigate = useNavigate();
    const handleProfile = () => {
        setNavigation({...navigation,home:false,employee:false,items:false,profile:true,employeeAssigned:false,addEmployee:false});
        setAnchorEl(null);
    };
    console.log(assignItemCount);
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
        setNavigation({...navigation,home:true,employee:false,items:false,profile:false,employeeAssigned:false,addEmployee:false});
    };
    const handleEmployee = ()=>{
        setNavigation({...navigation,home:false,employee:true,items:false,profile:false,employeeAssigned:false,addEmployee:false});
    }
    const handleItem = ()=>{
        setNavigation({...navigation,home:false,employee:false,items:true,profile:false,employeeAssigned:false,addEmployee:false});
    }
   return (
        <Grid className="adminnav-body">
            <Grid className='label'>
                <Grid className="logo">WalMart</Grid>
                <Button variant="standard" className="home" onClick={handleHome}>{navigation.home ? <u>Home</u>:<>Home</>}</Button>
                <Button variant="standard" className="employee" onClick={handleEmployee}>{navigation.employee ? <u>Employee</u>:<>Employee</>}</Button>
                <Button variant="standard" className="items" onClick={handleItem}>{navigation.items ? <u>Items</u>:<>Items</>}</Button>
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
            {navigation ?.home && <AdminBoard assignItemCount={assignItemCount} unAssignItemCount={unAssignItemCount} employeeCount={employeeCount}/>}
            {navigation ?.employee && <EmployeeList
                employeeDetails={employeeDetails} 
                setEmployeeDetails={setEmployeeDetails}
                setNavigation={setNavigation}
                navigation={navigation}
                setEmployeeCount={setEmployeeCount}/>}
            {navigation ?.items && <ItemList setAssignItemCount={setAssignItemCount} setUnAssignItemCount={setUnAssignItemCount}/>}
            {navigation ?.profile && <UserProfile employeeDetails={employeeDetails}/>}
            {navigation ?.employeeAssigned && <EmployeeAssignedItems employeeDetails={employeeDetails} />}
            {navigation ?.addEmployee && <AddEmployee/>}
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