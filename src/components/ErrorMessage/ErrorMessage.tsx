import React from 'react';
import * as S from './Style';

interface CustomPropsError {
  formikError: string | undefined;
  formikTouched: boolean | undefined;
}

const ErrorMessage: React.FC<CustomPropsError> = ({
  formikError,
  formikTouched,
}) => {
  return (
    <S.Container>
      {formikError && formikTouched ? (
        <S.Message>{formikError}</S.Message>
      ) : null}
    </S.Container>
  );
};

export default ErrorMessage;
