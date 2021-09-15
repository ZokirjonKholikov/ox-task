import styled, { css } from 'styled-components';
import {
  getType, label, helperText, getBorderRadius
} from '../style';

const search = css`
  background-color: white;
  &:focus {
    /* outline: none !important;
    border: none !important; */
  }
`;

export const Input = styled.input`
  ${getType};
  border-radius: ${getBorderRadius};

  ${({ search: isSearch }) => isSearch && search} ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Label = styled.div`
  ${label}
  color: #262626;
`;

export const Container = styled.div`
  /* margin-bottom: 15px; */
  /* margin-bottom: 15px; */
  width: 100%;
`;
export const Helper = styled.div`
  ${helperText}
`;
