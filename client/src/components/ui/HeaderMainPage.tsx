import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { useAppSelector } from '../../features/redux/reduxHooks';

export default function HeaderMainPage(): JSX.Element {
  const user = useAppSelector((state) => state.user);
  return (
    <Box sx={{ flexGrow: 1, marginBottom: '2rem' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography color="inherit" variant="h6" component={NavLink} to="/" sx={{ flexGrow: 1 }}>
            <a href="/" title="эко спорт">
              <img src="../logo.png" alt="logo" className="logo" />
              &nbsp;&nbsp; ЭКО | Спорт{' '}
            </a>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
