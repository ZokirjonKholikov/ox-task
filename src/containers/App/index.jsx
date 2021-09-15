import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignIn from '../../views/Auth/SignIn';
import { Container } from './style';
import appSelector from '../../redux/selectors/app';
import Home from '../Home';
export default () => {
  const { token, showModal } = useSelector(appSelector, shallowEqual);

  const publicRoutes = (
    <Container>
      <Switch>
        <Route exact path='/signin' component={SignIn} />
        <Redirect from='*' to='/signin' />
      </Switch>
    </Container>
  );

  const protectedRoutes = (
    <Container show={showModal}>
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </Container>
  );

  return token ? protectedRoutes : publicRoutes;
};
