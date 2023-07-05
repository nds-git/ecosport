import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import { useAppDispatch, useAppSelector } from '../../../features/redux/reduxHooks';
import { getTopThreeArchiveEventThunk } from '../../../features/thunkActions/eventThunkActions';
import ArchiveTopItem from './ArchiveTopItem';

export default function ArchiveTopList(): JSX.Element {
  const events = useAppSelector((state) => state.events.topArchiveData);
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(getTopThreeArchiveEventThunk());
  }, []);
  return (
    <Container sx={{ mb: '2rem', mt: '5rem', fontFamily: 'FuturaFuturisC' }}>
      <h2>ТОП-3 лучших событий</h2>
      <Grid container spacing={3}>
        {events.map((event) => (
          <Grid item key={event.id} xs={12} sm={6} md={4}>
            <ArchiveTopItem event={event} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
