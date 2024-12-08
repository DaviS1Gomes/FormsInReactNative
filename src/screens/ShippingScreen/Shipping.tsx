import React from 'react';
import * as S from '../../screens/ShippingScreen/Style';
import ContentData from '../../components/ContentData';
import Category from '../../components/Category';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Shipping(): React.JSX.Element {
  return (
    <S.Container>
      <Header />
      <Category />
      <ContentData />
      <Footer />
    </S.Container>
  );
}

export default Shipping;
