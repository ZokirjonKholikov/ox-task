import styled from 'styled-components';
import { device } from '../../../utils/responsive';

export const ContentBody = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  @media ${device.mobile} {
    border-radius: 0;
  }
`;
