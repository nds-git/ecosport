import React, { useState } from 'react';
import { Button } from '@mui/base';
import { Box, Container } from '@mui/system';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import { Backdrop, Fade, Paper } from '@mui/material';
import useSponsorHook from '../../hooks/useSponsorHook';
import AddFormSponsor from './AddFormSponsor';
import type { EventType } from '../../types';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type AddSponsorProps = {
  eventId: EventType['id'];
};

export default function AddSponsor({ eventId }: AddSponsorProps): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Стать спонсором</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Стать спонсором
            </Typography>

              <AddFormSponsor setOpen={setOpen} />
             
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
