import styled, { css } from 'styled-components';
import { device } from '../../utils/responsive';

const mobileContainer = css`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
`;

const desktopContainer = css`
  display: grid;
  position: relative;
  height: 100vh;
  grid-template-columns: ${({ collapsed }) => (collapsed ? 'var(--sidebar-collapsed-width)' : 'var(--sidebar-width)')} 1fr;
`;

const tabledContainer = css`
  display: grid;
  position: relative;
  height: 100vh;
  grid-template-columns: ${({ collapsed }) => (collapsed ? 'var(--sidebar-collapsed-width)' : 'var(--sidebar-width)')} 1fr;
`;

const desktopLayout = css`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
  background: #F5F5F8;
  transition: .2s ease-in-out;
  display: grid;
  grid-template-rows: var(--navbar-height) 1fr;
  z-index: 999;
`;

const othersLayout = css`
  display: flex;
  max-width: calc(100% - var(--sidebar-collapsed-width));
  min-width: calc(100% - var(--sidebar-width));
  margin-top: var(--navbar-height);
  margin-left: ${({ collapsed }) => (collapsed ? 'var(--sidebar-collapsed-width)' : 'var(--sidebar-width)')};
  width: 100%;
  flex-direction: column;
  background: #F5F5F8;
  transition: .2s ease-in-out;
`;

const desktopContent = css`
  height: 100%;
  position: relative;
  overflow: scroll;
`;

const othersContent = css`
  min-height: calc(100vh - (var(--navbar-height)));
  position: relative;
`;

export const Container = styled.div`
    @media ${device.mobile} {
        ${mobileContainer}
    }
    @media ${device.tablet} {
        ${tabledContainer}
    }
    @media ${device.desktop} {
        ${desktopContainer}
    }
`;

export const Layout = styled.div`
  @media ${device.mobile} {
      ${othersLayout}
  }
  @media ${device.tablet} {
      ${othersLayout}
  }
  @media ${device.desktop} {
      ${desktopLayout}
  }
`;

export const Content = styled.div`
  @media ${device.mobile} {
        ${othersContent}
  }
  @media ${device.tablet} {
      ${othersContent}
  }
  @media ${device.desktop} {
      ${desktopContent}
  }
`;
