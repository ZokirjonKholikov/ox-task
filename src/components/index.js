import styled from 'styled-components';
import { device } from '../utils/responsive';

export const OrdersNavContainer = styled.div`
  display: flex;
  height: var(--home-secondarynav-height);
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 6px 12px #494b740a;
  align-items: center;
  @media ${device.mobile} {
    padding: 0 16px;
  } ;
`;

export const OrdersNavTitle = styled.span`
  font-family: Poppins;
  font-weight: 600;
  font-size: 16px;
  text-align: left;
  color: #181c32;
  padding-left: 48px;
`;

export const OrdersBody = styled.div`
  margin: var(--home-secondarynav-content-padding);
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 6px 12px #494b740a;
  border-radius: 8px;
  opacity: 1;
  display: ${({ flex }) => flex && 'flex'};
  flex-direction: ${({ direction, flex }) => !!flex && direction};
  align-items: ${({ align, flex }) => !!flex && align};
  justify-content: ${({ justify, flex }) => !!flex && justify};
`;
