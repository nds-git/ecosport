import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import { useAppDispatch, useAppSelector } from '../../features/redux/reduxHooks';
import { getTotalGarbageEventThunk } from '../../features/thunkActions/eventThunkActions';
import AuthButtons from './Auth/AuthButtons';
import AuthModal from './Auth/AuthModal';

export default function MainPageBanner(): JSX.Element {

  return (
    <Container>
      <div className="bg-main " />
    </Container>
  );
}
