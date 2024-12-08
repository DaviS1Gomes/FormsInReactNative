import React from 'react';
import * as S from '../screens/ShippingScreen/Style';

function ShippingButton(): React.JSX.Element {
  return (
    <S.ButtonShipping
      onPress={() => {
        console.log('ShippingPress');
      }}>
      <S.NumberCategoryShipping>1</S.NumberCategoryShipping>
      <S.TextCategoryShipping>Shipping</S.TextCategoryShipping>
    </S.ButtonShipping>
  );
}

export default ShippingButton;
