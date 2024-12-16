import React from 'react';
import * as S from './Style';
import Category from '../../components/Category/Category';
import Header from '../../components/Header/Header';
import {Text} from 'react-native';

const Review: React.FC = () => {
  return (
    <S.Content>
      <Header />
      <Category />
      <Text>Review</Text>
    </S.Content>
  );
};

export default Review;
