import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';
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
      <Button variant="contained" color="success" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update your post</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <Box
            component="form"
            onSubmit={(e: React.FormEvent<HTMLFormElement & EventFormType>) => {
              updateHandler(e, event.id)
              setOpen(false)}
            }
            sx={{
              '& .MuiTextField-root': { m: 1, width: '27rem', marginLeft: 8 },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                id="outlined-multiline-flexible"
                name="title"
                label="Title"
                type="text"
                multiline
                maxRows={4}
                defaultValue={event.title}
              />
            </div>
            <div>
            <TextField
              id="outlined-textarea"
              name="geo"
              label="geo"
              type="text"
              multiline
              defaultValue={event.geo}
            />
            </div>
            <div>
            <TextField
              id="outlined-textarea"
              name="date"
              label="date"
              type="date"
              multiline
              defaultValue={event.date}
            />
            </div>
            <div>
            <TextField
              id="outlined-textarea"
              name="time"
              label="time"
              type="time"
              multiline
              defaultValue={event.time}
            />
            </div>
            <div>
            <TextField
              id="outlined-textarea"
              name="count_user"
              label="count_user"
              type="number"
              multiline
              defaultValue={event.count_user}
            />
            </div>
 
            <div>
              <TextField
                id="outlined-multiline-static"
                name="body"
                label="Body"
                multiline
                rows={4}
                defaultValue={event.body}
              />
            </div>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit">Save</Button>
            </DialogActions>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}
