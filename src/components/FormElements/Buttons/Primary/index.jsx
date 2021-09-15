import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title } from './style';
import Icon from '../../../Icon';
import classNames from 'classnames';
const PrimaryButton = ({ title, size, icon, iconAlign, color, ...others }) => (
  <Container className={classNames('body-medium')} size={size} {...others}>
    {iconAlign === 'left' && icon ? (
      <Icon style={{ paddingRight: '6px' }} icon={icon} size='16px' />
    ) : (
      ''
    )}
    <Title icon={icon}>{title}</Title>
    {iconAlign === 'right' && icon ? (
      <Icon style={{ paddingLeft: '6px' }} icon={icon} size='16px' />
    ) : (
      ''
    )}
  </Container>
);

PrimaryButton.propTypes = {
  title: PropTypes.string,
  size: PropTypes.string,
};

PrimaryButton.defaultProps = {
  title: '',
  size: 'medium',
};

export default PrimaryButton;
