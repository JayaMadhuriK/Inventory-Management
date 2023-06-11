import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


export default function SideNavbar() {
    const [selectedItem, setSelectedItem] = React.useState('Items');
    const handleChangeItem = (item) => {
      setSelectedItem(item);
    };
  const list = () => (
    <Box
      
    >
      <List>
        {['Items', 'Starred', 'Send email', 'Drafts'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        
          <SwipeableDrawer
            open={true}
          >
            {list()}
          </SwipeableDrawer>
      ))}
    </div>
  );
}