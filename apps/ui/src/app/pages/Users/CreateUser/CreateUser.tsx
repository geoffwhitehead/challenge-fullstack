import { useCreateUser } from 'apps/ui/src/hooks/useCreateUser';
import { useFormik } from 'formik';
import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import * as Yup from 'yup';
import { Button } from '../../../components/Button/Button';
import { Error, Field, Label } from '../../../components/Form';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const SUPPORTED_FORMATS = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif'];
const FILE_SIZE = 1000000 * 3; // in bytes;

export const CreateUserPage: React.FC<{}> = () => {
  const [postUser, isLoading, hasErrored] = useCreateUser();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      photo: null as File,
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
      photo: Yup.mixed()
        .required()
        .test('fileSize', 'File Size is too large', (value) => {
          return value?.size && value.size <= FILE_SIZE;
        })
        .test('fileType', 'Unsupported File Format', (value) => {
          return value?.type && SUPPORTED_FORMATS.includes(value.type);
        }),
      lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      phone: Yup.string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .required('Required'),
    }),
    onSubmit: async (values) => {
      await postUser(values);
      history.push('/users');
    },
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <NavLink to="/users">
        <Button>Go back</Button>
      </NavLink>
      <Field>
        <Label htmlFor="firstName">First Name</Label>

        <input
          id="firstName"
          type="text"
          {...formik.getFieldProps('firstName')}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <Error>{formik.errors.firstName}</Error>
        ) : null}
      </Field>

      <Field>
        <Label htmlFor="lastName">Last Name</Label>

        <input
          id="lastName"
          type="text"
          {...formik.getFieldProps('lastName')}
        />

        {formik.touched.lastName && formik.errors.lastName ? (
          <Error>{formik.errors.lastName}</Error>
        ) : null}
      </Field>

      <Field>
        <Label htmlFor="phone">Phone</Label>

        <input id="phone" type="text" {...formik.getFieldProps('phone')} />

        {formik.touched.phone && formik.errors.phone ? (
          <Error>{formik.errors.phone}</Error>
        ) : null}
      </Field>

      <Field>
        <Label htmlFor="email">Email Address</Label>

        <input id="email" type="text" {...formik.getFieldProps('email')} />

        {formik.touched.email && formik.errors.email ? (
          <Error>{formik.errors.email}</Error>
        ) : null}
      </Field>

      <Field>
        <Label htmlFor="photo">Photo</Label>

        <input
          id="photo"
          type="file"
          accept="image/*"
          name="photo"
          onChange={(e) => {
            e?.target?.files?.[0] &&
              formik.setFieldValue('photo', e.target.files[0]);
            formik.setFieldTouched('photo');
          }}
        />
        {formik.touched.photo && formik.errors.photo ? (
          <Error>{formik.errors.photo}</Error>
        ) : null}
      </Field>

      {hasErrored ? <Error>Failed to upload</Error> : null}

      <Button
        type="submit"
        disabled={!(formik.isValid && formik.dirty) || isLoading}
      >
        Submit
      </Button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  padding: 0.5rem 0rem;
`;
