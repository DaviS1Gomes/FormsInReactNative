import React from 'react';
import * as S from '../../screens/ShippingScreen/Style';
import ContentData from '../../components/ContentData/ContentData';
import Category from '../../components/Category/Category';
import Header from '../../components/Header/Header';

const Shipping: React.FC = () => {
  return (
    <S.Container>
      <Header />
      <Category />
      <ContentData />
    </S.Container>
  );
};

export default Shipping;
