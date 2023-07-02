import React, { useState } from 'react';
import { Button } from '@mui/base';
import { Box, Container } from '@mui/system';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import { Paper } from '@mui/material';
import useSponsorHook from '../../hooks/useSponsorHook';
import AddFormSponsor from './AddFormSponsor';
import type { EventType } from '../../types';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 650,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type AddSponsorProps = {
  eventId: EventType['id'];
};

export default function AddSponsor({ eventId }: AddSponsorProps): JSX.Element {
  const [open, setOpen] = useState(false);
  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);

  return (
    <Container>
      <Button onClick={handleOpen} variant="contained" endIcon={<AdsClickIcon />}>
        Стать спонсором
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Стать спонсором
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <AddFormSponsor eventId={eventId} setOpen={setOpen} />
          </Typography>
        </Box>
      </Modal>
    </Container>
  );
}
