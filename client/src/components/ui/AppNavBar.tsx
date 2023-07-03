import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import { useAppSelector } from '../../features/redux/reduxHooks';
import '../../style.css';

import AuthButtons from './Auth/AuthButtons';

export default function AppNavBar(): JSX.Element {
  const user = useAppSelector((state) => state.user);
  return (
    <Container>
      <Box sx={{ flexGrow: 1, marginBottom: '2rem' }}>
        <AppBar position="static">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
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
            <div sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center'}}>
              <h2>Мы собрали: 7000 кг мусора</h2>
            </div>
            {user.status === 'success' && (
              <Typography sx={{ color: 'yellow', mr: '45px' }}>
                {user && `Hello, ${user.data.name}`}
              </Typography>
            )}
            <AuthButtons />
          </Toolbar>
        </AppBar>
      </Box>
    </Container>
  );
}
