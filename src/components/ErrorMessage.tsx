import React from 'react';
import {View, Text} from 'react-native';

interface CustomPropsError {
  formikError: string | undefined;
  formikTouched: boolean | undefined;
}

const ErrorMessage: React.FC<CustomPropsError> = ({
  formikError,
  formikTouched,
}) => {
  return (
    <View>
      {formikError && formikTouched ? <Text>{formikError}</Text> : null}
    </View>
  );
};

export default ErrorMessage;
