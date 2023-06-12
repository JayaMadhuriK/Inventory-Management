import Grid from '@material-ui/core/Grid'
import React,{useEffect, useState} from 'react'
import '../../Common.scss';
import axios from 'axios';

const ShowProfile = (props) =>{
    const {userDetails} = props;
    const [user,setUser] = useState(null);
    const [editing, setEditing] = useState(false);
    const [updatedUser, setUpdatedUser] = useState({});
    const fetchUser = async() =>{
        try{
            const response =await axios.get(`http://localhost:6001/api/users/getusers/${userDetails.userId}`);
            setUser(response?.data);
        }catch(error){
            console.log(error);
        }
    };
    const handleUpdateUser = async () => {
        try {
          await axios.put(`http://localhost:6001/api/users/updateusers/${user.userId}`,updatedUser);
          fetchUser();
          setEditing(false);
        } catch (error) {
          console.log(error);
        }
    };
    useEffect(()=>{
        fetchUser();
    },[]);
    const handleInputChange = (event) => {
        setUpdatedUser({
          ...updatedUser,
          [event.target.name]: event.target.value,
        });
      };
   return (
        <Grid className="showprofile-body">
            {user ?(
                <Grid className="first-grid">
                    <Grid className="grid-container">
                        <p className="userid">ID :- {user.userId}</p>
                        {!editing? (
                            <>
                                <p className="name">FirstName :- {user.firstName}</p>
                                <p className="name">LastName :- {user.lastName}</p> 
                                <p className="email">EMAIL :- {user.email}</p>
                                <p className="email">DATE OF BIRTH :- {user.dateOfBirth}</p>
                                <p className="email">AGE :- {user.age}</p>
                                <p className="name">Mobile Number :- {user.mobileNumber}</p>
                                <button onClick={() => setEditing(true)}>Update</button>
                            </>
                        ):(
                            <>
                                <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={updatedUser.firstName || user.firstName}
                                onChange={handleInputChange}
                                />
                                <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={updatedUser.lastName || user.lastName}
                                onChange={handleInputChange}
                                />
                                <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                value={updatedUser.email || user.email}
                                onChange={handleInputChange}
                                />
                                <input
                                type="date"
                                name="dateOfBirth"
                                placeholder="Date Of birth"
                                value={updatedUser.dateOfBirth || user.dateOfBirth}
                                onChange={handleInputChange}
                                />
                                <input
                                type="text"
                                name="age"
                                placeholder="Age"
                                value={updatedUser.age || user.age}
                                onChange={handleInputChange}
                                />
                                <input
                                type="text"
                                name="mobileNumber"
                                placeholder="Mobile Number"
                                value={updatedUser.mobileNumber || user.mobileNumber}
                                onChange={handleInputChange}
                                />
                                <button onClick={handleUpdateUser}>Save</button>
                            </>
                        )}
                    </Grid>
                </Grid>
                ):(
                    <p align="center">Loading user profile ....</p>
            )}
        </Grid>
    );
};

export default ShowProfile;