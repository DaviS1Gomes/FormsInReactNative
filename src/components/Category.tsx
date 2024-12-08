import React from 'react';
import * as S from '../screens/ShippingScreen/Style';
import ShippingButton from './ShippingButton';
import PaymentButton from './PaymentButton';
import ButtonReview from './ButtonReview';

function Category(): React.JSX.Element {
  return (
    <S.Category>
      <ShippingButton />
      <S.HifenDiv />
      <PaymentButton />
      <S.HifenDiv />
      <ButtonReview />
    </S.Category>
  );
}

export default Category;
