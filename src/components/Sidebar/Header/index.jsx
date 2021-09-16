import React from 'react';
import { Header, TitleContainer, LogoContainer, LogoWrapper, CollapseButton } from './style';
import { ReactComponent as Logo } from '../../../assets/icons/ox-logo.svg';
import { useHistory } from 'react-router-dom';

const SidebarHeader = () => {
  const history = useHistory();
  return (
    <Header>
      <TitleContainer>
        <LogoWrapper>
          <LogoContainer>
            <Logo
              className='pointer'
              onClick={() => {
                history.push('/');
              }}
            />
          </LogoContainer>
          <CollapseButton  />
        </LogoWrapper>
      </TitleContainer>
    </Header>
  );
};

export default SidebarHeader;
