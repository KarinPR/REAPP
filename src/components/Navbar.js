import { AppBar, Toolbar, Typography } from '@material-ui/core';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Real Estate Scroller
        </Typography>
        {/* Add other navbar items here */}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
