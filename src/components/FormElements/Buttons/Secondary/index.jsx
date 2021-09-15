import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title } from './style';
import classNames from 'classnames';
import Icon from '../../../Icon';

const SecondaryButton = ({
  title,
  size,
  icon,
  iconAlign,
  color,
  ...others
}) => (
  <Container
    className={classNames('body-medium', 'primary-900')}
    size={size}
    {...others}
  >
    {iconAlign === 'left' && icon ? <Icon icon={icon} size='16px' /> : ''}
    <Title icon={icon}>{title}</Title>
    {iconAlign === 'right' && icon ? <Icon icon={icon} size='16px' /> : ''}
  </Container>
);

SecondaryButton.propTypes = {
  title: PropTypes.string,
  size: PropTypes.string,
};

SecondaryButton.defaultProps = {
  title: '',
  size: 'medium',
};

export default SecondaryButton;
