import React from 'react';
import Sidebar from '../../components/Sidebar';
import Container from '../../components/Container';
import Content from '../../components/Content';

export default () => {
  return (
    <Container>
      <Sidebar />
      <Content />
    </Container>
  );
};
