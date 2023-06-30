import React, { useEffect, useState } from 'react';

import { Outlet } from 'react-router';

export default function Layout(): JSX.Element {
  // привет роимашка
  return <Outlet />;
}
