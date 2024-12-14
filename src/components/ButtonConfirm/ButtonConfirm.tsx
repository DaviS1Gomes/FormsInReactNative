import React from 'react';
import * as S from './Style';
import {PressableProps} from 'react-native';

const ButtonConfirm: React.FC<PressableProps> = ({...rest}) => {
  return (
    <S.ButtonConfirm {...rest}>
      <S.TextConfirmButton>Confirm and Continue</S.TextConfirmButton>
    </S.ButtonConfirm>
  );
};

export default ButtonConfirm;
