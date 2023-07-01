import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import AllEventList from '../ui/AllEventList';
import MainPageBanner from '../ui/MainPageBanner';

export default function MainPage(): JSX.Element {
  return (
    <>
      {' '}
      <MainPageBanner />
      <AllEventList />
      
    </>
  );
}
