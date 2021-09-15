import styled from 'styled-components';

export const ScrollHost = styled.div`
  overflow: ${({ isShowBar }) => (isShowBar ? 'auto' : 'hidden')};
  background: ${({ background }) => (background ? background : 'transparent')};
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  height: 100%;
`;

export const ScrollHostContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
`;

export const ScrollBar = styled.div`
  width: 4px;
  right: 0;
  top: 0px;
  position: absolute;
  bottom: 1px solid black;
  background: transparent;
  border-radius: 8px;
  height: 100%;
`;

export const ScrollThumb = styled.div`
  width: 4px;
  height: 20px;
  margin-left: 0px;
  position: absolute;
  border-radius: 8px;
  opacity: 1;
  top: 0;
  margin-right: 4px;
  background: rgba(73, 75, 116, 0.1);
  &:hover {
    background: rgba(73, 75, 116, 1);
  }
`;
