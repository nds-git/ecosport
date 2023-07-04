/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../features/redux/reduxHooks';

import Point from '../ui/Point';

export default function MapPage(): JSX.Element {
  //  event.geo   55.947769715515335 37.56467117382813

  const event = useAppSelector((state) => state.events.event);

  const geo = event.geo.split(' ').map((el) => Number(el));

  useEffect(() => {
    ymaps.ready(init);
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    function init() {
      const myMap = new ymaps.Map(
        'boxMap',
        {
          center: geo,
          zoom: 10,
        },
        {
          searchControlProvider: 'yandex#search',
        },
      );
      const myPlacemark = new ymaps.Placemark(geo, {
        // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
        balloonContentHeader: event.title,
        balloonContentBody: event.address,
        balloonContentFooter: event.geo,
        hintContent: 'Спасем плангету вместе',
      });

      myMap.geoObjects.add(myPlacemark);
    }
  }, []);

  return (
    <div className="map-page">
      <Box m={8} id="boxMap" sx={{ marginY: 3, marginX: 'auto', width: 800, height: 450 }} />
    </div>
  );
}
