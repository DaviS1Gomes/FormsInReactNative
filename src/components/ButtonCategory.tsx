import React from 'react';
import * as S from '../screens/ShippingScreen/Style';

interface ButtonCaregory {
  onPressButton: string;
  NumberCategory: number;
  TextCategory: string;
}

function ButtonCategory({
  onPressButton,
  NumberCategory,
  TextCategory,
}: ButtonCaregory): React.JSX.Element {
  return (
    <S.ButtonShipping
      onPress={() => {
        console.log(onPressButton);
      }}>
      <S.NumberCategoryShipping>{NumberCategory}</S.NumberCategoryShipping>
      <S.TextCategoryShipping>{TextCategory}</S.TextCategoryShipping>
    </S.ButtonShipping>
  );
}

export default ButtonCategory;
