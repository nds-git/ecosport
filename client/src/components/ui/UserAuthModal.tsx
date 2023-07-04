import type { FormEvent } from 'react';
import React, { useEffect, useState } from 'react';
import { Box, Button, TextField, Container, Modal } from '@mui/material';

import '../css/auth.css';
import useFormHook from '../../hooks/useFormHook';
import { useAppSelector } from '../../features/redux/reduxHooks';
import { useNavigate } from 'react-router-dom';

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
type UserAuthModalProps = {
  eventId: number;
};

export default function UserAuthModal({ eventId }: UserAuthModalProps): JSX.Element {
  const eventData = useAppSelector((state) =>
    state.events.rows?.rows?.find((event) => event.id === eventId),
  );
  console.log(eventData);

  const count = eventData ? eventData.subscribe : 0;

  const maxSubscribers = eventData ? eventData.count_user : 0;

  const remainingSubscribers = maxSubscribers - count;

  const userStatus = useAppSelector((state) => state.user.status);

  const [open, setOpen] = useState(false);

  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);

  const { subscriberHandler } = useFormHook();

  const handleConfirm = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

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
        variant="contained"
        sx={{ marginLeft: 1 }}
        size="small"
        onClick={handleOpen}
        // disabled={count >= maxSubscribers}
      >
        Я пойду ({count} / {remainingSubscribers})
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
            <input name="event_id" label="eventId" value={eventId} style={{ display: 'none' }} />
            <FormField name="name" label="Name" placeholder="Enter your name" />
            <FormField
              name="email"
              label="Email address"
              type="email"
              placeholder="name@example.com"
            />
            <FormField name="phone" label="phone number" placeholder="Enter your phone number" />

            <Button
              sx={{ m: 1, width: '30ch', borderRadius: '20px' }}
              variant="outlined"
              type="submit"
              // onClick={handleConfirm}
            >
              Подтвердить
            </Button>
          </Box>
        </Container>
      </Modal>
    </>
  );
}
