import styled from 'styled-components/native';

export const Button = styled.Pressable`
  flex-direction: row;
  align-items: center;
  gap: 5px;
  justify-content: center;
`;

export const NumberCategory = styled.Text`
  height: 25px;
  width: 25px;

  background-color: #000;
  border-radius: 100px;

  line-height: 25px;
  text-align: center;
  font-size: 15px;
  color: #fff;
`;

export const TextCategory = styled.Text`
  font-size: 17.5px;
  font-weight: 500;
`;
