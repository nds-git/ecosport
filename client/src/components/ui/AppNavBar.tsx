import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import { Padding } from '@mui/icons-material';
import '../../style.css';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '../../features/redux/reduxHooks';

import AuthButtons from './Auth/AuthButtons';
import { getTotalGarbageEventThunk } from '../../features/thunkActions/eventThunkActions';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function AppNavBar(): JSX.Element {
  const user = useAppSelector((state) => state.user);
  const garbage = useAppSelector((state) => state.events.garbage);
  const events = useAppSelector((state) => state.events.data);
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(getTotalGarbageEventThunk());
  }, [events]);

  return (
    <Box className="box-top-navi" sx={{ flexGrow: 1, fontFamily: 'FuturaBookC' }}>
      <Container>
        {/* <Box sx={{ backgroundColor: 'transparent', flexGrow: 1, marginBottom: '2rem' }}> */}
        <AppBar position="static" sx={{ backgroundColor: 'transparent' }} elevation={0}>
          <Toolbar sx={{ justifyContent: 'space-between', backgroundColor: 'transparent' }}>
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
            <Typography
              sx={{
                fontFamily: 'FuturaBookC',
                // border: '1px solid yellow',
                borderRadius: '10px',
                padding: '0 60px 0 10px',
              }}
            >
              {garbage && (
                <div
                  style={{ flexGrow: 1, display: 'flex', justifyContent: 'left', height: '40px' }}
                >
                  <h2>
                    Спасли планету от{' '}
                    <span style={{ color: 'yellow', borderBottom: '1px solid yellow' }}>
                      {garbage}
                    </span>{' '}
                    кг мусора
                  </h2>
                </div>
              )}
            </Typography>
            <Typography variant="h4" sx={{ fontFamily: 'FuturaBookC', color: '#fff' }}>
              {user.status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  // sx={{
                  //   backgroundImage: 'linear-gradient(45deg, #4ecdc4, #0099ff)',
                  //   backgroundSize: '200% 200%',
                  //   animation: 'gradientAnimation 10s ease infinite',
                  // }}
                >
                  {user && `Добро пожаловать!`}
                </motion.div>
              )}
            </Typography>
            {/* {user.status === 'success' && (
              <Typography variant="h4" sx={{ fontFamily: 'Montserrat', color: '#fff' }}>
                {user && `Добро пожаловать, ${user.data.name}!`}
              </Typography>
            )} */}
            <AuthButtons />
          </Toolbar>
        </AppBar>
        {/* </Box> */}
      </Container>
    </Box>
  );
}
