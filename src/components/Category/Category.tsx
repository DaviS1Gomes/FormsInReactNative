import React from 'react';
import * as S from './Style';
import ButtonCategory from '../ButtonCategory/ButtonCategory';

const Category: React.FC = () => {
  return (
    <S.Category>
      <ButtonCategory
        onPressButton={'BOTAO PRESSIONADO'}
        TextCategory={'Shipping'}
        NumberCategory={1}
      />
      <S.HifenDiv />
      <ButtonCategory
        onPressButton={'BOTAO PRESSIONADO 2'}
        TextCategory={'Payment'}
        NumberCategory={2}
      />
      <S.HifenDiv />
      <ButtonCategory
        onPressButton={'BOTAO PRESSIONADO 3'}
        TextCategory={'Review'}
        NumberCategory={3}
      />
    </S.Category>
  );
};

export default Category;
