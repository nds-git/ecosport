import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../features/redux/reduxHooks';
import { getTotalGarbageEventThunk } from '../../features/thunkActions/eventThunkActions';
import AuthButtons from './Auth/AuthButtons';
import AuthModal from './Auth/AuthModal';

export default function MainPageBanner(): JSX.Element {
  return (
    <Container>
      <div className="bg-main ">
        <Typography
          sx={{
            fontFamily: 'FuturaFuturisC',
            flexGrow: 1,
            textDecoration: 0,
            fontSize: '62px',
            padding: '25px 0 0 0',
            color: 'green',
          }}
        >
          ЭКО | Спорт
          <p className="bg-main-p">
            Cоздавай прямо сейчас собственные
            <br />
            спортивные мероприятия с пользой
            <br />
            для себя, общества и<br />
            всей Планеты.
          </p>
          <p className="bg-main-p">
            или стань участником
            <br />
            спортивно-экологического
            <br />
            движения вместе с организаторами
            <br />
          </p>
        </Typography>

        {/* <Box>
          <Typography
            className="bg-main-h"
            sx={{
              fontFamily: 'FuturaFuturisC',
              flexGrow: 1,
              textDecoration: 0,
              fontSize: '22px',
              padding: '25px 0 0 0',
              color: 'green',
            }}
          >
            Тут подзаголовки
          </Typography>
        </Box> */}
      </div>
    </Container>
  );
}
