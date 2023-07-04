import React from 'react';
import AllEventList from '../ui/AllEventList';
import MainPageBanner from '../ui/MainPageBanner';
import AuthModal from '../ui/Auth/AuthModal';
import ArchiveTopList from '../ui/MainArchive/ArchiveTopList';
import MainArchiveList from '../ui/MainArchive/MainArchiveList';

export default function MainPage(): JSX.Element {
  return (
    <>
      <AuthModal />
      <MainPageBanner />
      <AllEventList />
      <hr />
      <ArchiveTopList />
      <hr />
      <MainArchiveList />
    </>
  );
}
