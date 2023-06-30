import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/pages/Layout';
import MapPage from './components/pages/MapPage';
import EventMap from './components/ui/EventMap';

function App(): JSX.Element {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* <Route path="/" element={<MapPage />} /> */}
        <Route path="/" element={<EventMap />} />
      </Route>
    </Routes>
  );
}

export default App;
