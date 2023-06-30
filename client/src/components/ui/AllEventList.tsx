import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../features/redux/reduxHooks';

import useEventHook from '../../hooks/useEventHook';
import MainPageEventItem from './MainPageEventItem';
import { getAllEventToMainPageThunk } from '../../features/thunkActions/eventThunkActions';

export default function AllEventList(): JSX.Element {
  // useEventHook();
  const dispatch = useAppDispatch();
    useEffect(() => {
    void dispatch(getAllEventToMainPageThunk());
    
  }, []);

  const events = useAppSelector((state) => state.events);

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
