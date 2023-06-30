import React, { useEffect, useState } from 'react';

import MapPage from './MapPage';
import { Outlet } from 'react-router-dom';

export default function Layout(): JSX.Element {
  return (
    <Outlet />
  )
}
