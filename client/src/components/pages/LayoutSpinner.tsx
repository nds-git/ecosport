import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Outlet } from 'react-router-dom';
import AppNavBar from '../ui/AppNavBar';
import { useAppSelector } from '../../features/redux/reduxHooks';
import Spinner from '../ui/Spinner';

export default function LayoutSpinner(): JSX.Element {
  const [progress, setProgress] = useState(0);
  const user = useAppSelector((state) => state.user);
  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined;
    if (progress < 100) {
      timeout = setTimeout(() => setProgress(progress + 20), 500);
    }
    return () => clearTimeout(timeout);
  }, [progress]);

  if (progress < 100 || user.status === 'pending')
    return (
      // <Row className="mt-3">
      //   <ProgressBar striped variant="success" now={progress} label={`${progress}%`} />
      // </Row>
      <Spinner progress={progress} label={`${progress}%`}/>
    );
  return (
    
      <Outlet />

  );
}
