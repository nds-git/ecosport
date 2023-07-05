import React from 'react';
import Box from '@mui/material/Box';
import { Button, Container, ButtonGroup } from '@mui/material';
import { Link } from 'react-router-dom';
import ModalEventCreate from './ModalEventCreate';
import InventoryIcon from '@mui/icons-material/Inventory';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';

export default function MenuManager(): JSX.Element {
  return (
    <Container>
      <Box       sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        '& > *': {
          m: 1,
        },
      }}>
      <ButtonGroup variant="text" aria-label="text button group">
        <Link to="/account">
          <Button endIcon={<SwitchAccountIcon />}>Посты</Button>
        </Link>
        <Link to="/archive">
          <Button endIcon={<InventoryIcon />} >Архив</Button>
        </Link>
      <ModalEventCreate />
      </ButtonGroup>
      </Box>
    </Container>
  );
}
