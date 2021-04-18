import { useFormikContext } from 'formik';
import React from 'react';
import { Error, Field, Label } from '../Form';

type CustomFieldProps = {
  fieldName: string;
  label: string;
  type: string;
};
export const FormikField: React.FC<CustomFieldProps> = ({
  fieldName,
  label,
  type,
}) => {
  const formik = useFormikContext();

  return (
    <Field>
      <Label htmlFor={fieldName}>{label}</Label>

      <input id={fieldName} type={type} {...formik.getFieldProps(fieldName)} />

      {formik.touched[fieldName] && formik.errors[fieldName] ? (
        <Error>{formik.errors[fieldName]}</Error>
      ) : null}
    </Field>
  );
};
