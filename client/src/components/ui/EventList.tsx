import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../features/redux/reduxHooks';
import EventItem from './EventItem';
import useEventHook from '../../hooks/useEventHook';
import { getAllEventThunk } from '../../features/thunkActions/eventThunkActions';

export default function EventList(): JSX.Element {
  const events = useAppSelector((state) => state.events);
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(getAllEventThunk());
  }, []);

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
