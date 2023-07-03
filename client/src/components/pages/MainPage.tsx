import React from 'react';
import AllEventList from '../ui/AllEventList';
import MainPageBanner from '../ui/MainPageBanner';
import ArchiveList from '../ui/MainArchive/ArchiveList';

export default function MainPage(): JSX.Element {
  return (
    <>
      <MainPageBanner />
      <AllEventList />
      <hr />
      <ArchiveList />
    </>
  );
}
