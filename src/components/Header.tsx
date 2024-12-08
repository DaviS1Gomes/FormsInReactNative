import ButtonCancel from './ButtonCancel';
import React from 'react';
import * as S from '../screens/ShippingScreen/Style';

function Header(): React.JSX.Element {
  return (
    <S.Header>
      <ButtonCancel />
      <S.MainTextHeader>Checkout</S.MainTextHeader>
    </S.Header>
  );
}

export default Header;
