import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import React,{useState} from 'react'
import './AdminBoard.scss'
import InputAdornment from '@mui/material/InputAdornment';
import {TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
} from '@mui/material';
import axios from 'axios';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Dialog from '@mui/material/Dialog';
import AddEmployee from './AddEmployee';

const EmployeeList= (props) =>{
    const {setEmployeeDetails,navigation,setNavigation,setSearchQuery,filteredEmployeeData,searchQuery} = props;
    const [isUnassignPopupOpen,setIsUnassignPopupOpen] = useState(false);
    const handleSearchQueryChange = (event) => {
        setSearchQuery(event.target.value);
      };
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
    const handleAdd = () =>{
        setIsUnassignPopupOpen(true);
    };
   return (
        <Grid className="employee-body">
            <Grid className="grid-btn">
                <h1>EMPLOYEES</h1>
                <Button variant="contained" color="primary" size="medium" onClick={handleAdd} className="buttonnew"><AddIcon/>Add Employee</Button>
                <TextField variant="standard" className="button" color="primary" placeholder='Search' InputProps={input} value={searchQuery} onChange={handleSearchQueryChange}></TextField>
            </Grid>
            <TableContainer component={Paper} className="app-container">
                <Table aria-label='table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>User ID</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Date Of Birth</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>Mobile Number</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    {filteredEmployeeData.length>0 ? (
                    <TableBody>
                        {filteredEmployeeData.map((employee) => (
                            <TableRow 
                                key = {employee.userId}
                                sx = {{ '&:last-child td, &:last-child th': {border:0} }}
                            >
                                <TableCell>{employee.userId}</TableCell>
                                <TableCell>{employee.email}</TableCell>
                                <TableCell>{employee.firstName}</TableCell>
                                <TableCell>{employee.lastName}</TableCell>
                                <TableCell>{employee.dateOfBirth}</TableCell>
                                <TableCell>{employee.age}</TableCell>
                                <TableCell>{employee.mobileNumber}</TableCell>
                                <TableCell align="center" scope="row" component="th">
                                    <Grid style={{display:'flex'}}>
                                        <Button variant="contained" style={{marginLeft:'10px'}} 
                                        onClick={()=>{
                                            axios.delete(`http://localhost:6001/api/users/deleteusers/${employee.userId}`);
                                        }} 
                                        color="error" size="small">Delete</Button>
                                        <Button variant="contained" size="small" style={{marginLeft:'10px'}}  onClick={()=>{setEmployeeDetails(employee);setNavigation({...navigation,home:false,employee:false,items:false,profile:false,employeeAssigned:true,addEmployee:false})}}>Inventory Details</Button>
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
                        height:"450px",
                        borderRadius:"10px"
                        },
                    },
                }} onClose={()=>{setIsUnassignPopupOpen(false)}} open={isUnassignPopupOpen} >
                    <AddEmployee/>
            </Dialog>
        </Grid>
   )
}

export default EmployeeList;