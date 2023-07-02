import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';
import type { SponsorType } from '../../types';

type SponsorsOneByEventProps = {
  sponsor: SponsorType;
};

export default function SponsorsOneByEvent({ sponsor }: SponsorsOneByEventProps): JSX.Element {
  return (
    <div>
      {' '}
      <Card sx={{ maxWidth: 245, m: 2 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={`http://localhost:3001/img/sponsors/${sponsor.logo}`}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {sponsor.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {sponsor.body}
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button size="small">Share</Button>
          <Button size="small">Learn More</Button> */}
        </CardActions>
      </Card>
    </div>
  );
}
