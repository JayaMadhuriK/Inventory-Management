import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import React,{useState,useEffect} from 'react'
import './AdminBoard.scss'
import { useNavigate } from 'react-router-dom';
import InputAdornment from '@mui/material/InputAdornment';
import {TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';
import AddItem from './AddItem'
import Dialog from '@mui/material/Dialog';

const ItemList = ({setSearchQuery1,searchQuery1,filteredItemData}) =>{
    const [isUnassignPopupOpen,setIsUnassignPopupOpen] = useState(false);
    const navigate = useNavigate();
    const input = {
        disableUnderline: true,
        style: {
            color: "white",
            disableUnderline: true,
            width:"200px",
            height:"35px",
        },
        endAdornment: (
            <InputAdornment position="end">
              <SearchIcon sx={{ color: "white"}}/>
            </InputAdornment>
        ),
    };
    const handleSearchQueryChange = (event) => {
        setSearchQuery1(event.target.value);
    };
    const handleAdd = () =>{
        setIsUnassignPopupOpen(true);
    };
   return (
        <Grid className="employee-body">
            <Grid className="grid-btn">
                <h1>ITEMS</h1>
                <Button variant="contained" color="primary" size="medium" onClick={handleAdd} className="buttonnew"><AddIcon/>Add Item</Button>
                <TextField variant="standard" className="button" placeholder="Search" color="primary" InputProps={input} value={searchQuery1} onChange={handleSearchQueryChange}></TextField>
            </Grid>
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
                            <TableCell>Employee ID</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    {filteredItemData.length>0 ? (
                    <TableBody>
                        {filteredItemData.map((item) => (
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
                                <TableCell>{item.empId}</TableCell>
                                <TableCell align="center" scope="row" component="th">
                                    <Grid style={{display:'flex'}}>
                                        <Button variant="contained" size="small" onClick={()=>{navigate("/additem",{state:{item:item}})}}>Update</Button>
                                        <Button variant="contained" style={{marginLeft:'10px'}} 
                                        onClick={()=>{
                                            axios.delete(`http://localhost:6001/api/inventory/InventoryItems/${item.itemId}`);
                                        }} 
                                        color="error" size="small">Delete</Button>
                                    </Grid>
                                </TableCell>
                            </TableRow>
                        ))
                        }
                    </TableBody>
                    ):(
                    <Grid>
                        <p align="center">No Records Found</p>
                    </Grid>
                    )}
                </Table>
            </TableContainer>
            <Dialog sx={{
                    "& .MuiDialog-container": {
                        "& .MuiPaper-root": {
                        width: "800px", 
                        height:"400px",
                        borderRadius:"10px"
                        },
                    },
                }} onClose={()=>{setIsUnassignPopupOpen(false)}} open={isUnassignPopupOpen} >
                    <AddItem/>
            </Dialog>
        </Grid>
   )
}

export default ItemList;