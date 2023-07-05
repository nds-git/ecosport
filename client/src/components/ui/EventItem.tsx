import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { EventType } from '../../types';
import ModalEdit from './ModalEdit';
import ModalGarbage from './ModalGarbage';
import { getEventDate } from '../functions';

export type EventProps = {
  event: EventType;
};

export default function EventItem({ event }: EventProps): JSX.Element {
  const eventDate = getEventDate(event.date);
  return (
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
            {event.body}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {eventDate}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {event.time}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {event.geo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {event.count_user}
          </Typography>
        </CardContent>
        <CardActions>
          <ModalEdit event={event} />
          <ModalGarbage event={event}/>
          <Link to={`/events/${event.id}`}>
            <Button size="small" variant="text" color="primary" sx={{ marginLeft: 1 }}>
              Подробнее
            </Button>
          </Link>
        </CardActions>
      </motion.div>
    </Card>
  );
}
