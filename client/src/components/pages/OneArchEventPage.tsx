import React, { useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import { CardContent, Container, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '../../features/redux/reduxHooks';
import { getOneArchEventThunk } from '../../features/thunkActions/eventThunkActions';
import { getEventDate } from '../functions';

export default function OneArchEventPage(): JSX.Element {
  const { id } = useParams();
  const event = useAppSelector((state) => state.events.oneArchiveData);
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(getOneArchEventThunk(Number(id)));
  }, []);
  const eventDate = getEventDate(event?.date);
  return (
    <Container sx={{ mb: '2rem' }}>
      <Carousel navButtonsAlwaysVisible interval={2000}>
        {event?.FotoEvents?.map((el) => (
          <img
            style={{ paddingLeft: '10rem' }}
            height={500}
            key={el.id}
            src={`http://localhost:3001/img/${el.img}`}
            alt="text"
          />
        ))}
      </Carousel>
      <motion.div initial={{ x: '-90vw' }} animate={{ x: 0 }} transition={{ duration: 0.6 }}>
        <CardContent>
          <Typography variant="h4" component="h4">
            {event?.title}
          </Typography>
          <Typography paragraph>
            <b>Дата:</b> {eventDate}
          </Typography>
          <Typography paragraph>
            <b>Количество участников:</b> {event?.count_user} чел.
          </Typography>
          <Typography paragraph>
            <b>Количество собранного мусора:</b> {event?.garbage} кг.
          </Typography>
        </CardContent>
      </motion.div>
    </Container>
  );
}
