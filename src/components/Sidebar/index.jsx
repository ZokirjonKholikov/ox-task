import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './Header';
import Body from './Body';
import { BodyContainer } from './style';
import Spinner from '../Spinner';
import ContainerLayout from './Wrapper';

export default () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    setLoading(false);
  }, [dispatch]);

  if (loading) return <Spinner />;

  return (
    <ContainerLayout>
      <Header />
      <BodyContainer>
        <Body />
      </BodyContainer>
    </ContainerLayout>
  );
};
