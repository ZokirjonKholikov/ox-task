/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  Container,
  Input,
  IconContainerLeft,
  IconContainerRight
} from './style';

import Icon from '../../../Icon';

const NoramlInput = ({
  placeholder,
  disabled,
  size,
  icon,
  type,
  position,
  white,
  isTheSame,
  ...others
}) => (
  <Container>
    <IconContainerLeft
      isTheSame={isTheSame}
      white={white}
      size={size}
      position={position}
      id="plus-input-icon-left"
    >
      {/* <Icon /> */}
      {position === 'left' && (
        <Icon
          icon={icon}
          color={isTheSame ? '#9D9D9D' : '#262626'}
          size="1rem"
        />
      )}
    </IconContainerLeft>
    <Input
      position={position}
      type={type}
      white={white}
      disabled={disabled}
      size={size}
      isTheSame={isTheSame}
      {...others}
      placeholder={placeholder}
      className={classNames('body-medium', 'weight-light')}
    />
    <IconContainerRight
      isTheSame={isTheSame}
      white={white}
      size={size}
      position={position}
      id="plus-input-icon-right"
    >
      {/* <PlusIcon /> */}
      {position === 'right' && (
        <Icon
          icon={icon}
          color={isTheSame ? '#9D9D9D' : '#262626'}
          size="1rem"
        />
      )}
    </IconContainerRight>
  </Container>
);

NoramlInput.propTypes = {
  size: PropTypes.string,
  position: PropTypes.string
};

NoramlInput.defaultProps = {
  size: 'medium',
  position: 'left'
};

export default NoramlInput;
