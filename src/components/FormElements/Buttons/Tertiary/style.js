import styled from 'styled-components';
import { buttons } from '../style';

export const Title = styled.span`
  color: #262626;
  margin-left: ${({ icon }) => (icon ? '15px' : 'unset')};
`;

export const Container = styled.button`
  ${buttons};
  border: 1px solid #262626;
  background: transparent;
  cursor: pointer;
  svg {
    path {
      fill: #333333 !important;
    }
  }
  &:focus {
    outline: none;
  }
  &:not(:disabled):focus {
    border-color: #d5031e;
  }
  &:not(:disabled):focus ${Title} {
    color: #d5031e;
  }

  &:not(:disabled):focus svg {
    path {
      fill: red !important;
    }
  }
  &:not(:disabled):hover {
    border-color: #e86868;
  }
  &:not(:disabled):hover svg {
    path {
      fill: red !important;
    }
  }
  &:not(:disabled):hover ${Title} {
    color: #e86868;
  }
  &:not(:disabled):active {
    border-color: #d5031e;
  }
  &:not(:disabled):active svg {
    path {
      fill: red !important;
    }
  }
  &:not(:disabled):active ${Title} {
    color: #d5031e;
  }
  &:disabled {
    border-color: #f5f5f5;
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
