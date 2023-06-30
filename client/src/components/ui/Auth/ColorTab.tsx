import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

export default function ColorTabs(): JSX.Element {
  const [value, setValue] = React.useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string): void => {
    setValue(newValue);
  };

  const linkStyles = {
    textDecoration: 'none',
    color: 'inherit',
    outline: 'none',
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label={<Link to="/auth/signup" style={linkStyles}>Регистрация</Link>} />
        <Tab value="two" label={<Link to="/auth/signin" style={linkStyles}>Авторизация</Link>} />
      </Tabs>
    </Box>
  );
}
