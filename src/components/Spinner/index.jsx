import React from 'react';
import { Container, Spinner, SpinnerBlack } from './style';

// Whole screen spinner
export default (props) => (
  <Container {...props}>
    {props.black ? <SpinnerBlack /> : <Spinner />}
  </Container>
);
