import React, { useState, useEffect } from 'react';
import { Box, Container } from '@mui/system';
import { Link as NavLink } from 'react-router-dom';
import { Pagination, PaginationItem, TextField, Stack, Link, Grid } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../features/redux/reduxHooks';
import { getAllEventWithPaginateThunk } from '../../features/thunkActions/eventThunkActions';
import MainPageEventItem from './MainPageEventItem';

export default function PaginationToMainPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const rows = useAppSelector((state) => state.events.rows);
  console.log('rows-->', rows);

  const [allEvents, setAllEvents] = useState(); // наши события
  const [query, setQuery] = useState(''); // наш запрос
  const [currentPage, setCurrentPage] = useState(1); // текущая страница
  const [countPage, setCountPage] = useState(rows.count); // сколько вообще у нас страниц

  useEffect(() => {
    setCountPage(rows.count);
    void dispatch(getAllEventWithPaginateThunk(currentPage));
  }, [currentPage]);

  // запрос отправляется каждый раз когда изменяется страница

  console.log('rows.count--> ', rows.count);

  return (
    <>
      <Container sx={{ padding: '30px', bgcolor: 'background.paper' }}>
        <Stack spacing={2}>
          <Box
            component="div"
            sx={{
              width: '100%',
              height: '100%',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <Grid container spacing={3}>
              {rows.rows.map((event) => (
                <Grid item key={event.id} xs={12} sm={6} md={4}>
                  <MainPageEventItem event={event} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Stack>
      </Container>
      <Container>
        {!!countPage && (
          <Pagination
            count={Math.floor(countPage / 5) + 1}
            page={currentPage}
            onChange={(_, num) => setCurrentPage(num)}
            showFirstButton
            showLastButton
            color="secondary"
            sx={{ marginY: 3, marginX: 'auto' }}
          />
        )}
      </Container>
    </>
  );
}
