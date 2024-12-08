import React from 'react';
import * as S from '../screens/ShippingScreen/Style';

function ButtonReview(): React.JSX.Element {
  return (
    <S.ButtonReview
      onPress={() => {
        console.log('ReviewPress');
      }}>
      <S.NumberCategoryReview>3</S.NumberCategoryReview>
      <S.TextCategoryReview>Review</S.TextCategoryReview>
    </S.ButtonReview>
  );
}

export default ButtonReview;
