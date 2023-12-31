import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import { useAppDispatch, useAppSelector } from '../../../features/redux/reduxHooks';
import { getMainPageArchiveEventThunk } from '../../../features/thunkActions/eventThunkActions';
import MainArchiveItem from './MainArchiveItem';

export default function MainArchiveList(): JSX.Element {
  const events = useAppSelector((state) => state.events.mainArchiveData);
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(getMainPageArchiveEventThunk());
  }, []);
  return (
    <Container sx={{ mb: '2rem', mt: '5rem', fontFamily: 'FuturaBookC' }}>
      <h2>Архив мероприятий</h2>
      <Grid container spacing={3}>
        {events.map((event) => (
          <Grid item key={event.id} xs={12} sm={6} md={4}>
            <MainArchiveItem event={event} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
