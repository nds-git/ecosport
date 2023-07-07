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
  const count = useAppSelector((state) => state.events.rows?.count);

  const [allEvents, setAllEvents] = useState(); // наши события

  const [currentPage, setCurrentPage] = useState(1); // текущая страница
  const [countPage, setCountPage] = useState(1); // сколько вообще у нас страниц

  useEffect(() => {
    setCountPage(count);
    void dispatch(getAllEventWithPaginateThunk(currentPage));
  }, [currentPage]);

  // запрос отправляется каждый раз когда изменяется страница

  return (
    <>
      <Container
        sx={{
          padding: '30px',
          bgcolor: 'background.paper',
          mb: '2rem',
          mt: '3rem',
          fontFamily: 'FuturaBookC',
        }}
      >
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
            {' '}
            <h2>Ближайшие мероприятия: </h2>
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
        {currentPage && (
          <Pagination
            count={Math.ceil(count / 6)}
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
