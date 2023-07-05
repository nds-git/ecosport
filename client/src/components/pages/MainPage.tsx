import React, { useEffect } from 'react';
import MainPageBanner from '../ui/MainPageBanner';
import AuthModal from '../ui/Auth/AuthModal';
import ArchiveTopList from '../ui/MainArchive/ArchiveTopList';
import MainArchiveList from '../ui/MainArchive/MainArchiveList';
import PaginationToMainPage from '../ui/PaginationToMainPage';

export default function MainPage(): JSX.Element {
  return (
    <>
      <MainPageBanner />
      <PaginationToMainPage />
      <ArchiveTopList />
      <MainArchiveList />
    </>
  );
}
