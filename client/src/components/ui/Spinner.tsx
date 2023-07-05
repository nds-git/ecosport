import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function Spinner({progress, label}): JSX.Element {
  return (
    <Box sx={{ width: '100%' }}>
      <h1>{label}</h1>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
}
