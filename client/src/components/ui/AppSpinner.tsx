import React, { useState, useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function AppSpinner(): JSX.Element {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined;
    if (progress < 100) {
      timeout = setTimeout(() => setProgress(progress + 25), 700);
    }
    return () => clearTimeout(timeout);
  }, [progress]);
  return <ProgressBar variant='success'  now={progress} label={`${progress}%`} />;
}
