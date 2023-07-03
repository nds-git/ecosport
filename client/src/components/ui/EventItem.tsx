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
import useEventHook from '../../hooks/useEventHook';
import ModalEdit from './ModalEdit';
import ModalGarbage from './ModalGarbage';

export type EventProps = {
  event: EventType;
};

export default function EventItem({ event }: EventProps): JSX.Element {
  return (
    <Card sx={{ maxWidth: 345 }}>
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
            {event.date}
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
          <Link to={`/events/${event.id}`}>
            <Button size="small" variant="contained" color="secondary" sx={{ marginLeft: 1 }}>
              More Info
            </Button>
          </Link>
          <ModalGarbage event={event}/>
        </CardActions>
      </motion.div>
    </Card>
  );
}
