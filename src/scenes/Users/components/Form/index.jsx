import React from 'react';
import { Field } from 'react-final-form';
import renderField from './helpers/renderField';

const UserForm = () => (
  <>
    <Field
      name="firstName"
      component={renderField}
      type="text"
      placeholder="First name"
      label="First name"
    />
    <Field
      name="lastName"
      component={renderField}
      type="text"
      placeholder="Last name"
      label="Last name"
    />
    <Field
      name="email"
      component={renderField}
      type="email"
      placeholder="Email"
      label="Email"
    />
  </>
);

export default UserForm;
