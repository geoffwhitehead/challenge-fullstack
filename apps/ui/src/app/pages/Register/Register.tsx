import { useRegisterUser } from 'apps/ui/src/hooks/useRegisterUser';
import { useFormik } from 'formik';
import React from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png'];
const FILE_SIZE = 1000000 * 3; // in bytes;

export const RegisterPage: React.FC<{}> = () => {
  const [postUser, isLoading, hasErrored] = useRegisterUser();

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
        .test('fileSize', 'File Size is too large', (value) => {
          console.log(`1value`, value);
          return value.size <= FILE_SIZE;
        })
        .test('fileType', 'Unsupported File Format', (value) => {
          console.log(`2value`, value);

          return SUPPORTED_FORMATS.includes(value.type);
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
    onSubmit: (values) => {
      console.log(`values`, values);
      postUser(values);
    },
  });

  console.log(`formik.values`, formik.values);
  console.log(`formik.errors`, formik.errors);
  return (
    <form onSubmit={formik.handleSubmit}>
      <Field>
        <StyledLabel htmlFor="firstName">First Name</StyledLabel>

        <input
          id="firstName"
          type="text"
          {...formik.getFieldProps('firstName')}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <ValidationError>{formik.errors.firstName}</ValidationError>
        ) : null}
      </Field>

      <Field>
        <StyledLabel htmlFor="photo">Photo</StyledLabel>

        <input
          id="photo"
          type="file"
          accept="image/*"
          name="photo"
          onChange={(e) => {
            e?.target?.files?.[0] &&
              formik.setFieldValue('photo', e.target.files[0]);
          }}
        />
        {formik.errors.photo ? (
          <ValidationError>{formik.errors.photo}</ValidationError>
        ) : null}
      </Field>

      <Field>
        <StyledLabel htmlFor="lastName">Last Name</StyledLabel>

        <input
          id="lastName"
          type="text"
          {...formik.getFieldProps('lastName')}
        />

        {formik.touched.lastName && formik.errors.lastName ? (
          <ValidationError>{formik.errors.lastName}</ValidationError>
        ) : null}
      </Field>

      <Field>
        <StyledLabel htmlFor="phone">Phone</StyledLabel>

        <input id="phone" type="text" {...formik.getFieldProps('phone')} />

        {formik.touched.phone && formik.errors.phone ? (
          <ValidationError>{formik.errors.phone}</ValidationError>
        ) : null}
      </Field>

      <Field>
        <StyledLabel htmlFor="email">Email Address</StyledLabel>

        <input id="email" type="text" {...formik.getFieldProps('email')} />

        {formik.touched.email && formik.errors.email ? (
          <ValidationError>{formik.errors.email}</ValidationError>
        ) : null}
      </Field>

      {hasErrored ? <ValidationError>Failed to upload</ValidationError> : null}

      <button
        type="submit"
        disabled={!(formik.isValid && formik.dirty) || isLoading}
      >
        Submit
      </button>
    </form>
  );
};

const Field = styled.div`
  padding: 0.2rem;
`;

const StyledLabel = styled.label`
  display: inline-block;
  width: 150px;
`;

const ValidationError = styled.div`
  font-size: 12px;
  color: #cd5c5c;
`;
