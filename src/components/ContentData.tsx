import React from 'react';
import * as Yup from 'yup';
import * as S from '../screens/ShippingScreen/Style';
import Inputs from './Inputs';
import {useFormik} from 'formik';
// import Footer from './Footer';
// import {Text, TouchableOpacity} from 'react-native';

// import ButtonConfirm from './ButtonConfirm';
// import {Pressable} from 'react-native';

const ContentData: React.FC = () => {
  const contanctSchema = Yup.object().shape({
    country: Yup.string().required('Invalid Text!'),
    fullName: Yup.string().required('Invalid Text!'),
    streedAdd: Yup.string().required('Invalid Text!'),
    numberAdd: Yup.number().required().integer().positive(),
    other: Yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      country: '',
      fullName: '',
      streetAdd: '',
      numberAdd: '',
      others: '',
    },
    validationSchema: contanctSchema,
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
      <S.ButtonConfirm
        onPress={() => {
          formik.handleSubmit();
        }}>
        <S.ViewButton>
          <S.TextConfirmButton>Confirm</S.TextConfirmButton>
        </S.ViewButton>
      </S.ButtonConfirm>
      {/* <Footer onPresslable={formik.handleSubmit} /> */}
    </S.ContentData>
  );
};

export default ContentData;
