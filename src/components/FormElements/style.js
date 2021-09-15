import styled from 'styled-components';

export const getColor = (props) => {
  if (props.value) {
    return '#262626 !important';
  } else {
    return '#9D9D9D !important';
  }
};

export const Container = styled.div`
  background: white;
  height: 100%;
  padding: 20px;
`;

export const InputView = styled.input`
  background-color: #f8f8f8;
  border-radius: 8px;
  line-height: 18px;
  padding: 14px 24px;
  border: 0;
  outline: none;
  font-size: 12px;
  font-weight: 500;
  width: 100%;
  color: ${({ cl }) => cl};
  &::placeholder {
    color: #7e8299;
  }
  box-sizing: border-box;
`;

export const DatepickerInput = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ white }) => (white ? '#FFFFFF' : '#f8f8f8')};
  border-radius: 8px;
  color: ${({ white }) => (white ? '#262626' : '#7E8299')};
  line-height: 18px;
  height: 43px;
  padding: 0px 24px;
  border: 0;
  outline: none;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
  svg {
    /* width: ${({ value }) => (value ? 'unset' : '100%')}; */
  }
  path {
    fill: ${getColor};
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: ${({ type }) => (type === 'suffix' ? '15px' : 'auto')};
  left: ${({ type }) => (type === 'prefix' ? '15px' : 'auto')};
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
