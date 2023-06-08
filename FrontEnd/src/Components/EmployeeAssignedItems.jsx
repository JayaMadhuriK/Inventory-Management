import {Grid} from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import './AdminBoard.scss';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import {TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserProfile from './UserProfile'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import ItemsPopUp from'./ItemsPopUp';

const EmployeeAssignedItems = (props) =>{
    const {employeeDetails} = props;
    const [itemData,setItemData] = useState([]);
    const [selectedItems,setSelectedItems] = useState([]);
    const [isUnassignPopupOpen,setIsUnassignPopupOpen] = useState(false);
    const getItemData = async () =>{
        const response =await axios.get(`http://localhost:6001/api/employeeitems/assignitems/${employeeDetails?.userId}`)
        setItemData(response?.data?.assignedItems);
        console.log(response);
    };
    console.log(employeeDetails)
    const handleAssign = () =>{
        setIsUnassignPopupOpen(true);
    };
    const handleAdd = () =>{
        let assignedItems = [];
        assignedItems = [...itemData,...selectedItems];
        setIsUnassignPopupOpen(false);
        setItemData(assignedItems);
    };
    const handleDelete = (item) =>{
        console.log(item);
    }
    useEffect(() => {
        getItemData();
      },[]);
   return (
        <Grid className="employee-body">
            <Grid className="grid-btn">
                <h1>Inventory Details</h1>
            </Grid>
            <Grid className="profile">
                <h3><UserProfile userId={employeeDetails?.userId}/></h3>
            </Grid>
            <Grid className="btn-grid">
                <Button variant="contained" size="medium" onClick={handleAssign} className="btn"><AddIcon/>Assign More</Button>
            </Grid>
            {itemData.length>0 ? (
                     <TableContainer component={Paper} className="app-container">
                     <Table aria-label='table'>
                         <TableHead>
                             <TableRow>
                                 <TableCell>Item Id</TableCell>
                                 <TableCell>Item Name</TableCell>
                                 <TableCell>Category</TableCell>
                                 <TableCell>Bill Number</TableCell>
                                 <TableCell>Date of Purchase</TableCell>
                                 <TableCell>Warranty</TableCell>
                                 <TableCell>Expire date</TableCell>
                                 <TableCell>Actions</TableCell>
                             </TableRow>
                         </TableHead>
                         <TableBody>
                             {itemData.map((item) => (
                                 <TableRow 
                                     key = {item.itemId}
                                     sx = {{ '&:last-child td, &:last-child th': {border:0} }}
                                 >
                                     <TableCell>{item.itemId}</TableCell>
                                     <TableCell>{item.itemName}</TableCell>
                                     <TableCell>{item.category}</TableCell>
                                     <TableCell>{item.billNumber}</TableCell>
                                     <TableCell>{item.dateOfPurchase}</TableCell>
                                     <TableCell>{item.warranty}</TableCell>
                                     <TableCell>{item.expireDate}</TableCell>
                                     <TableCell align="center" scope="row" component="th">
                                         <Grid style={{display:'flex'}}>
                                             <Button variant="contained" style={{marginLeft:'10px',backgroundColor:"black"}} 
                                             onClick={()=>{
                                                let deletedItems =[]
                                                 itemData.map((row)=>{
                                                    if(row.itemId != item.itemId){
                                                        deletedItems.push(row);
                                                    }
                                                })
                                                setItemData(deletedItems);
                                             }} size="small"><DeleteIcon/></Button>
                                         </Grid>
                                     </TableCell>
                                 </TableRow>
                             ))
                             }
                         </TableBody>
                     </Table>
                 </TableContainer>
            ):(
                <Grid className="last-grid">
                    <h1>No Items Assigned</h1>
                </Grid>
            )}
             <Dialog sx={{
                    "& .MuiDialog-container": {
                        "& .MuiPaper-root": {
                        width: "800px", 
                        height:"500px",
                        marginLeft:"80px"
                        },
                    },
                }} onClose={()=>{setIsUnassignPopupOpen(false)}} open={isUnassignPopupOpen} >
                <DialogTitle>
                    <IconButton onClick={()=>{setIsUnassignPopupOpen(false)}}>
                        <CloseIcon/>
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <ItemsPopUp selectedItems={selectedItems} setSelectedItems={setSelectedItems}/>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" className="button"  onClick={()=>{setIsUnassignPopupOpen(false)}}>Cancel</Button>
                    <Button variant="contained" className="button" onClick={handleAdd}>Add</Button>
                </DialogActions>
            </Dialog>
        </Grid>
   )
}

export default EmployeeAssignedItems;