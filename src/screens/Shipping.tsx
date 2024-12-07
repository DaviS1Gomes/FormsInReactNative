import React from 'react';
import * as S from '../styles/Header';

function Shipping(): React.JSX.Element {
  return (
    <S.Container>
      <S.Header>
        <S.CancelButton
          onPress={() => {
            console.log('Button Cancel Funcionando');
          }}>
          <S.CancelText>Cancel</S.CancelText>
        </S.CancelButton>
        <S.MainTextHeader>Checkout</S.MainTextHeader>
      </S.Header>
      <S.Category>
        <S.ButtonShipping
          onPress={() => {
            console.log('ShippingPress');
          }}>
          <S.NumberCategoryShipping>1</S.NumberCategoryShipping>
          <S.TextCategoryShipping>Shipping</S.TextCategoryShipping>
        </S.ButtonShipping>
        <S.HifenDiv />
        <S.ButtonPayment
          onPress={() => {
            console.log('PaymentPress');
          }}>
          <S.NumberCategoryPayment>2</S.NumberCategoryPayment>
          <S.TextCategoryPayment>Payment</S.TextCategoryPayment>
        </S.ButtonPayment>
        <S.HifenDiv />
        <S.ButtonReview
          onPress={() => {
            console.log('ReviewPress');
          }}>
          <S.NumberCategoryReview>3</S.NumberCategoryReview>
          <S.TextCategoryReview>Review</S.TextCategoryReview>
        </S.ButtonReview>
      </S.Category>

      <S.ContentData>
        <S.TitleData>Enter your shipping address</S.TitleData>
        <S.BoxInputs>
          <S.Names>
            Country <S.NameAstDiff>*</S.NameAstDiff>
          </S.Names>
          <S.TextInputShipping placeholder="Ex: Brazil" />
        </S.BoxInputs>
        <S.BoxInputs>
          <S.Names>
            Full name <S.NameAstDiff>*</S.NameAstDiff>
          </S.Names>
          <S.TextInputShipping placeholder="Ex: Luke Skywalker" />
        </S.BoxInputs>
        <S.BoxInputs>
          <S.Names>
            Street address <S.NameAstDiff>*</S.NameAstDiff>
          </S.Names>
          <S.TextInputShipping placeholder="Ex: Wolf Pen Road" />
        </S.BoxInputs>
        <S.BoxInputs>
          <S.Names>
            Number Adress <S.NameAstDiff>*</S.NameAstDiff>
          </S.Names>
          <S.TextInputShipping placeholder="Ex: 1313" />
        </S.BoxInputs>
        <S.BoxInputs>
          <S.Names>Others</S.Names>
          <S.TextInputShipping placeholder="Ex: Reference..." />
        </S.BoxInputs>
      </S.ContentData>
      <S.Footer>
        <S.ButtonConfirm
          onPress={() => {
            console.log('Confirm Button');
          }}>
          <S.TextConfirmButton>{'Confirm and Continue >'}</S.TextConfirmButton>
        </S.ButtonConfirm>
      </S.Footer>
    </S.Container>
  );
}

export default Shipping;
