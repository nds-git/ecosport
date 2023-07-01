import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Container } from '@mui/system';
import type { EventType } from '../../types';

export type EventProps = {
  event: EventType;
};

export default function MainPageEventItem({ event }: EventProps): JSX.Element {
  return (
    <Container>
      <Card sx={{ maxWidth: 345 }}>
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
          <Link to={`./events/${event.id}`}>
            <Button color="success" variant="contained" sx={{ marginLeft: 1 }} size="small">
              Посмотреть
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Container>
  );
}
