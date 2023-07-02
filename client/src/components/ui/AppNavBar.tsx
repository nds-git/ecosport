import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/system';
import { useAppSelector } from '../../features/redux/reduxHooks';
import '../../style.css';

export default function AppNavBar(): JSX.Element {
  const user = useAppSelector((state) => state.user);
  return (
    <Container>
      <Box sx={{ flexGrow: 1, marginBottom: '2rem' }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              color="inherit"
              variant="h6"
              component={NavLink}
              to="/"
              sx={{ fontFamily: 'FuturaBookC', flexGrow: 1, textDecoration: 0 }}
            >
              <p className="logo">
                <a href="/" title="эко спорт" className="no_href">
                  <img src="../logo.png" alt="logo" /> ЭКО | Спорт{' '}
                </a>
              </p>
            </Typography>
            <Box color="inherit" component={NavLink} to="/auth/signup">
              <Button sx={{ fontFamily: 'FuturaBookC' }} color="inherit">
                SignUp
              </Button>
            </Box>
            <Box color="inherit" component={NavLink} to="/auth/signin">
              <Button sx={{ fontFamily: 'FuturaBookC' }} color="inherit">
                SignIn
              </Button>
            </Box>
            <Box>
              {user.status === 'success' && (
                <Typography sx={{ color: 'yellow' }}>
                  {user && `Hello, ${user.data.name}`}
                </Typography>
              )}
              <Button sx={{ fontFamily: 'FuturaBookC' }} color="inherit">
                Logout
              </Button>
            </Box>
            {user.status === 'success' && (
              <Typography sx={{ color: 'yellow' }}>{user && `Hello, ${user.data.name}`}</Typography>
            )}
            <Button sx={{ fontFamily: 'FuturaBookC' }} color="inherit">
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </Container>
  );
}
