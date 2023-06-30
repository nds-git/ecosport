import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import myPlacemark from '../../../public/js/myPlacemark';

export default function GetGeo(): JSX.Element {
  // Чтобы быть уверенным, что компоненты загружены и готовы к использованию, необходимо использовать функцию ready или параметр загрузки onload.

  // Сразу после загрузки API будет
  // вызвана функция init.
  // На момент ее исполнения div-контейнер
  // карты уже будет готов.
  ymaps.ready(init);
  function init(): any {
    const myMap = new ymaps.Map('map', {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [55.76, 37.64],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 7,
    });
  }
  useEffect(() => {}, []);
  return (
    <>
      <Typography variant="h4" component="h5" mt={2}>
        А что тут будет?
      </Typography>

      <Box
        id="originMap"
        sx={{
          width: 600,
          height: 400,
        }}
      />
      <Button variant="contained">Text</Button>
    </>
  );
}
