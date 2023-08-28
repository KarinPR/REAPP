import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Hidden, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();
  const isActive = (href) => router.pathname === href;
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {[
        { text: 'Home', href: '/' },
        { text: 'Market Research', href: '/market-research' },
        { text: 'My Profile', href: '/profile' }
      ].map((item) => (
        <Link href={item.href} key={item.text} passHref>
          <ListItem button>
            <ListItemText primary={item.text} />
          </ListItem>
        </Link>
      ))}
    </List>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1, color: 'white', textDecoration: 'none' }}>
          Real Estate Scroller
        </Typography>
        <Hidden smDown>
          <Link href="/" passHref>
            <Button style={{ color: isActive('/') ? 'white' : 'white' }}>Home</Button>
          </Link>
          <Link href="/market-research" passHref>
            <Button style={{ color: isActive('/') ? 'white' : 'white' }}>Market Research</Button>
          </Link>
          <Link href="/profile" passHref>
            <Button style={{ color: isActive('/') ? 'white' : 'white' }}>My Profile</Button>
          </Link>
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
