import Grid from '@material-ui/core/Grid'
import React from 'react'
import '../../Common.scss'
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Card,Space,Statistic} from 'antd';
import Category from '@mui/icons-material/Category';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';

const useStyles = makeStyles(theme => ({
    movingText: {
      position: 'relative',
      animation: '$moveText 10s linear infinite',
    },
    '@keyframes moveText': {
      '0%': {
        transform: 'translateX(-10%)',
      },
      '100%': {
        transform: 'translateX(300%)',
      },
    },
  }));

const EmployeeBoard = (props) =>{
    const {count,userDetails} = props;
    const classes = useStyles();
    return (
        <Grid className="adminboard-body">
            <Grid className="grid1">
                <img src='https://www.spherewms.com/hubfs/blog-files/SPH%20Whse%20Inv%20Mgmt%20Blog-shutterstock_1930996376.jpg' width="1366" height="450" className="image" ></img>
                <Grid className='space'>
                    <Space direction="horizontal">
                        <Card style={{marginLeft:"120px",height:"110px",border:"0"}}>
                            <Space direction="horizontal">
                                {<ShoppingCartOutlined style={{color:"black", backgroundColor:"blueviolet",borderRadius:20, fontSize:24, padding:8,}}/>}
                                <Statistic title="Assigned Items" value={count}/>
                            </Space>
                        </Card>
                        <Typography variant="h6" className={classes.movingText}>
                            <h1>Welcome!  {userDetails.firstName}</h1>
                        </Typography>
                        <Card style={{marginLeft:"550px",height:"110px",border:"0"}}>
                            <Space direction="horizontal">
                                {<Category style={{color:"black", backgroundColor:"pink",borderRadius:20, fontSize:24, padding:8,}}/>}
                                <Statistic title="Categories" value={5}/>
                            </Space>
                        </Card>
                    </Space>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default EmployeeBoard;