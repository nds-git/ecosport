import React, { useEffect } from 'react';
import MainPageBanner from '../ui/MainPageBanner';
import PaginationToMainPage from '../ui/PaginationToMainPage';

export default function MainPage(): JSX.Element {
  return (
    <>
      {' '}
      <MainPageBanner />
      <PaginationToMainPage />
    </>
  );
}
