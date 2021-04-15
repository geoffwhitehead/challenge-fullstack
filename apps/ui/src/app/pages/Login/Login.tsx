import { useLogin } from 'apps/ui/src/hooks/useLogin';
import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { Error, Field, Label } from '../../components/Form';

export const RegisterPage: React.FC<{}> = () => {
  const [login, isLoading, hasErrored] = useLogin();

  const formik = useFormik({
    initialValues: {
      password: '',
      email: '',
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),

      email: Yup.string().email('Invalid email').required('Required'),
    }),
    onSubmit: (values) => login(values),
  });

  console.log(`formik.values`, formik.values);
  console.log(`formik.errors`, formik.errors);
  return (
    <form onSubmit={formik.handleSubmit}>
      <Field>
        <Label htmlFor="email">Email Address</Label>

        <input id="email" type="text" {...formik.getFieldProps('email')} />

        {formik.touched.email && formik.errors.email ? (
          <Error>{formik.errors.email}</Error>
        ) : null}
      </Field>

      <Field>
        <Label htmlFor="password">Password</Label>

        <input
          id="password"
          type="password"
          {...formik.getFieldProps('password')}
        />

        {formik.touched.password && formik.errors.password ? (
          <Error>{formik.errors.password}</Error>
        ) : null}
      </Field>

      {hasErrored ? <Error>Failed to upload</Error> : null}

      <button
        type="submit"
        disabled={!(formik.isValid && formik.dirty) || isLoading}
      >
        Submit
      </button>
    </form>
  );
};
