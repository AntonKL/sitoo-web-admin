/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'antd';

const renderField = ({
  input: { type, placeholder, value }, label, input, meta, ...rest
}) => {
  const error = (meta.error && meta.touched && <span>{meta.error}</span>);
  const validateStatus = () => {
    let fieldStatus;
    if (meta.error && meta.touched) fieldStatus = 'error';
    if (meta.valid && meta.touched) fieldStatus = 'success';
    return fieldStatus;
  };
  return (
    <Form.Item
      label={label}
      hasFeedback
      validateStatus={validateStatus()}
      help={error}
    >
      <Input
        value={value}
        type={type}
        placeholder={placeholder}
        {...rest}
        {...input}
      />
    </Form.Item>
  );
};

renderField.propTypes = {
  input: PropTypes.shape({
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
  meta: PropTypes.shape({
    error: PropTypes.string,
    valid: PropTypes.bool,
    touched: PropTypes.bool,
  }).isRequired,
  label: PropTypes.string.isRequired,
};

export default renderField;
