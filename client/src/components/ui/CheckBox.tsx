// CheckBox component
import React from 'react';
import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material';

type CheckBoxProps = {
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CheckBox({ isChecked, setIsChecked }: CheckBoxProps): JSX.Element {
  const handleCheckboxCheck: React.ChangeEventHandler<HTMLInputElement> = (event): void => {
    setIsChecked(event.target.checked);
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', alignItems: 'start' }}>
      <Checkbox checked={isChecked} onChange={handleCheckboxCheck} />
      <Typography variant="body2" component="span" style={{ marginTop: '10px' }}>
        Я принимаю условия Пользовательского соглашения и даю свое согласие на обработку моей
        персональной информации на условиях, определенных Политикой конфиденциальности.
      </Typography>
    </div>
  );
}
