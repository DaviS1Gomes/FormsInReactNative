import React from 'react';
import * as S from '../screens/ShippingScreen/Style';
import ButtonConfirm from './ButtonConfirm';
import {PressableProps} from 'react-native';

const Footer: React.FC<PressableProps> = ({onPresslabe}) => {
  return (
    <S.Footer>
      <S.ViewButton>
        <ButtonConfirm onPress={onPresslabe} />
      </S.ViewButton>
    </S.Footer>
  );
};

export default Footer;
