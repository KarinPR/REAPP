import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Hidden, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { Grid } from '@mui/material';

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Link href="/">Home</Link>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Link href="/market-research">Market Research</Link>
      </Grid>
    </Grid>
  );
  };

  const drawer = (
    <List>
      {['Home', 'Market Research'].map((text) => (
        <ListItem button key={text}>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Real Estate Scroller
        </Typography>
        <Hidden smDown>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Market Research</Button>
        </Hidden>
        <Hidden mdUp>
          <Button color="inherit" onClick={handleDrawerToggle}>
            <MenuIcon />
          </Button>
        </Hidden>
      </Toolbar>
      <Hidden mdUp>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
        >
          {drawer}
        </Drawer>
      </Hidden>
    </AppBar>
  );
}

export default Navbar;
