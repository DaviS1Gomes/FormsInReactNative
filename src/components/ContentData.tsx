import React from 'react';
import * as S from '../screens/ShippingScreen/Style';
import Inputs from './Inputs';

function ContentData(): React.JSX.Element {
  return (
    <S.ContentData>
      <S.TitleData>Enter your shipping address</S.TitleData>
      <Inputs placeholder={'Ex: Brazil'} name={'Country'} />
      <Inputs placeholder={'Ex: Wolf Pen Road'} name={'Street address'} />
      <Inputs placeholder={'Ex: 1313'} name={'Number address'} />
      <Inputs placeholder={'Ex: Reference'} name={'Others'} />
    </S.ContentData>
  );
}

export default ContentData;
