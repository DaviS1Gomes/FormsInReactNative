import React from 'react';
import * as S from '../screens/ShippingScreen/Style';

function Footer(): React.JSX.Element {
  return (
    <S.Footer>
      <S.ButtonConfirm
        onPress={() => {
          console.log('Confirm Button');
        }}>
        <S.TextConfirmButton>Confirm and Continue</S.TextConfirmButton>
      </S.ButtonConfirm>
    </S.Footer>
  );
}

export default Footer;
