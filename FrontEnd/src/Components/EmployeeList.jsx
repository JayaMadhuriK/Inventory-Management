import {Grid, TextField} from '@material-ui/core'
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

const EmployeeList= (props) =>{
    const {employeeDetails,setEmployeeDetails,navigation,setNavigation} = props;
    const [employeeData,setEmployeeData] = useState([])
    const getEmployeeData = async () =>{
        const response =await axios.get('http://localhost:6001/api/users/getemployees');
        setEmployeeData(response?.data);
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
        getEmployeeData();
      },[]);
   return (
        <Grid className="employee-body">
            <Grid className="grid-btn">
                <h1>EMPLOYEES</h1>
                <Button variant="contained" color="primary" size="medium" onClick={()=>{navigate("/addemployee")}} className="buttonnew"><AddIcon/>Add Employee</Button>
                <TextField variant="standard" className="button" color="primary" InputProps={input}></TextField>
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
                    <TableBody>
                        {employeeData.map((employee) => (
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
                                            window.location.reload(false);
                                        }} 
                                        color="error" size="small">Delete</Button>
                                        <Button variant="contained" size="small" style={{marginLeft:'10px'}}  onClick={()=>{setEmployeeDetails(employee);setNavigation({...navigation,home:false,employee:false,items:false,profile:false,employeeAssigned:true,addEmployee:false})}}>Inventory Details</Button>
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

export default EmployeeList;