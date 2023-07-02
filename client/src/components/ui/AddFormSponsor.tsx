import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import { useAppDispatch } from '../../features/redux/reduxHooks';
import useSponsorHook from '../../hooks/useSponsorHook';
import type { SponsorFormType } from '../../types';

type AddFormSponsorProps = {
  setOpen: boolean;
  eventId: number;
};

export default function AddFormSponsor({ setOpen, eventId }: AddFormSponsorProps): JSX.Element {
  const dispatch = useAppDispatch();

  const { addHandler } = useSponsorHook();

  const [value, setValue] = useState('');

  const handlerClose = (): void => {
    setOpen(false);
  };

  return (
    <Box
      component="form"
      onSubmit={(e: React.FormEvent<HTMLFormElement & SponsorFormType>) => addHandler(e, eventId)}
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
      <TextField name="email" label="email" type="email" defaultValue="abibas@abibas.ru" required />
      <TextField name="file" type="file" required />

      <Button type="submit" variant="contained" onClick={handlerClose}>
        Стать спонсором
      </Button>
    </Box>
  );
}
