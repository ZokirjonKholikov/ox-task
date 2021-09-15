import React from 'react';
import PropTypes from 'prop-types';
import { Container, Input, Label, Helper } from './style';

import classNames from 'classnames';

const NoramlInput = ({
  placeholder,
  disabled,
  size,
  helperText,
  label,
  type,
  ...others
}) => (
  <Container>
    <Label type={type} size={size}>
      {label}
    </Label>
    <Input
      type={type}
      disabled={disabled}
      size={size}
      placeholder={placeholder}
      {...others}
      className={classNames('body-medium', 'weight-regular')}
    />
    <Helper type={type} size={size}>
      {helperText}
    </Helper>
  </Container>
);

NoramlInput.propTypes = {
  label: PropTypes.string,
  size: PropTypes.string,
};

NoramlInput.defaultProps = {
  label: '',
  size: 'medium',
};

export default NoramlInput;
