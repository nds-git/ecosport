// import React, { useState } from 'react';
// import {
//   Box,
//   Button,
//   Container,
//   FormControl,
//   IconButton,
//   InputAdornment,
//   InputLabel,
//   Modal,
//   OutlinedInput,
//   TextField,
// } from '@mui/material';
// import { Google, Visibility, VisibilityOff } from '@mui/icons-material';
// import { useParams } from 'react-router-dom';
// import { useForm, Controller } from 'react-hook-form';
// import ColorTabs from './ColorTab';
// import { useAppDispatch, useAppSelector } from '../../../features/redux/reduxHooks';
// import useFormHook from '../../../hooks/useFormHook';
// import { closeModal } from '../../../features/redux/slices/modalSlice';

// export default function AuthModal(): JSX.Element {
//   const dispatch = useAppDispatch();
//   const modalOpen = useAppSelector((state) => state.modal.isOpen);
//   const type = useAppSelector((state) => state.modal.modalType);

//   const [showPassword, setShowPassword] = React.useState(false);

//   const handleClose = (): void => {
//     dispatch(closeModal());
//   };

//   const handleClickShowPassword = (): void => setShowPassword((show) => !show);

//   const handleSubmitForm = async (data: any) => {
//     type === 'signup' ? signUpHandler : signInHandler;
//   };

//   const { signInHandler, signUpHandler } = useFormHook();

//   // const style = {
//   //   position: 'absolute',
//   //   top: '50%',
//   //   left: '50%',
//   //   transform: 'translate(-50%, -50%)',
//   //   width: 400,
//   //   maxWidth: '90%',
//   //   padding: '2rem',
//   //   backgroundColor: '#fff',

//   // };

//   return (
//     <Modal
//       open={modalOpen}
//       onClose={handleClose}
//       aria-labelledby="modal-modal-title"
//       aria-describedby="modal-modal-description"
//       style={{
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}
//     >
//       <Container maxWidth="xs">
//         <Box
//           component="form"
//           onSubmit={type === 'signup' ? signUpHandler : signInHandler}
//           sx={{
//             // ...style,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             justifyContent: 'center',
//             backgroundColor: '#fff', 
//             padding: '2rem', 
//             borderRadius: '8px',
//             animation: 'modalFadeIn 0.4s forwards', 
//           }}
//         >
//           {/* <ColorTabs /> */}
//           <h2>Welcome</h2>
//           {type === 'signup' && (
//             <TextField
//               sx={{ m: 1, width: '30ch' }}
//               margin="normal"
//               name="name"
//               label="Name"
//               placeholder="Enter your name"
//               variant="outlined"
//               InputProps={{
//                 sx: {
//                   borderRadius: '20px',
//                 },
//               }}
//             />
//           )}
//           <TextField
//             sx={{ m: 1, width: '30ch' }}
//             margin="normal"
//             name="email"
//             label="Email address"
//             type="email"
//             placeholder="name@example.com"
//             variant="outlined"
//             InputProps={{
//               sx: {
//                 borderRadius: '20px',
//               },
//             }}
//           />
//           <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
//             <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
//             <OutlinedInput
//               id="outlined-adornment-password"
//               name="password"
//               type={showPassword ? 'text' : 'password'}
//               endAdornment={
//                 <InputAdornment position="end">
//                   <IconButton
//                     aria-label="toggle password visibility"
//                     onClick={handleClickShowPassword}
//                     edge="end"
//                   >
//                     {showPassword ? <VisibilityOff /> : <Visibility />}
//                   </IconButton>
//                 </InputAdornment>
//               }
//               label="Password"
//               sx={{
//                 borderRadius: '20px',
//               }}
//             />
//           </FormControl>
//           <Button
//             sx={{
//               m: 1,
//               width: '30ch',
//               borderRadius: '20px',
//             }}
//             startIcon={<Google />}
//             variant="outlined"
//           >
//             Войти через Google
//           </Button>
//           <Button
//             sx={{
//               m: 1,
//               width: '30ch',
//               borderRadius: '20px',
//             }}
//             variant="outlined"
//             type="submit"
//             // onClick={}
//           >
//             Войти
//           </Button>
//         </Box>
//       </Container>
//     </Modal>
//   );
// }

import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Modal,
  OutlinedInput,
  TextField,
} from '@mui/material';
import { Google, Visibility, VisibilityOff } from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import ColorTabs from './ColorTab';
import { useAppDispatch, useAppSelector } from '../../../features/redux/reduxHooks';
import useFormHook from '../../../hooks/useFormHook';
import { closeModal } from '../../../features/redux/slices/modalSlice';
import { css, keyframes } from '@emotion/react';


const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;


export default function AuthModal(): JSX.Element {
  const dispatch = useAppDispatch();
  const modalOpen = useAppSelector((state) => state.modal.isOpen);
  const type = useAppSelector((state) => state.modal.modalType);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClose = (): void => {
    dispatch(closeModal());
  };

  const handleClickShowPassword = (): void => setShowPassword((show) => !show);

  const handleSubmitForm = async (data: any) => {
    type === 'signup' ? signUpHandler : signInHandler
  };

  const { signInHandler, signUpHandler } = useFormHook();

  return (
    <Modal
      open={modalOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{ 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="xs">
        <Box
          component="form"
          onSubmit={type === 'signup' ? signUpHandler : signInHandler}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            padding: '2rem',
            animation: `${fadeIn} 0.4s forwards`,
            borderRadius: '8px',
          }}
        >
          {/* <ColorTabs /> */}
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
            startIcon={<Google />}
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
            // onClick={}
          >
            Войти
          </Button>
        </Box>
      </Container>
    </Modal>
  );
}

