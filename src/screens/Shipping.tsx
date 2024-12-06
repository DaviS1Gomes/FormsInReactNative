import React from 'react';
import {Text, View} from 'react-native';
import * as S from '../styles/Header';

function Shipping(): React.JSX.Element {
  return (
    <S.Container>
      <S.Header>
        <S.MainTextHeader>Checkout</S.MainTextHeader>
      </S.Header>
      <S.Category />
    </S.Container>
  );
}

export default Shipping;
