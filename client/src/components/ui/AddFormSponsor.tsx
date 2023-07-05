import React from 'react';
import Button from '@mui/material/Button';
import { TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';

import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { useAppSelector } from '../../features/redux/reduxHooks';
import useSponsorHook from '../../hooks/useSponsorHook';
import type { SponsorFormType } from '../../types';

type AddFormSponsorProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function AddFormSponsor({ setOpen }: AddFormSponsorProps): JSX.Element {
  const { addHandler } = useSponsorHook();

  const id = useAppSelector((state) => state.events.event.id);

  const handlerClose = (): void => {
    setOpen(false);
  };

  return (
    <Container maxWidth="sm">
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        <Box
          component="form"
          onSubmit={(e: React.FormEvent<HTMLFormElement & SponsorFormType>) => addHandler(e, id)}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            name="title"
            label="Title"
            placeholder="Title"
            defaultValue="Abibas карабас"
            required
          />
          <TextField name="name" label="Name" placeholder="Name" defaultValue="Abibas" required />
          <TextField
            name="body"
            label="Body"
            placeholder="Body"
            defaultValue="никто кроме нас"
            required
          />
          <TextField
            name="message"
            label="Message"
            type="message"
            defaultValue="хочется стать спонсором"
            required
          />
          <TextField
            name="email"
            label="email"
            type="email"
            defaultValue="abibas@abibas.ru"
            required
          />
          <div>
            <Button endIcon={<AddAPhotoIcon />} variant="outlined" sx={{ marginLeft: 4 }}>
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

          <Button type="submit" variant="contained" onClick={handlerClose}>
            Стать спонсором
          </Button>
        </Box>
      </Typography>
    </Container>
  );
}
