import React from 'react';
import * as S from '../../screens/ShippingScreen/Style';
import ContentData from '../../components/ContentData';
import Category from '../../components/Category';
import Header from '../../components/Header';

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
