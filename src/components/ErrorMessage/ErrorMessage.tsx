import React from 'react';
import * as S from './Style';
import {InputProps} from '../Inputs/Inputs';

const ErrorMessage: React.FC<InputProps> = ({
  formikError,
  formikTouched,
  name,
}) => {
  return (
    <S.Container>
      {formikError && formikTouched ? (
        <S.Message>* {name + formikError}</S.Message>
      ) : null}
    </S.Container>
  );
};

export default ErrorMessage;
