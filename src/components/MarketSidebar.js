import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledSidebar = styled('div')(({ theme }) => ({
  width: '250px',
  backgroundColor: theme.palette.background.paper,
}));

function MarketSidebar() {
  return (
    <StyledSidebar>
      <List component="nav">
        <ListItem button>
          <ListItemText primary="Market News" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Market Agents" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Market Listings" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Market CRM" />
        </ListItem>
      </List>
    </StyledSidebar>
  );
}

export default MarketSidebar;
