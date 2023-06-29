import React from 'react';

import { useAppSelector } from '../../features/redux/reduxHooks';
import GetGeo from '../ui/GetGeo';

export default function MapPage(): JSX.Element {
  const posts = useAppSelector((state) => state.posts);
  return <GetGeo />;
}
