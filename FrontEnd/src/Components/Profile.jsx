import React from 'react';
import Grid from '@material-ui/core/Grid'

const Profile = ({ values }) => {
  return (
    <Grid>
      <h1>Profile</h1>
      {values ?(
        <Grid>
          <Grid>
            <label>ID:</label>
            <span>{values.userId}</span>
          </Grid>
          <Grid>
            <label>Email:</label>
            <span>{values.email}</span>
          </Grid>
          <Grid>
            <label>Name:</label>
            <span> {values.firstName +" "+ values.lastName}</span>
          </Grid>
          <Grid>
            <label>Mobile Number:</label>
            <span>{values.mobileNumber}</span>
          </Grid>
        </Grid>
        ):(
        <Grid>
          <p align="center">Loading user profile ....</p>
        </Grid>
      )}
    </Grid>
  );
};

export default Profile;
