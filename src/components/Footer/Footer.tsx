import React from 'react';
import * as S from './Style';
import ButtonConfirm from '../ButtonConfirm/ButtonConfirm';
import {PressableProps} from 'react-native';

const Footer: React.FC<PressableProps> = ({}) => {
  return (
    <S.Footer>
      <S.ViewButton>
        <ButtonConfirm />
      </S.ViewButton>
    </S.Footer>
  );
};

export default Footer;
