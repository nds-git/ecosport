import React, { useEffect, useState } from 'react';

import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row';
import { motion } from 'framer-motion';
import { Outlet } from 'react-router-dom';
import AppNavBar from '../ui/AppNavBar';
import { useAppSelector } from '../../features/redux/reduxHooks';

export default function Layout(): JSX.Element {
  const [progress, setProgress] = useState(0);
  const user = useAppSelector((state) => state.user);
  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined;
    if (progress < 100) {
      timeout = setTimeout(() => setProgress(progress + 50), 200);
    }
    return () => clearTimeout(timeout);
  }, [progress]);

  if (progress < 100 || user.status === 'pending')
    return (
      <Row className="mt-3">
        <ProgressBar striped variant="success" now={progress} label={`${progress}%`} />
      </Row>
    );
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
      <AppNavBar />
      <Outlet />
    </motion.div>
  );
}
