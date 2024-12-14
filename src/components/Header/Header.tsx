import ButtonCancel from '../ButtonCancel/ButtonCancel';
import React from 'react';
import * as S from './Style';

const Header: React.FC = () => {
  return (
    <S.Header>
      <ButtonCancel />
      <S.MainTextHeader>Checkout</S.MainTextHeader>
    </S.Header>
  );
};

export default Header;
