import React from 'react';
import * as S from './Style';
import {PressableProps} from 'react-native';

interface ButtonCaregory extends PressableProps {
  NumberCategory: number;
  TextCategory: string;
}

const ButtonCategory: React.FC<ButtonCaregory> = ({
  NumberCategory,
  TextCategory,
  ...rest
}) => {
  return (
    <S.Button {...rest}>
      <S.NumberCategory>{NumberCategory}</S.NumberCategory>
      <S.TextCategory>{TextCategory}</S.TextCategory>
    </S.Button>
  );
};

export default ButtonCategory;
