import React from 'react';
import * as Yup from 'yup';
import * as A from '../ButtonConfirm/Style';
import * as S from './Style';
import Inputs from '../Inputs/Inputs';
import {useFormik} from 'formik';

const ContentData: React.FC = () => {
  const contanctSchema = Yup.object().shape({
    fullName: Yup.string().required('Required!'),
    country: Yup.string().required('Required!'),
    streedAdd: Yup.string().required('Required!'),
    numberAdd: Yup.number().required('Required!').integer().positive(),
    other: Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      fullName: '',
      country: '',
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
        placeholder={'Ex: Luke Skywalker'}
        name="Full Name"
        onChangeText={formik.handleChange('fullName')}
        value={formik.values.fullName}
        formikError={formik.errors.fullName}
        formikTouched={formik.touched.fullName}
      />
      <Inputs
        placeholder={'Ex: Brazil'}
        name="Country"
        onChangeText={formik.handleChange('country')}
        value={formik.values.country}
        formikError={formik.errors.country}
        formikTouched={formik.touched.country}
      />

      <Inputs
        placeholder={'Ex: Wolf Pen Road'}
        name="Street Address"
        onChangeText={formik.handleChange('streetAdd')}
        value={formik.values.streetAdd}
        formikError={formik.errors.streetAdd}
        formikTouched={formik.touched.streetAdd}
      />

      <Inputs
        placeholder={'Ex: 1313'}
        name="Number Address"
        onChangeText={formik.handleChange('numberAdd')}
        value={formik.values.numberAdd}
        formikError={formik.errors.numberAdd}
        formikTouched={formik.touched.numberAdd}
      />
      <Inputs
        placeholder={'Ex: Reference'}
        name="Others"
        onChangeText={formik.handleChange('others')}
        value={formik.values.others}
        formikError={formik.errors.others}
        formikTouched={formik.touched.others}
      />
      <A.ButtonConfirm
        onPress={() => {
          formik.handleSubmit();
        }}>
        <A.TextConfirmButton>Confirm</A.TextConfirmButton>
      </A.ButtonConfirm>
      {/* <Footer onPresslable={formik.handleSubmit} /> */}
    </S.ContentData>
  );
};

export default ContentData;
