/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ImageWrap, NameText } from './style';
import { getRandColor } from '../../../utils/random-color';
import { getInitials } from '../../../utils/generate-intials';

export const DynamicImage = ({ imgSrc, name = '', shape, size, ...props }) => {
  const [color] = useState(getRandColor());
  return (
    <ImageWrap {...props} imgSrc={imgSrc} shape={shape} color={color}>
      {imgSrc ? (
        <img src={imgSrc} alt={name} />
      ) : (
        // null
        <NameText size={size}>{getInitials(name)}</NameText>
      )}
    </ImageWrap>
  );
};
DynamicImage.propTypes = {
  name: PropTypes.string.isRequired,
  shape: PropTypes.string,
};

DynamicImage.defaultProps = {
  shape: 'round',
};
