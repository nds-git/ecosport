import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { useAppSelector } from '../../features/redux/reduxHooks';

import useEventHook from '../../hooks/useEventHook';
import MainPageEventItem from './MainPageEventItem';

export default function AllEventList(): JSX.Element {
  useEventHook();

  const events = useAppSelector((state) => state.events);
  console.log('-->', events.data);

  return (
    <Grid container spacing={3}>
      {events.data.map((event) => (
        <Grid item key={event.id} xs={12} sm={6} md={4}>
          <MainPageEventItem event={event} />
        </Grid>
      ))}
    </Grid>
  );
}
