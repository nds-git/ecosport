import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default function EventMap(): JSX.Element {
  const [adressToEvent, setAdressToEvent] = useState(0);

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

      const myGeoObject = new ymaps.GeoObject({
        geometry: {
          type: 'Point', // тип геометрии - точка
          coordinates: [55.800643, 37.667668], // координаты точки
        },
      });
      myMap.geoObjects.add(myGeoObject);
    } // fin func init
  }, []);
  return (
    <>
      <Typography component="p" mt={2}>
        <b>Координаты точки сбора:</b>
        <br />
        <b>Адрес точки сбора:</b>
        <br />
      </Typography>

      <Box
        id="boxMap"
        sx={{
          width: 500,
          height: 450,
        }}
      />
    </>
  );
}
