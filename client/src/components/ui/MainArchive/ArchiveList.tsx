import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import { useAppDispatch, useAppSelector } from '../../../features/redux/reduxHooks';
import { getMainPageArchiveEventThunk } from '../../../features/thunkActions/eventThunkActions';
import ArchiveItem from './ArchiveItem';

export default function ArchiveList(): JSX.Element {
  const events = useAppSelector((state) => state.events);
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(getMainPageArchiveEventThunk());
  }, []);
  return (
    <Container>
      <h2>Тройка архивных событий</h2>
      <Grid container spacing={3}>
        {events.data.map((event) => (
          <Grid item key={event.id} xs={12} sm={6} md={4}>
            <ArchiveItem event={event} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
