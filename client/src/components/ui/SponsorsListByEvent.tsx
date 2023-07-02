import React, { useEffect, useState } from 'react';

import { Container } from '@mui/system';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import type { SponsorType } from '../../types';
import SponsorsOneByEvent from './SponsorsOneByEvent';
import { useAppDispatch, useAppSelector } from '../../features/redux/reduxHooks';
import { getSponsorsExistEventThunk } from '../../features/thunkActions';

export default function SponsorsListByEvent(): JSX.Element {
  const event = useAppSelector((state) => state.events.event);
  const sponsors = useAppSelector((state) => state.sponsors.data);
  const dispatch = useAppDispatch();

  //   useEffect(() => {
  //     void dispatch(getSponsorsExistEventThunk(event.id));
  //   }, []);

  //   console.log('sponsors-->', sponsors);

  return (
    <Container>
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
        />
        <Grid container spacing={3}>
          {sponsors?.map((sponsor) => (
            <Grid item key={sponsor.id} xs={12} sm={6} md={4}>
              <SponsorsOneByEvent sponsor={sponsor} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
}
