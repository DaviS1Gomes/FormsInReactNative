import * as S from '../screens/ShippingScreen/Style';
import React from 'react';

function ButtonCancel(): React.JSX.Element {
  return (
    <S.CancelButton>
      <S.CancelText>Cancel</S.CancelText>
    </S.CancelButton>
  );
}

export default ButtonCancel;
