import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import useEventHook from '../../hooks/useEventHook';

export default function EventForm(): JSX.Element {
  const { addHandler } = useEventHook();
  return (
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
      <TextField name="body" label="Body" placeholder="Body" required />
      <TextField name="date" label="Date" type="date" required />
      <TextField name="time" label="Time" type="time" required />
      <TextField name="geo" label="Geo" type="text" required />
      <TextField name="count_user" label="CountUser" type="number" required />
      <TextField name="file" type="file" required />
      {/* <InputLabel htmlFor="file-input">Выберите файл</InputLabel>
      <Input
        type="file"
      /> */}
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </Box>
  );
}
