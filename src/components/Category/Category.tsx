import React from 'react';
import * as S from './Style';
import ButtonCategory from '../ButtonCategory/ButtonCategory';
import {useNavigation} from '@react-navigation/native';

const Category: React.FC = () => {
  const navigation = useNavigation();

  return (
    <S.Category>
      <ButtonCategory
        TextCategory={'Shipping'}
        NumberCategory={1}
        onPress={() => {
          navigation.navigate('Shipping');
        }}
      />
      <S.HifenDiv />
      <ButtonCategory
        onPress={() => {
          navigation.navigate('Payment');
        }}
        TextCategory={'Payment'}
        NumberCategory={2}
      />
      <S.HifenDiv />
      <ButtonCategory
        onPress={() => {
          navigation.navigate('Review');
        }}
        TextCategory={'Review'}
        NumberCategory={3}
      />
    </S.Category>
  );
};

export default Category;
