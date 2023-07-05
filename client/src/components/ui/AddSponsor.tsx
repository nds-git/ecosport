import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Box, Container } from '@mui/system';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import { Backdrop, Fade, Paper } from '@mui/material';
import useSponsorHook from '../../hooks/useSponsorHook';
import AddFormSponsor from './AddFormSponsor';
import type { EventType } from '../../types';
import { css, keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

type AddSponsorProps = {
  eventId: EventType['id'];
};

export default function AddSponsor({ eventId }: AddSponsorProps): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);

  const handleBackdropClick = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  return (
    <Box>
      <Button type="submit" variant="contained" onClick={handleOpen}>
        Стать спонсором
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Fade in={open}>
          <Container maxWidth="xs">
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff',
                padding: '2rem',
                animation: `${fadeIn} 0.4s forwards`,
                borderRadius: '8px',
              }}
              onClick={handleBackdropClick}
            >
              <Typography id="modal-modal-title" variant="h6" component="h2" textAlign="center">
                Стать спонсором
              </Typography>
              <AddFormSponsor setOpen={setOpen} />
            </Box>
          </Container>
        </Fade>
      </Modal>
    </Box>
  );
}
