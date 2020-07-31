import React from 'react';
import PropTypes from 'prop-types';
import { Input, FormFieldWrapper, Label } from './styles';

function FormField({
  type, labelDesc, value, onChange, name,
}) {
  const fieldId = `id${name}`;
  const isTextArea = type === 'textarea';
  const tag = isTextArea ? 'textarea' : 'input';
  const hasValue = Boolean(value.length);
  return (
    <FormFieldWrapper>
      <Label
        htmlFor={fieldId}
      >
        <Input
          as={tag}
          id={fieldId}
          type={type}
          value={value}
          name={name}
          hasValue={hasValue}
          onChange={onChange}
        />
        <Label.Text>
          {labelDesc}

        </Label.Text>
      </Label>
    </FormFieldWrapper>

  );
}
FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
};
FormField.propTypes = {
  type: PropTypes.string,
  labelDesc: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
};

export default FormField;
