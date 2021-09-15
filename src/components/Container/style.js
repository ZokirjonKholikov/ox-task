import styled, { css } from 'styled-components';

const common = css`
  width: 100vw;
  height: 100vh;
  display: grid;
`;

const tabletDesktop = css`
  ${common};
  grid-template-areas: 'sidebar content';
  grid-template-columns: auto 1fr;
  height: 100vh;
`;

export const DesktopContainer = styled.div`
  ${tabletDesktop};
`;
