import type { FormEvent } from 'react';
import React, { useState } from 'react';
import { Box, Button, TextField, Container, Modal } from '@mui/material';

import '../css/auth.css';
import useFormHook from '../../hooks/useFormHook';

type FormFieldProps = {
  name: string;
  label: string;
  type?: string;
  placeholder: string;
};

function FormField({ name, label, type = 'text', placeholder }: FormFieldProps): JSX.Element {
  return (
    <TextField
      sx={{ m: 1, width: '30ch' }}
      margin="normal"
      name={name}
      label={label}
      type={type}
      placeholder={placeholder}
      variant="outlined"
      InputProps={{ sx: { borderRadius: '20px' } }}
    />
  );
}

export default function UserAuthModal(): JSX.Element {
  const [open, setOpen] = useState(false);
  const [subscribers, setSubscribers] = useState(0);
  const maxSubscribers = 5;

  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);

  const {subscriberHandler} = useFormHook()

  const handleConfirm = (e: FormEvent): void => {

    e.preventDefault();

    setSubscribers(subscribers + 1);
    handleClose();
  };

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

  return (
    <>
    
      <Button
        color={subscribers >= maxSubscribers ? 'error' : 'success'}
        variant="contained"
        sx={{ marginLeft: 1 }}
        size="small"
        onClick={handleOpen}
        disabled={subscribers >= maxSubscribers}
      >
        Я пойду ({subscribers})
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
      >
        <Container maxWidth="sm">
          <Box
            component="form"
            sx={{
              ...style,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onSubmit={subscriberHandler}
          >
            <h2>Регистрация на событие</h2>

            <FormField name="name" label="Name" placeholder="Enter your name" />
            <FormField
              name="email"
              label="Email address"
              type="email"
              placeholder="name@example.com"
            />
            <FormField
              name="phone_number"
              label="phone number"
              placeholder="Enter your phone number"
            />

            <Button
              sx={{ m: 1, width: '30ch', borderRadius: '20px' }}
              variant="outlined"
              type="submit"
            >
              Подтвердить
            </Button>
          </Box>
        </Container>
      </Modal>
    </>
  );
}
