import React from 'react';
import * as S from './Style';
import {InputProps} from '../Inputs/Inputs';

const ErrorMessage: React.FC<InputProps> = ({
  formikError,
  formikTouched,
  name,
}) => {
  if (formikError && formikTouched) {
    return (
      <S.Container>
        <S.Message>* {name + formikError}</S.Message>
      </S.Container>
    );
  } else {
    return null;
  }
};
export default ErrorMessage;
