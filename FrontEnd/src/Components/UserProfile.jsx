import {Grid} from '@material-ui/core'
import React,{useEffect, useState} from 'react'
import './AdminBoard.scss';
import axios from 'axios';
import TextField from '@mui/material/TextField';

const UserProfile = (props) =>{
    const {userId} = props;
    const [user,setUser] = useState(null);
    const fetchUser = async() =>{
        try{
        const response =await axios.get(`http://localhost:6001/api/users/getusers/${userId}`);
        setUser(response?.data);
        }catch(error){
            console.log(error);
        }
    };
    console.log(user)
    useEffect(()=>{
        fetchUser();
    },[]);
   return (
        <Grid className="profile-body">
             {user ?(
                <Grid className="profile-grid">
                    <Grid className="grid-container">
                        <p className="first">User Id:</p><TextField className="text-box1" size="small" variant="standard" value={user.userId}/>
                        <p className="second">Email:</p><TextField className="text-box2" size="small" variant="standard" value={user.email}/>
                    </Grid>
                    <Grid className="grid-container">
                        <p className="first">First Name:</p><TextField className="text-box3" size="small" variant="standard" value={user.firstName}/>
                        <p className="lastname">Last Name:</p><TextField className="text-box4" size="small" variant="standard" value={user.lastName}/>
                    </Grid>
                    <Grid className="grid-container">
                        <p className="first">Date of Birth:</p><TextField className="text-box5" size="small" variant="standard" value={user.dateOfBirth}/>
                        <p className="age">Age:</p><TextField className="text-box6" size="small" variant="standard" value={user.age}/>
                    </Grid>
                    <Grid className="grid-container">
                        <p className="first">Mobile Number:</p><TextField className="text-box7" size="small" variant="standard" value={user.mobileNumber}/>
                    </Grid>
                </Grid>
             ):(
                <p>Loading user profile ....</p>
             )}
        </Grid>
   );
};

export default UserProfile;