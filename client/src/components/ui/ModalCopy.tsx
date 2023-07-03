import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import useEventHook from '../../hooks/useEventHook';
import type { EventFormType, EventType } from '../../types';
import { useAppSelector } from '../../features/redux/reduxHooks';
import Point from './Point';

type ModalEventProps = {
  event: EventType;
};

export default function ModalCopy({ event }: ModalEventProps): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = (): void => {
    setOpen(true);
  };
  const handleClose = (): void => {
    setOpen(false);
  };

  const { addHandler } = useEventHook();

  const [value, setValue] = useState('');

  const coordinate = useAppSelector((state) => state.eventCreate);

  const changeGeo = (): void => {
    setValue(coordinate.geo.join(' '));
  };

  useEffect(() => changeGeo(), [coordinate]);
  return (
    <div>
      <Button variant="text" onClick={handleClickOpen}>
        <ContentCopyIcon />
        Copy
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Copy your post</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <Box
            component="form"
            onSubmit={(e: React.FormEvent<HTMLFormElement & EventFormType>) => {
              addHandler(e);
              setOpen(false);
              window.location.href = '/account';
            }}
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
                id="outlined-multiline-static"
                name="body"
                label="Body"
                multiline
                rows={4}
                defaultValue={event.body}
              />
            </div>
            <div>
              <TextField id="outlined-textarea" name="date" type="date" />
            </div>
            <div>
              <TextField id="outlined-textarea" name="time" type="time" />
            </div>
            <div>
              <Point />
              <TextField
                id="outlined-textarea"
                name="geo"
                label="geo"
                type="text"
                onChange={() => changeGeo}
                defaultValue={event.geo}
                value={value}
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
                id="outlined-textarea"
                name="file"
                type="file"
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
