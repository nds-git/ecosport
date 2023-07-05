import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Container, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import useEventHook from '../../hooks/useEventHook';
import type { EventFormType } from '../../types';
import { useAppSelector } from '../../features/redux/reduxHooks';
import Point from './Point';
import { motion } from 'framer-motion';

export default function ModalEventCreate(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = (): void => {
    setOpen(true);
  };
  const handleClose = (): void => {
    setOpen(false);
  };

  const { addHandler } = useEventHook();

  const [geo, setGeo] = useState('');
  const [address, setAddress] = useState('');
  const coordinate = useAppSelector((state) => state.eventCreate);
  const changeGeo = (): void => {
    setGeo(coordinate.geo.join(' '));
  };
  const changeAddress = (): void => {
    setAddress(coordinate.address || '');
  };

  useEffect(() => changeGeo(), [coordinate]);
  useEffect(() => changeAddress(), [coordinate]);
  return (
    <Container sx={{ mb: '2rem' }}>
      <motion.div
        initial={{y: -300}}
        animate={{y: 0}}
        transition={{duration: 1}}
        whileHover={{scale: 1.1}}
      >
      <Button
        sx={{ padding: 2 }}
        variant="contained"
        onClick={handleClickOpen}
        endIcon={<AddCircleOutlineIcon />}
      >
        Создать событие
      </Button>
      </motion.div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Создай свое событие</DialogTitle>
        <DialogContent>
          <DialogContentText>Заполните, пожалуйста, все поля</DialogContentText>
          <Box
            component="form"
            onSubmit={(e: React.FormEvent<HTMLFormElement & EventFormType>) => {
              addHandler(e);
              setOpen(false);
            }}
            sx={{
              '& .MuiTextField-root': { m: 1, width: '27rem', marginLeft: 8 },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField name="title" label="Название события" type="text" required />
            </div>
            <div>
              <TextField
                name="body"
                label="Введите подробное описание"
                multiline
                rows={4}
                required
              />
            </div>
            <div>
              <TextField name="date" type="date" required />
            </div>
            <div>
              <TextField name="time" type="time" required />
            </div>
            <div>
              <Point />
              <TextField
                name="geo"
                label="Координаты"
                type="text"
                onChange={() => changeGeo}
                value={geo}
                required
              />
            </div>
            <TextField
              name="address"
              label="Адрес"
              onChange={() => changeAddress}
              type="text"
              required
              value={address}
            />
            <div>
              <TextField
                name="count_user"
                label="Максимальное количество участников"
                type="number"
                required
              />
            </div>
            <div>
              <Button endIcon={<AddAPhotoIcon />} variant="outlined" sx={{ marginLeft: 8 }}>
                <Typography component="label" htmlFor="filePicker">
                  Изображение
                </Typography>
              </Button>
              <TextField
                id="filePicker"
                sx={{ visibility: 'hidden' }}
                name="file"
                type="file"
                InputProps={{
                  inputProps: {
                    multiple: true,
                    accept: '.jpg,.jpeg,.png',
                  },
                }}
              />
            </div>
            <DialogActions>
              <Button onClick={handleClose}>Отменить</Button>
              <Button variant='contained' type="submit">Сохранить</Button>
            </DialogActions>
          </Box>
        </DialogContent>
      </Dialog>
    </Container>
  );
}
