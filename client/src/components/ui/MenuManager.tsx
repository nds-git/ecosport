import React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function MenuManager(): JSX.Element {
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper', marginBottom: 2 }}>
      <Button>
        <Link to="/account">Account</Link>
      </Button>
      <Button>
        <Link to="/archive">Archive</Link>
      </Button>
      <Button>
        <Link to="/archive">Sponsor</Link>
      </Button>
    </Box>
  );
}
