import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Container, Content } from './style';
import Navbar from '../Navbar';
import { childRoutes } from '../../routes/sidebar-elements';

export default () => {
  return (
    <Container>
      <Navbar />
      <Content>
        {childRoutes.map(({ path, component }, index) => (
          <Route exact key={`${index + 1}`} path={path} component={component} />
        ))}
        <Redirect from='*' to='/' />
      </Content>
    </Container>
  );
};
