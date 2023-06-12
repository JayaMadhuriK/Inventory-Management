import Grid from '@material-ui/core/Grid'
import React,{useEffect, useState} from 'react'
import '../../Common.scss';
import axios from 'axios';

const EmployeeProfile = (props) =>{
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
    useEffect(()=>{
        fetchUser();
    },[]);
   return (
        <Grid className="profile-body">
            {user ?(
                <Grid className="profile-grid">
                    <Grid>
                        <img src="https://cdn-icons-png.flaticon.com/512/16/16363.png" className='image'/>
                    </Grid>
                    <Grid className="grid-container">
                        <p className="userid">ID :- {user.userId}</p>
                        <p className="name">NAME :- {user.firstName +" "+ user.lastName}</p>
                        <p className="email">EMAIL :- {user.email}</p>
                        <p className="name">Mobile Number :- {user.mobileNumber}</p>
                    </Grid>
                </Grid>
                ):(
                    <p align="center">Loading user profile ....</p>
            )}
        </Grid>
    );
};

export default EmployeeProfile;