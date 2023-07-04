import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import { useAppDispatch, useAppSelector } from '../../features/redux/reduxHooks';
import { getTotalGarbageEventThunk } from '../../features/thunkActions/eventThunkActions';
import AuthButtons from './Auth/AuthButtons';
import AuthModal from './Auth/AuthModal';

export default function MainPageBanner(): JSX.Element {
  const garbage = useAppSelector((state) => state.events.garbage);
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(getTotalGarbageEventThunk())
  }, [])
  return (
    <Container>
      <div className="bg-main " />
      <h1>Всего собранно мусора: <span style={{color: 'red'}}>{garbage} кг</span></h1>
    </Container>
  );
}
