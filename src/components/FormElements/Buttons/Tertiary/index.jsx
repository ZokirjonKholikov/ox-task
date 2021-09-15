import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title } from './style';
import classNames from 'classnames';
import Icon from '../../../Icon';
const TertiaryButton = ({ title, size, icon, iconAlign, ...others }) => (
  <Container className={classNames('body-medium')} size={size} {...others}>
    {iconAlign === 'left' && icon ? <Icon icon={icon} size='16px' /> : ''}
    <Title icon={icon}>{title}</Title>
    {iconAlign === 'right' && icon ? <Icon icon={icon} size='16px' /> : ''}
  </Container>
);

TertiaryButton.propTypes = {
  title: PropTypes.string,
  size: PropTypes.string,
};

TertiaryButton.defaultProps = {
  title: '',
  size: 'medium',
};

export default TertiaryButton;
