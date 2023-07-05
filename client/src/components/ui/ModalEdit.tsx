import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import useEventHook from '../../hooks/useEventHook';
import type { EventFormType, EventType } from '../../types';

type ModalEventProps = {
  event: EventType;
};

export default function ModalEdit({ event }: ModalEventProps): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = (): void => {
    setOpen(true);
  };
  const handleClose = (): void => {
    setOpen(false);
  };

  const { updateHandler } = useEventHook();
  return (
    <div>
      <Button variant="text" color="success" onClick={handleClickOpen}>
        <EditIcon />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Изменение события</DialogTitle>
        <DialogContent>
          <DialogContentText>Заполните, пожалуйста, все поля</DialogContentText>
          <Box
            component="form"
            onSubmit={(e: React.FormEvent<HTMLFormElement & EventFormType>) => {
              updateHandler(e, event.id);
              setOpen(false);
            }}
            sx={{
              '& .MuiTextField-root': { m: 1, width: '27rem', marginLeft: 8 },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                name="title"
                label="Название события"
                type="text"
                required
                defaultValue={event.title}
              />
            </div>
            <div>
              <TextField
                name="body"
                label="Введите подробное описание"
                multiline
                rows={4}
                required
                defaultValue={event.body}
              />
            </div>
            <div>
              <TextField name="date" type="date" required defaultValue={event.date} />
            </div>
            <div>
              <TextField name="time" type="time" required defaultValue={event.time} />
            </div>
            <div>
              <TextField
                name="geo"
                label="Координаты"
                type="text"
                required
                defaultValue={event.geo}
              />
            </div>
            <TextField
              name="address"
              label="Адрес"
              type="text"
              required
              defaultValue={event.address}
            />
            <div>
              <TextField
                name="count_user"
                label="Максимальное количество участников"
                type="number"
                required
                defaultValue={event.count_user}
              />
            </div>
            <DialogActions>
              <Button onClick={handleClose}>Отменить</Button>
              <Button type="submit">Сохранить</Button>
            </DialogActions>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}
