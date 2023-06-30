import React, { useState, useEffect, useMemo } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import useEventHook from '../../hooks/useEventHook';
import Point from './Point';
import { useAppSelector } from '../../features/redux/reduxHooks';
import type { EventCoordType } from '../../types';

export default function EventForm(): JSX.Element {
  const { addHandler } = useEventHook();

  const [value, setValue] = useState('');

  const coordinate = useAppSelector((state) => state.eventCreate);

  const changeGeo = (): void => {
    setValue(coordinate.geo.join(' '));
    console.log('did update', value);
  };

  useEffect(() => changeGeo(), [coordinate]);

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
      <Point />

      <TextField
        name="geo"
        label="Geo"
        onChange={() => changeGeo}
        type="text"
        required
        value={value}
      />

      <TextField name="count_user" label="CountUser" type="number" required />
      <TextField name="file" type="file" required />

      <Button type="submit" variant="contained">
        Submit
      </Button>
    </Box>
  );
}
