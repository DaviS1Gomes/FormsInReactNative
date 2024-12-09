import React from 'react';
import * as S from '../screens/ShippingScreen/Style';
import {PressableProps} from 'react-native';

const ButtonConfirm: React.FC<PressableProps> = ({onPressable}) => {
  return (
    <S.ButtonConfirm
      onPress={() => {
        onPressable;
      }}>
      <S.TextConfirmButton>Confirm and Continue</S.TextConfirmButton>
    </S.ButtonConfirm>
  );
};

export default ButtonConfirm;
