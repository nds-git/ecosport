import React, { useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../features/redux/reduxHooks';
import { getOneArchEventThunk } from '../../features/thunkActions/eventThunkActions';

export default function OneArchEventPage(): JSX.Element {
  const { id } = useParams();
  const event = useAppSelector((state) => state.events.oneArchiveData);
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(getOneArchEventThunk(Number(id)));
  }, []);
  return (
    <Container sx={{mb: '2rem'}}>
      <Carousel>
        {event?.FotoEvents?.map((el) => (
          <img height={500} key={el.id} src={`http://localhost:3001/img/${el.img}`} alt="text" />
        ))}
      </Carousel>
    </Container>
  );
}
