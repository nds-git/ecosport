import React from 'react';
import { Grid } from '@mui/material';
import { useAppSelector } from '../../features/redux/reduxHooks';
import EventItem from './EventItem';
import useEventHook from '../../hooks/useEventHook';

export default function EventList(): JSX.Element {
  const events = useAppSelector((state) => state.events);
  
  return (
    <Grid container spacing={3}>
      {events.data.map((event) => (
        <Grid item key={event.id} xs={12} sm={6} md={4}>
          <EventItem event={event} />
        </Grid>
      ))}
    </Grid>
  );
}
