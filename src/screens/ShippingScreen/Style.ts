import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  background-color: #fff;
`;
export const Header = styled.View`
  background-color: #000;
  height: 70px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  align-content: center;
`;

export const CancelButton = styled.Pressable`
  margin-left: 20px;
`;

export const CancelText = styled.Text`
  font-size: 20px;
  /* color: white; */
  color: #98999a;
`;

export const MainTextHeader = styled.Text`
  color: #fff;
  font-size: 25px;
  text-align: center;
  position: absolute;
  left: 37.5%;
`;
export const Category = styled.View`
  background-color: #f9f9f9;
  display: flex;
  flex-direction: row;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: space-around;
  align-items: center;

  border-bottom-color: #f1f1f1;
  border-bottom-width: 2px;
  border-bottom-style: solid;
`;
export const ButtonShipping = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  justify-content: center;
`;

export const HifenDiv = styled.View`
  width: 10px;
  height: 2px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: #c9c9c9;
`;

export const NumberCategoryShipping = styled.Text`
  height: 25px;
  width: 25px;

  background-color: #000;
  border-radius: 100px;

  line-height: 25px;
  text-align: center;
  font-size: 15px;
  color: #fff;
`;

export const TextCategoryShipping = styled.Text`
  font-size: 17.5px;
  font-weight: 500;
`;

export const ButtonPayment = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  justify-content: center;
`;

export const NumberCategoryPayment = styled.Text`
  height: 25px;
  width: 25px;

  background-color: #000;
  border-radius: 100px;

  line-height: 25px;
  text-align: center;
  font-size: 15px;
  color: #fff;
`;

export const TextCategoryPayment = styled.Text`
  font-size: 17.5px;
  font-weight: 500;
`;

export const ButtonReview = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  justify-content: center;
`;

export const NumberCategoryReview = styled.Text`
  height: 25px;
  width: 25px;

  background-color: #000;
  border-radius: 100px;

  line-height: 25px;
  text-align: center;
  font-size: 15px;
  color: #fff;
`;

export const TextCategoryReview = styled.Text`
  font-size: 17.5px;
  font-weight: 500;
`;

export const ContentData = styled.ScrollView`
  background-color: #fff;
  padding-bottom: 50px;
  margin-left: 20px;
`;

export const TitleData = styled.Text`
  font-weight: bold;
  font-size: 22.5px;
  margin-top: 25px;
  margin-bottom: 25px;
`;
export const BoxInputs = styled.View`
  width: 90%;
  gap: 10px;
  margin-left: 7.5px;
  margin-bottom: 20px;
`;

export const Names = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;

export const NameAstDiff = styled.Text`
  color: #0bada2;
`;

export const TextInputShipping = styled.TextInput`
  border-width: 1px;
  border-style: solid;
  border-radius: 7.5px;
  border-color: #c5c6c6;
  font-size: 17.5px;
  padding-left: 20px;
  padding-top: 12.5px;
  padding-bottom: 12.5px;
  margin-left: 5px;
`;

export const Footer = styled.View`
  display: flex;
  border-top-color: #f1f1f1;
  border-top-width: 2px;
  border-top-style: solid;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: #f9f9f9;
`;

export const ButtonConfirm = styled.Pressable`
  background-color: #000;
  width: 90%;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 7.5px;
`;

export const TextConfirmButton = styled.Text`
  font-size: 20px;
  text-align: center;
  color: #fff;
`;
