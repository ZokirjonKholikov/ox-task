import styled, { css } from 'styled-components';
import { ReactComponent as CollapseIcon } from '../../../assets/icons/sidebar-collapse.svg';

const common = css`
  cursor: pointer;
  fill: #262626;
`;

export const Header = styled.div`
  background: white;
  border-bottom: 2px solid #f5f5f5;
  grid-area: header;
  display: grid;
  place-items: center;
  height: var(--navbar-height);
  box-sizing: border-box;
  padding: 0 var(--sidebar-padding-x);
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
export const LogoContainer = styled.div`
  width: 45%;
`;
export const LogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const CollapseButton = styled(CollapseIcon)`
  ${common}
`;

