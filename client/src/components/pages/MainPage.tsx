import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import AllEventList from '../ui/AllEventList';
import MainPageBanner from '../ui/MainPageBanner';
import ArchiveList from '../ui/MainArchive/ArchiveList';

export default function MainPage(): JSX.Element {
  return (
    <>
      {' '}
      <MainPageBanner />
      <AllEventList />
      <hr />
      <ArchiveList />
    </>
  );
}
