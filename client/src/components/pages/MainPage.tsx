import React from 'react';
import MainPageBanner from '../ui/MainPageBanner';
import PaginationToMainPage from '../ui/PaginationToMainPage';
import ArchiveList from '../ui/MainArchive/ArchiveList';
import AuthModal from '../ui/Auth/AuthModal';


export default function MainPage(): JSX.Element {
  return (
    <>
      <AuthModal />
      <MainPageBanner />
      <PaginationToMainPage />
      <hr />
      <ArchiveList />
    </>
  );
}
