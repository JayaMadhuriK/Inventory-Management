import {Grid, TextField} from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import './AdminBoard.scss'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { useNavigate } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import AdminNavBar from './AdminNavBar';
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

const ItemList = () =>{
     const [itemData,setItemData] = useState([])
    const getItemData = async () =>{
        const response =await axios.get('http://localhost:4000/item')
        setItemData(response?.data);
        console.log(response);
    };
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
    useEffect(() => {
        getItemData();
      },[]);
   return (
        <Grid className="employee-body">
            <Grid><AdminNavBar/></Grid>
            <Grid className="grid-btn">
                <h1>Items</h1>
                <Button variant="contained" color="primary" size="medium" onClick={()=>{navigate("/additem")}} className="buttonnew"><AddIcon/>Add Item</Button>
                <TextField variant="standard" className="button" color="primary" InputProps={input}></TextField>
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
                            <TableCell align="center">Actions</TableCell>
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
                                        <Button variant="contained" size="small" onClick={()=>{navigate("/additem",{state:{item:item}})}}>Update</Button>
                                        <Button variant="contained" style={{marginLeft:'10px'}} 
                                        onClick={()=>{
                                            axios.delete(`http://localhost:4000/item/${item.itemId}`);
                                            window.location.reload(false);
                                        }} 
                                        color="error" size="small">Delete</Button>
                                    </Grid>
                                </TableCell>
                            </TableRow>
                        ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
   )
}

export default ItemList;