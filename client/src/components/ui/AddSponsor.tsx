import React, { useState } from 'react';
import { Button } from '@mui/base';
import { TextField } from '@mui/material';
import { Box, Container } from '@mui/system';
import useSponsorHook from '../../hooks/useSponsorHook';

export default function AddSponsor(): JSX.Element {
  const { addHandler } = useSponsorHook();
  const [value, setValue] = useState('');

  return (
    <Container>
      <Box
        component="form"
        onSubmit={addHandler}
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField name="title" label="Title" placeholder="Title" required />
        <TextField name="name" label="Name" placeholder="Name" required />
        <TextField name="body" label="Body" placeholder="Body" required />
        <TextField name="message" label="Message" type="message" required />
        <TextField name="email" label="email" type="email" required />
        <TextField name="file" type="file" required />

        <Button type="submit" variant="contained">
          Стать спонсором
        </Button>
      </Box>
    </Container>
  );
}
