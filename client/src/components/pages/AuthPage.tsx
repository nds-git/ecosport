import React from 'react';
import {
  Box,
  Button,
  TextField,
  Container,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  OutlinedInput,
  Modal,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import useFormHook from '../../hooks/useFormHook';

export default function AuthPage(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const { type } = useParams();

  const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const handleClickShowPassword = (): void => setShowPassword((show) => !show);

  const { signInHandler, signUpHandler } = useFormHook();

  return (
    <>
      <Button onClick={handleOpen}>Создать событие</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container maxWidth="sm">
          <Box
            component="form"
            onSubmit={type === 'signup' ? signUpHandler : signInHandler}
            sx={style}
          >
            <h2>Welcome</h2>
            {type === 'signup' && (
              <TextField
                sx={{ m: 1, width: '30ch' }}
                margin="normal"
                name="name"
                label="Name"
                placeholder="Enter your name"
                variant="outlined"
                InputProps={{
                  sx: {
                    borderRadius: '20px',
                  },
                }}
              />
            )}
            <TextField
              sx={{ m: 1, width: '30ch' }}
              margin="normal"
              name="email"
              label="Email address"
              type="email"
              placeholder="name@example.com"
              variant="outlined"
              InputProps={{
                sx: {
                  borderRadius: '20px',
                },
              }}
            />
            <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                sx={{
                  borderRadius: '20px',
                }}
              />
            </FormControl>
            <Button
              sx={{
                m: 1,
                width: '30ch',
                borderRadius: '20px',
              }}
              variant="outlined"
            >
              Войти через Google
            </Button>
            <Button
              sx={{
                m: 1,
                width: '30ch',
                borderRadius: '20px',
              }}
              variant="outlined"
              type="submit"
              onClick={handleClose} // Добавлен обработчик для закрытия модального окна
            >
              Войти
            </Button>
          </Box>
        </Container>
      </Modal>
    </>
  );
}
