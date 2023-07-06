import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Container } from '@mui/system';
import { motion } from 'framer-motion';
import type { EventType } from '../../types';
import UserAuthModal from './UserAuthModal';
import { getEventDate } from '../functions';

export type EventProps = {
  event: EventType;
};

export default function MainPageEventItem({ event }: EventProps): JSX.Element {
  const eventDate = getEventDate(event.date);
  return (
    <Container>
      <Card sx={{ maxWidth: 345, height: '100%' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <CardMedia sx={{ height: 140 }} image={`http://localhost:3001/img/${event.img}`} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {event.title}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              <b>Дата </b>
              {eventDate} &nbsp;
              <b>Время: </b>
              {event.time}
            </Typography>
            <Typography mt={1} variant="body2" color="text.secondary">
              <b>Адрес:</b>

              {event.address}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {event.count_user}
            </Typography>
          </CardContent>
          <CardActions>
            <Link to={`./events/${event.id}`}>
              <Button color="success" variant="contained" sx={{ marginLeft: 1 }} size="small">
                Посмотреть
              </Button>
            </Link>
            <UserAuthModal eventId={event.id} />
          </CardActions>
        </motion.div>
      </Card>
    </Container>
  );
}
