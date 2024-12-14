import React from 'react';
import * as S from './Style';
import {PressableProps} from 'react-native';

const ButtonConfirm: React.FC<PressableProps> = ({}) => {
  return (
    <S.ButtonConfirm onPress={() => {}}>
      <S.TextConfirmButton>Confirm and Continue</S.TextConfirmButton>
    </S.ButtonConfirm>
  );
};

export default ButtonConfirm;
