import React from 'react';
import * as S from './Style';
import Header from '../../components/Header/Header';
import Category from '../../components/Category/Category';
import {Text} from 'react-native';

const Payment: React.FC = () => {
  return (
    <S.Content>
      <Header />
      <Category />
      <Text>Payment</Text>
    </S.Content>
  );
};

export default Payment;
