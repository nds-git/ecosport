import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import GetGeo from './GetGeo';

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

export default function Point(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);
  return (
    <>
      <Button onClick={handleOpen} variant="contained" endIcon={<AdsClickIcon />}>
        Точка сбора
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Поставьте точку
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <GetGeo />
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
