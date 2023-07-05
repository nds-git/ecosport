import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { Container, Typography } from '@mui/material';

export default function Spinner({ progress, label }): JSX.Element {
  return (
    <Container>
      <Box sx={{ width: '100%' }}>
        <Typography color="green" variant="h6">
          {label}
        </Typography>
        <LinearProgress variant="determinate" value={progress} />
      </Box>
    </Container>
  );
}
