import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import { Grid, Paper, Typography } from '@mui/material';

import AuthModal from './Auth/AuthModal';
import AuthButtons from './Auth/AuthButtons';
import { getTotalGarbageEventThunk } from '../../features/thunkActions/eventThunkActions';
import { useAppDispatch, useAppSelector } from '../../features/redux/reduxHooks';

export default function MainPageBanner(): JSX.Element {
  return (
    <Container>
      <div className="bg-main  ">
        <Typography ml={5}
          sx={{
            fontFamily: 'FuturaFuturisC',
            flexGrow: 1,
            textDecoration: 0,
            fontSize: '72px',
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
            для себя, общества и всей
            <br />
            Планеты
          </p>
          <p className="bg-main-p">
            ...или стань участником экологического
            <br />
            события своего города вместе с <br />
            организаторами
            <br />
          </p>
        </Typography>
      </div>
    </Container>
  );
}
