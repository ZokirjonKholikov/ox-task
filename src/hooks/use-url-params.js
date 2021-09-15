import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export const useUrlParams = (param) => {
  const {location} = useHistory();
  const [urlParams, setUrlParams] = useState(null);
  const [pickupType, setPickupType] = useState(null);

  const generateUrlParams = useCallback(() => {
    const paramsString = location.search;
    const searchParams = new URLSearchParams(paramsString);

    if (searchParams.has('pickupType')) {
      setPickupType(searchParams.get('pickupType'));
    } else {
      setPickupType(null);
    }

    if (Array.isArray(param) && param.length) {
      param.forEach((item) => searchParams.delete(item));
    } else if (typeof param === 'string') {
      searchParams.delete(param);
    }

    setUrlParams(searchParams.toString());
  }, [location.search, param]);

  useEffect(() => {
    generateUrlParams();
  }, [location.search, generateUrlParams]);

  return {
    pickupType,
    urlParams
  };
};
