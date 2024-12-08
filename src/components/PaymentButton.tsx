import React from 'react';
import * as S from '../screens/ShippingScreen/Style';

function PaymentButton(): React.JSX.Element {
  return (
    <S.ButtonPayment
      onPress={() => {
        console.log('PaymentPress');
      }}>
      <S.NumberCategoryPayment>2</S.NumberCategoryPayment>
      <S.TextCategoryPayment>Payment</S.TextCategoryPayment>
    </S.ButtonPayment>
  );
}

export default PaymentButton;
