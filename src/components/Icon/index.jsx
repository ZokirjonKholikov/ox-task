import React from 'react';
import PropTypes from 'prop-types';
import IcomoonReact from 'icomoon-react';
import iconSet from '../../assets/icons/design/icons.json';

const Icon = (props) => {
  const { color, size, icon, className } = props;
  // TODO: Needs to change icon names to correct one like invoise === invoice, exel === excel etc.
  return (
    <IcomoonReact
      className={className}
      iconSet={iconSet}
      color={color}
      size={size}
      icon={icon}
    />
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Icon.defaultProps = {
  className: '',
  color: '#262626',
  size: '1.5rem',
};

export default Icon;
