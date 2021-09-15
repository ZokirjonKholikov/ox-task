import styled, { css } from 'styled-components';
import {
  normal,
  getFontSize,
  getIconPadding,
  getHeight,
  getBorderRadius
} from '../style';

export const Left = css`
  border-top-left-radius: ${getBorderRadius};
  border-bottom-left-radius: ${getBorderRadius};
`;
export const Right = css`
  border-top-right-radius: ${getBorderRadius};
  border-bottom-right-radius: ${getBorderRadius};
`;

export const getIconPosition = ({ position }) => {
  switch (position) {
  case 'right' || 'Right':
    return Right;
  case 'left' || 'Left':
    return Left;
  default:
    return Left;
  }
};
export const getInputPosition = ({ position }) => {
  switch (position) {
  case 'right':
    return Left;
  case 'left':
    return Right;
  default:
    return Right;
  }
};

export const getColor = ({ white, isTheSame }) => {
  if (white && isTheSame) {
    return '#ffffff';
  } if (isTheSame) {
    return '#f5f5f5';
  }
  return '#E9E9E9';
};

export const getBorderColor = ({ white, isTheSame }) => {
  if (white && isTheSame) {
    return '#ffffff';
  } if (isTheSame) {
    return '#f5f5f5';
  }
  return '#E9E9E9';
};

export const Input = styled.input`
  ${normal}
  padding: ${({ isTheSame }) => (isTheSame ? '0px' : '0px 25px')};
  background:${({ white }) => (white ? '#ffffff' : '#F5F5F5')};
  
  &:focus {
    outline: none;
    color: #9d9d9d;
    border: 1px solid  ${getBorderColor};
  }
  &:not(:disabled):focus {
    color: #9d9d9d;
    border: 1px solid ${getBorderColor};
  }
  &:not(:focus)&:not(:disabled):hover {
    color: #9d9d9d;
    background: ${({ white }) => (white ? '#ffffff' : '#F5F5F5')};
  }
  &:not(:disabled):active {
    color: ${({ white }) => (white ? '#262626' : '#9d9d9d')};
  }
  &:active {
    color: ${({ white }) => (white ? '#262626' : '#9d9d9d')};
  }
  &:disabled {
    color: #c4c4c4;
    background: ${({ white }) => (white ? '#e9e9e9' : '#f5f5f5')};
    cursor: not-allowed;
  }
  &::placeholder {
    color: #9d9d9d;
  }
  ${getInputPosition};
  width: 100% !important;
  
  
/*   
  
  
  &:not(:disabled):focus {
    color: #9d9d9d;
    outline: none;
    border: 0px solid #e9e9e9;
    background: #f5f5f5;

  }
  &:focus {
    color: #9d9d9d;
    outline: none;
    border: 0px solid #e9e9e9;
    background: #f5f5f5;

  }
  &:not(:focus)&:not(:disabled):hover {
    color: #262626;
    background: #f5f5f5;
   
  } */
  
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const IconContainerLeft = styled.div`
  ${getIconPosition};
  font-size: ${getFontSize};
  display: ${({ position }) => (position === 'left' ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  padding: ${getIconPadding};
  background: ${getColor};
  cursor: pointer;
  max-height: ${getHeight};
`;

export const IconContainerRight = styled.div`
  ${getIconPosition};
  font-size: ${getFontSize};
  display: ${({ position }) => (position === 'right' ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  background: ${getColor};
  cursor: pointer;
  padding: ${getIconPadding};
  max-height: ${getHeight};
`;
