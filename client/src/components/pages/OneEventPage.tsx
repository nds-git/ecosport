import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import type { IconButtonProps } from '@mui/material/IconButton';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/system';
import { useAppDispatch, useAppSelector } from '../../features/redux/reduxHooks';
import { getOneEventThunk } from '../../features/thunkActions/eventThunkActions';
import useEventHook from '../../hooks/useEventHook';
import AddSponsor from '../ui/AddSponsor';
import { getSponsorsExistEventThunk } from '../../features/thunkActions';
import type { SponsorType } from '../../types';
import SponsorsListByEvent from '../ui/SponsorsListByEvent';
import MapPage from './MapPage';

type ExpandMoreProps = {
  expand: boolean;
} & IconButtonProps;

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function OneEventPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    void dispatch(getOneEventThunk(id));
  }, []);

  const event = useAppSelector((state) => state.events.event);

  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Container>
        <Card sx={{ maxWidth: 1000 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={event.title}
            subheader={`Место: ${event.geo}`}
          />
          <CardMedia
            component="img"
            height="480"
            image={`http://localhost:3001/img/${event.img}`}
            alt="Paella dish"
          />
          <Box sx={{ m: 1 }}>
            <AddSponsor eventId={event.id} />
          </Box>
          <CardContent>
            <IconButton aria-label="share">
              {/* <ShareIcon /> */}
              <Typography paragraph> Полный адрес: {event.address}</Typography>
            </IconButton>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Typography paragraph>Дата: {event.date}</Typography>
            </IconButton>
            <IconButton aria-label="add to favorites">
              <Typography paragraph>Количество участников: {event.count_user}</Typography>
            </IconButton>
            <IconButton aria-label="share">
              {/* <ShareIcon /> */}
              <Typography paragraph> Время: {event.time}</Typography>
            </IconButton>
            <IconButton aria-label="share">
              {/* <ShareIcon /> */}
              <Typography paragraph> Полный адрес: {event.address}</Typography>
            </IconButton>

            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Описание:</Typography>
              <Typography paragraph>{event.title}</Typography>
              <Typography paragraph>{event.body}</Typography>
              {/* <Typography paragraph>
                Add rice and stir very gently to distribute. Top with artichokes and peppers, and
                cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes.
                Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into
                the rice, and cook again without stirring, until mussels have opened and rice is
                just tender, 5 to 7 minutes more. (Discard any mussels that don&apos;t open.)
              </Typography> */}
              <Typography>
                <MapPage geo={event.geo} />
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Container>
      <SponsorsListByEvent />
    </>
  );
}
