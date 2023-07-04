import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import { useAppDispatch, useAppSelector } from '../../features/redux/reduxHooks';

import useEventHook from '../../hooks/useEventHook';
import MainPageEventItem from './MainPageEventItem';
import { getAllEventToMainPageThunk } from '../../features/thunkActions/eventThunkActions';

export default function AllEventList(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(getAllEventToMainPageThunk());
  }, []);
  const events = useAppSelector((state) => state.events.data);
  console.log('AlleventsLIST', events);

  return (
    <Container>
      <Box
        component="div"
        sx={{
          width: '100%',
          height: '100%',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Grid container spacing={3}>
          {events.map((event) => (
            <Grid item key={event.id} xs={12} sm={6} md={4}>
              <MainPageEventItem event={event} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
