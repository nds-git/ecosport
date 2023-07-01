import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { getAllArchiveEventThunk } from '../../features/thunkActions/eventThunkActions';
import { useAppDispatch, useAppSelector } from '../../features/redux/reduxHooks';
import MenuManager from '../ui/MenuManager';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import useEventHook from '../../hooks/useEventHook';

export default function ArchivePage(): JSX.Element {
  const events = useAppSelector((state) => state.events);
  const dispatch = useAppDispatch();
  const {deleteHandler} = useEventHook();
  useEffect(() => {
    void dispatch(getAllArchiveEventThunk());
  }, []);

  return (
    <>
    <MenuManager />
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List>
          {events.data.map((event) => (
          <ListItem key={event.id} disablePadding>
            <ListItemButton>
            <ListItemIcon onClick={() => deleteHandler(event.id)}>
                <DeleteForeverIcon />
              </ListItemIcon>
              <ListItemText primary={event.title} />
            </ListItemButton>
          </ListItem>
          )) }
        </List>
      </nav>
    </Box>
    </>
  );
}
