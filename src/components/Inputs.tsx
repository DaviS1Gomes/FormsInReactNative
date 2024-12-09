import React from 'react';
import * as S from '../screens/ShippingScreen/Style';
import {TextInputProps} from 'react-native';

interface InputProps extends TextInputProps {
  name: string;
}

const Inputs: React.FC<InputProps> = ({name, ...rest}) => {
  return (
    <S.BoxInputs>
      <S.Names>
        {name} <S.NameAstDiff>*</S.NameAstDiff>
      </S.Names>
      <S.TextInputShipping {...rest} />
    </S.BoxInputs>
  );
};

export default Inputs;
