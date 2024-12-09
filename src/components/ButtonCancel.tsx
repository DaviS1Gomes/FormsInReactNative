import * as S from '../screens/ShippingScreen/Style';
import React from 'react';

const ButtonCancel: React.FC = () => {
  return (
    <S.CancelButton>
      <S.CancelText>Cancel</S.CancelText>
    </S.CancelButton>
  );
};

export default ButtonCancel;
