import React from 'react';
import classNames from 'classnames';
import { Container, UserInfoContainer, Wrapper } from './style';
import { Image, Content } from '../style';
import { DynamicImage } from '../../FormElements/DynamicImage';
import { useSelector } from 'react-redux';
const titleClass = classNames('body-large', 'weight-medium', 'text-black-800');
export default () => {
  const title = useSelector((state) => state.navReducer.title);

  return (
    <Container className='shadow-primary-4'>
      <Wrapper>
        <span className={titleClass}>{title}</span>
      </Wrapper>
      <Content>
        <>
          <UserInfoContainer>
            <span
              className={classNames(
                'weight-regular',
                'button-large',
                'text-black-800'
              )}
            >
              Hi, Zokirjon
            </span>
            <Image>
              <DynamicImage name={'Zokirjon'} />
            </Image>
          </UserInfoContainer>
        </>
      </Content>
    </Container>
  );
};
