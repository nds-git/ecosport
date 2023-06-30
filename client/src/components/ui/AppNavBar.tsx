import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useAppSelector } from '../../features/redux/reduxHooks';

export default function AppNavBar(): JSX.Element {
  const user = useAppSelector((state) => state.user);
  return (
    <Box sx={{ flexGrow: 1, marginBottom: '2rem' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography color="inherit" variant="h6" component={NavLink} to="/" sx={{ flexGrow: 1 }}>
            NAVBAR
          </Typography>
              <Box color="inherit" component={NavLink} to="/auth/signup">
                <Button color="inherit">SignUp</Button>
              </Box>
              <Box color="inherit" component={NavLink} to="/auth/signin">
                <Button color="inherit">SignIn</Button>
              </Box>

              <Box color="inherit" component={NavLink} to="/account">
                <Button color="inherit">Account</Button>
              </Box>
              {user.status === 'success' &&
              <Typography sx={{ color: 'yellow' }}>{user && `Hello, ${user.data.name}`}</Typography>
              }
              <Button color="inherit">
                Logout
              </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

{/* <Navbar bg="dark" data-bs-theme="dark">
<Container>
  <NavLink className="navbar-brand" to="/">
    Tigers App
  </NavLink>
  <Nav className="me-auto flex-grow-1">
    <NavLink className="nav-link" to="/">
      Home
    </NavLink>
  </Nav>
  <Nav className="me-auto">
    {user.status !== 'success' && (
      <>
        <NavLink className="nav-link" to="/auth/signup">
          signUp
        </NavLink>
        <NavLink className="nav-link" to="/auth/signin">
          signIn
        </NavLink>
      </>
    )}
    {user.status === 'success' && (
      <>
        <span className="nav-link">Привет, {user.data.name}</span>
        <Button className="nav-link" variant="warning">
          Logout
        </Button>
      </>
    )}
  </Nav>
</Container>
</Navbar> */}
