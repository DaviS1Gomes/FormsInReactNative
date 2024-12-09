import React from 'react';
// import * as yup from 'yup';
import * as S from '../screens/ShippingScreen/Style';
import Inputs from './Inputs';
import {useFormik} from 'formik';
import Footer from './Footer';

// import ButtonConfirm from './ButtonConfirm';
// import {Pressable} from 'react-native';

const ContentData: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      country: '',
      fullName: '',
      streetAdd: '',
      numberAdd: '',
      others: '',
    },
    onSubmit: values => {
      console.log('Valores enviados:', values);
    },
  });

  return (
    <S.ContentData>
      <S.TitleData>Enter your shipping address</S.TitleData>
      <Inputs
        placeholder={'Ex: Brazil'}
        name={'Country'}
        onChangeText={formik.handleChange('country')}
        value={formik.values.country}
      />
      <Inputs
        placeholder={'Ex: Luke Skywalker'}
        name={'Full Name'}
        onChangeText={formik.handleChange('fullName')}
        value={formik.values.fullName}
      />
      <Inputs
        placeholder={'Ex: Wolf Pen Road'}
        name={'Street Address'}
        onChangeText={formik.handleChange('streetAdd')}
        value={formik.values.streetAdd}
      />
      <Inputs
        placeholder={'Ex: 1313'}
        name={'Number Address'}
        onChangeText={formik.handleChange('numberAdd')}
        value={formik.values.numberAdd}
      />
      <Inputs
        placeholder={'Ex: Reference'}
        name={'Others'}
        onChangeText={formik.handleChange('others')}
        value={formik.values.others}
      />
      <Footer onPresslable={formik.handleSubmit} />
    </S.ContentData>
  );
};

export default ContentData;
