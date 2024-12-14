import React from 'react';
import * as S from './Style';
import {TextInputProps} from 'react-native';

interface InputProps extends TextInputProps {
  name: string;
}

const Inputs: React.FC<InputProps> = ({name, ...rest}) => {
  return (
    <S.BoxInputs>
      <S.Names>
        {name} <S.Required>*</S.Required>
      </S.Names>
      <S.TextInput {...rest} />
    </S.BoxInputs>
  );
};

export default Inputs;
