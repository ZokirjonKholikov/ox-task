import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';
import { Container, Title, IconContainer } from './style';
import Icon from '../../Icon';
import { useDispatch } from 'react-redux';
import { setTitle } from '../../../redux/modules/nav/actions';
const Item = ({ title, path, icon }) => {
  const [hovered, setHovered] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const textClassName = classNames(
    'text-black-800',
    'body-large',
    'weight-regular'
  );

  return (
    <>
      <Container
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        hovered={hovered}
        onClick={() => {
          dispatch(setTitle(title));
          history.push(path);
        }}
      >
        <IconContainer>
          <Icon icon={icon} color='#262626' size='1.5rem' />
        </IconContainer>
        <Title className={textClassName}>{title}</Title>
      </Container>
    </>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default Item;
