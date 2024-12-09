import ButtonCancel from './ButtonCancel';
import React from 'react';
import * as S from '../screens/ShippingScreen/Style';

const Header: React.FC = () => {
  return (
    <S.Header>
      <ButtonCancel />
      <S.MainTextHeader>Checkout</S.MainTextHeader>
    </S.Header>
  );
};

export default Header;
