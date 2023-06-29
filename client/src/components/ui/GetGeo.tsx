import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default function GetGeo(): JSX.Element {
  // Чтобы быть уверенным, что компоненты загружены и готовы к использованию,
  //  необходимо использовать функцию ready или параметр загрузки onload.

  // Сразу после загрузки API будет
  // вызвана функция init.
  // На момент ее исполнения div-контейнер
  // карты уже будет готов.

  const [coordToView, setCoordToView] = useState<[]>([]);
  const [adressToView, setAdressToView] = useState<string>('');

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

      // Слушаем клик на карте.
      myMap.events.add('click', (e) => {
        const coords = e.get('coords');

        // Если метка уже создана – просто передвигаем ее.
        if (myPlacemark) {
          myPlacemark.geometry.setCoordinates(coords);
        }
        // Если нет – создаем.
        else {
          myPlacemark = createPlacemark(coords);
          myMap.geoObjects.add(myPlacemark);
          // Слушаем событие окончания перетаскивания на метке.
          myPlacemark.events.add('dragend', () => {
            getAddress(myPlacemark.geometry.getCoordinates());
          });
        }
        getAddress(coords);
      });

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

      // Определяем адрес по координатам (обратное геокодирование).
      function getAddress(coords) {
        myPlacemark.properties.set('iconCaption', 'поиск...');
        ymaps.geocode(coords).then((res) => {
          const firstGeoObject = res.geoObjects.get(0);

          setCoordToView(myPlacemark.properties._data.coordinates);
          setAdressToView(myPlacemark.properties._data.balloonContent);

          myPlacemark.properties.set({
            // Формируем строку с данными об объекте.

            iconCaption: [
              // Название населенного пункта или вышестоящее административно-территориальное образование.
              firstGeoObject.getLocalities().length
                ? firstGeoObject.getLocalities()
                : firstGeoObject.getAdministrativeAreas(),
              // Получаем путь до топонима, если метод вернул null, запрашиваем наименование здания.
              firstGeoObject.getThoroughfare() || firstGeoObject.getPremise(),
            ]
              .filter(Boolean)
              .join(', '),
            // В качестве контента балуна задаем строку с адресом объекта.
            balloonContent: firstGeoObject.getAddressLine(),
          });
        });
      }
    } // fin func init
  }, []);

  return (
    <>
      <Typography component="p" mt={2}>
        <b>Координаты точки сбора:</b> {coordToView.map((el) => `${el.toFixed(6)} `)}
        <br />
        <b>Адрес точки сбора:</b> {adressToView}
        <br />
      </Typography>

      <Box
        id="boxMap"
        sx={{
          width: 500,
          height: 450,
        }}
      />
      <Button variant="contained">Text</Button>
    </>
  );
}
