import { Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { Button } from '../../components/Button/Button';
import { Error } from '../../components/Form';
import { FormikField } from '../../components/FormikField/FormikField';
import { useLogin } from '../../hooks/useLogin';

export const LoginPage: React.FC = () => {
  const { login, isLoading, hasErrored } = useLogin();

  const formikOptions = {
    initialValues: {
      password: '',
      email: '',
    },
    validationSchema: Yup.object().shape({
      password: Yup.string()
        .required('Required')
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          'Must contain 8 characters, one uppercase, one lowercase, one number and one special character'
        ),

      email: Yup.string().email('Invalid email').required('Required'),
    }),
    onSubmit: (values) => login(values),
  };

  return (
    <Formik {...formikOptions}>
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <FormikField fieldName="email" label="Email Address" type="text" />
          <FormikField fieldName="password" label="Password" type="password" />

          {hasErrored ? <Error>Failed to login</Error> : null}

          <Button type="submit" disabled={!formik.isValid || isLoading}>
            Submit
          </Button>
        </form>
      )}
    </Formik>
  );
};
