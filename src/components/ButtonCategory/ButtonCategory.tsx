import React from 'react';
import * as S from './Style';

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
    <S.Button
      onPress={() => {
        console.log(onPressButton);
      }}>
      <S.NumberCategory>{NumberCategory}</S.NumberCategory>
      <S.TextCategory>{TextCategory}</S.TextCategory>
    </S.Button>
  );
}

export default ButtonCategory;
