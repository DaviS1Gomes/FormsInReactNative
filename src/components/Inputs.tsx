import React from 'react';
import * as S from '../screens/ShippingScreen/Style';
import {TextInputProps} from 'react-native';

interface InputProps extends TextInputProps {
  name: string;
}

function Inputs({placeholder, name}: InputProps): React.JSX.Element {
  return (
    <S.BoxInputs>
      <S.Names>
        {name} <S.NameAstDiff>*</S.NameAstDiff>
      </S.Names>
      <S.TextInputShipping placeholder={placeholder} />
    </S.BoxInputs>
  );
}

export default Inputs;
