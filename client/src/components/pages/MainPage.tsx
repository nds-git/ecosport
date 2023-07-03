import React from 'react';

import AllEventList from '../ui/AllEventList';
import MainPageBanner from '../ui/MainPageBanner';
import AuthModal from '../ui/Auth/AuthModal';

export default function MainPage(): JSX.Element {
  return (
    <>
      {' '}
      <AuthModal />
      <MainPageBanner />
      <AllEventList />
    </>
  );
}
