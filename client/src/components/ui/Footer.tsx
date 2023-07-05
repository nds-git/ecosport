import React from 'react';
import { Container } from '@mui/system';
import { Box, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function Footer(): JSX.Element {
  return (
    <Box className="box-top-footer" sx={{ flexGrow: 1, fontFamily: 'FuturaBookC' }}>
      <Container>
        <Box
          sx={{
            backgroundColor: 'transparent',
            flexGrow: 1,
            borderTop: '1px solid #eaeaea',
            marginBottom: '2rem',
          }}
        >
          <Typography
            color="inherit"
            variant="h6"
            component={NavLink}
            to="/"
            sx={{ color: 'red', fontFamily: 'FuturaBookC', flexGrow: 1, textDecoration: 0 }}
          >
            <p className="logo">
              <a href="/" title="эко спорт" className="no_href">
                <img src="../logo.png" alt="logo" /> ЭКО | Спорт{' '}
              </a>
            </p>
          </Typography>
          <Typography
            sx={{ color: '#7f7f7f ', fontFamily: 'FuturaBookC', flexGrow: 1, textDecoration: 0 }}
          >
            &#169; Сайт создан в учебных и ознакомительных целях. Создатели и модераторы сайта не
            несут ответственность <br />
            за размещенные мероприятия и регистрацию на события третьими лицами.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
