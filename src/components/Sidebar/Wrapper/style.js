import styled, { css } from 'styled-components';

const tabletDesktop = css`
  background: var(--sidebar-background);
  width: ${({ collapsed }) =>
    collapsed ? 'var(--sidebar-collapsed-width)' : 'var(--sidebar-width)'};
  transition: 0.2s width;
  grid-area: sidebar;
  position: relative;
  display: grid;
  z-index: 11;
  grid-template-areas:
    'header'
    'body';
  grid-template-rows: 76px calc(100vh - 76px);
  grid-template-columns: 1fr;
  overflow: hidden;
`;

export const DesktopSidebar = styled.div`
  ${tabletDesktop}
`;
