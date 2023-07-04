import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { useAppDispatch } from '../../features/redux/reduxHooks';

import Point from '../ui/Point';

type MapPageProps = {
  geo: string;
};

export default function MapPage({ geo }: MapPageProps): JSX.Element {
  useEffect(() => {
    ymaps.ready(init);
    function init() {
      let myPlacemark;
      const myMap = new ymaps.Map(
        'boxMap',
        {
          center: [55.800643, 37.667668],
          zoom: 12,
        },
        {
          searchControlProvider: 'yandex#search',
        },
      );

      // Создание метки.
      function createPlacemark(coords) {
        return new ymaps.Placemark(
          coords,
          {
            iconCaption: 'поиск...',
            coordinates: [55.690928, 37.249125],
          },
          {
            preset: 'islands#violetDotIconWithCaption',
            draggable: true,
          },
        );
      }
    } // fin func init
  }, []);

  return (
    <div className="map-page">
      <Box m={8} id="boxMap" sx={{ marginY: 3, marginX: 'auto', width: 800, height: 450 }} />
    </div>
  );
}
