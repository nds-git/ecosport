import React from 'react';
import { Box, Button, ButtonGroup, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useAppDispatch, useAppSelector } from '../../../features/redux/reduxHooks';
import { userLogoutThunk } from '../../../features/thunkActions';
import { useNavigate } from 'react-router-dom';

import { openModal } from '../../../features/redux/slices/modalSlice';

export default function AuthButtons(): JSX.Element {
  const dispatch = useAppDispatch();
  const modalOpen = useAppSelector((state) => state.modal.isOpen);
  const user = useAppSelector((state) => state.user);
  const navigate = useNavigate();


  const LogoutHandler = (): void => {
    dispatch(userLogoutThunk());
    navigate('/');
  };

  const handleAccountButtonClick = (): void => {
    navigate('/account')
  };

  return (
    <ButtonGroup className="button-group" size="small">
      {user.status === 'guest' && (
        <Box>
          <Button variant="contained" size="small" onClick={() => dispatch(openModal('signup'))}>
            Создать событие
          </Button>
          <Button variant="contained" size="small" onClick={() => dispatch(openModal('signin'))}>
            Войти
          </Button>
        </Box>
      )}
      {user.status === 'success' && (
        <Box>
          <IconButton
            color="inherit"
            size="small"
            onClick={handleAccountButtonClick}
            style={{ fontSize: '5rem' }}
          >
            <AccountCircleIcon />
          </IconButton>
          <Button variant="contained" onClick={LogoutHandler}>
            Выйти
          </Button>
        </Box>
      )}
    </ButtonGroup>
  );
}
