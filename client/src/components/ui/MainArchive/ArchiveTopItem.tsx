import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Container } from '@mui/system';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import type { EventProps } from '../EventItem';

export default function ArchiveTopItem({ event }: EventProps): JSX.Element {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={`http://localhost:3001/img/${event.img}`} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {event.title}
        </Typography>
        <EmojiEventsIcon />
        <Typography variant="body2" color="text.secondary">
          Количество собранного мусора: {event.garbage} кг
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`./events/archive/${event.id}`}>
          <Button color="primary" variant="contained" sx={{ marginLeft: 1 }} size="small">
            Подробнее
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
