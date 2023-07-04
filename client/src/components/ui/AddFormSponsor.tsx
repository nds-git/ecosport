import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Paper, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import { useAppDispatch, useAppSelector } from '../../features/redux/reduxHooks';
import useSponsorHook from '../../hooks/useSponsorHook';
import type { EventType, SponsorFormType } from '../../types';

type AddFormSponsorProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function AddFormSponsor({ setOpen }: AddFormSponsorProps): JSX.Element {
  const { addHandler } = useSponsorHook();

  const id = useAppSelector((state) => state.events.event.id);

  return (
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      <Box
        component="form"
        onSubmit={(e: React.FormEvent<HTMLFormElement & SponsorFormType>) => addHandler(e, id)}
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          name="title"
          label="Title"
          placeholder="Title"
          defaultValue="Abibas карабас"
          required
        />
        <TextField name="name" label="Name" placeholder="Name" defaultValue="Abibas" required />
        <TextField
          name="body"
          label="Body"
          placeholder="Body"
          defaultValue="никто кроме нас"
          required
        />
        <TextField
          name="message"
          label="Message"
          type="message"
          defaultValue="хочется стать спонсором"
          required
        />
        <TextField
          name="email"
          label="email"
          type="email"
          defaultValue="abibas@abibas.ru"
          required
        />
        <TextField name="file" type="file" required />

        <Button type="submit" variant="contained">
          Стать спонсором
        </Button>
      </Box>
    </Typography>
  );
}
