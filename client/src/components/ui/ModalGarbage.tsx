import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Typography } from '@mui/material';
import type { EventFormType, EventType } from '../../types';
import useEventHook from '../../hooks/useEventHook';

type ModalEventProps = {
  event: EventType;
};

export default function ModalGarbage({ event }: ModalEventProps): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = (): void => {
    setOpen(true);
  };
  const handleClose = (): void => {
    setOpen(false);
  };
  const { archiveHandler } = useEventHook();

  return (
    <div>
      <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        Архив
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Количество мусора</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Перед тем как отправить событие в архив, укажите, пожалуйста, сколько килограмм мусора
            вам удалось собрать и фото с мероприятия
          </DialogContentText>
          <Box
            component="form"
            onSubmit={(e: React.FormEvent<HTMLFormElement & EventFormType>) =>
              archiveHandler(e, event.id)
            }
            sx={{
              '& .MuiTextField-root': { m: 1, width: '15rem', marginLeft: 8 },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField id="outlined-multiline-flexible" name="garbage" label="kg" type="number" />
            </div>
            <div>
              <Button variant="contained" sx={{ marginLeft: 8 }}>
                <Typography component="label" htmlFor="filePicker">
                  Добавить фотографии
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
              <Button onClick={handleClose}>Отмена</Button>
              <Button type="submit">Сохранить</Button>
            </DialogActions>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}
