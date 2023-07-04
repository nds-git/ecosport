import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import { useAppDispatch, useAppSelector } from '../../features/redux/reduxHooks';
import '../../style.css';

import AuthButtons from './Auth/AuthButtons';
import { getTotalGarbageEventThunk } from '../../features/thunkActions/eventThunkActions';

export default function AppNavBar(): JSX.Element {
  const user = useAppSelector((state) => state.user);
  const garbage = useAppSelector((state) => state.events.garbage);
  const events = useAppSelector((state) => state.events.data);
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(getTotalGarbageEventThunk());
  }, [events]);
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
            {garbage && (<div style={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
              <h2>
                Вы спасли планету от <span style={{ color: 'yellow' }}>{garbage}</span> кг мусора
              </h2>
            </div>)}
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
