import styled from 'styled-components';
import { buttons } from '../style';

export const Title = styled.span`
  color: #f24142;
  margin-left: ${({ icon }) => (icon ? '15px' : 'unset')};
`;

export const Container = styled.button`
  ${buttons}
  background: #FFE9ED;
  cursor: pointer;
  svg {
    path {
      fill: #f24142 !important;
    }
  }
  &:focus {
    outline: none;
  }
  &:not(:disabled):focus {
    background: #f29392;
  }
  &:not(:disabled):focus svg {
    path {
      fill: white !important;
    }
  }
  &:not(:disabled):focus ${Title} {
    color: white;
  }
  &:not(:disabled):hover {
    background: #ffc9ce;
  }
  &:not(:disabled):hover svg {
    path {
      fill: white !important;
    }
  }
  &:not(:disabled):hover ${Title} {
    color: white;
  }
  &:not(:disabled):active {
    background: #f29392;
  }
  &:not(:disabled):active svg {
    path {
      fill: white !important;
    }
  }
  &:not(:disabled):active ${Title} {
    color: white;
  }
  &:disabled {
    background: #f5f5f5;
  }
  &:disabled ${Title} {
    color: #c4c4c4;
  }
  &:disabled svg {
    path {
      fill: #c4c4c4 !important;
    }
  }
`;
export const SomeDiv = styled.div`
  color: red;
  background: black;
`;
