import React from 'react';
import { ModalContainer } from '../style';

export default ({ message }) => {
  return (
    <ModalContainer className='text-black-500'>
      <span>(ツ)</span>
      <p>{message}</p>
    </ModalContainer>
  );
};
