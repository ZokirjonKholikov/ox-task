import React, { createContext, useState, useEffect } from 'react';
import * as sizes from '../utils/responsive';
import * as devices from '../constants/devices';

const viewportContext = createContext({});

// eslint-disable-next-line react/prop-types
export const ViewportProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [device, setDevice] = useState('');

  const handleWindowResize = () => {
    if (window.matchMedia(sizes.MOBILE).matches) setDevice(devices.MOBILE);
    if (window.matchMedia(sizes.TABLET).matches) setDevice(devices.TABLET);
    if (window.matchMedia(sizes.DESKTOP).matches) setDevice(devices.DESKTOP);
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height, device }}>
      {children}
    </viewportContext.Provider>
  );
};

export const useWindowSize = () => {
  const { width, height, device } = React.useContext(viewportContext);
  return { width, height, device };
};
