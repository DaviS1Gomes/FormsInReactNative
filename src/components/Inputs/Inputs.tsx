import React from 'react';
import * as S from './Style';
import {TextInputProps} from 'react-native';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

export interface InputProps extends TextInputProps {
  name: string;
  formikError: string | undefined;
  formikTouched: boolean | undefined;
}

const Inputs: React.FC<InputProps> = ({
  name,
  formikError,
  formikTouched,
  ...rest
}) => {
  return (
    <S.BoxInputs>
      <S.Names>
        {name} <S.Required>*</S.Required>
      </S.Names>
      <S.TextInput {...rest} />
      <ErrorMessage
        formikError={formikError}
        formikTouched={formikTouched}
        name={'Error Message: '}
      />
    </S.BoxInputs>
  );
};

export default Inputs;
