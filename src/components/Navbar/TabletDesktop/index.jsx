import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import {
  Container,
  UserInfoContainer,
  Wrapper,
  DropdownContainer,
  Item,
  Text,
  PopupContainer,
} from './style';
import { Image, Content } from '../style';
import Icon from '../../Icon';
import { DynamicImage } from '../../FormElements/DynamicImage';
import { useDispatch, useSelector } from 'react-redux';
import { ClickOutside } from '../../../hooks/click-outside';
import { logout } from '../../../redux/modules/auth/actions';
const titleClass = classNames('body-large', 'weight-medium', 'text-black-800');
export default () => {
  const title = useSelector((state) => state.navReducer.title);
  const clickRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const handleOnClick = (type) => {
    switch (type) {
      case 'logout':
        setIsOpen(false);
        dispatch(logout());
        break;
      default:
        break;
    }
  };
  return (
    <Container className='shadow-primary-4'>
      <Wrapper>
        <span className={titleClass}>{title}</span>
      </Wrapper>
      <Content>
        <>
          <PopupContainer>
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
                <DynamicImage
                  name={'Zokirjon'}
                  onClick={() => setIsOpen((prevState) => !prevState)}
                />
              </Image>
            </UserInfoContainer>
            <ClickOutside
              outClickRef={clickRef}
              outsideClicked={() => {
                setIsOpen(false);
              }}
            >
              <DropdownContainer isOpen={isOpen}>
                <Item onClick={() => handleOnClick('logout')}>
                  <Icon icon='log-in' color='#262626' size='1.2rem' />
                  <Text
                    className={classNames(
                      'caption',
                      'weight-semibold',
                      'text-black-800'
                    )}
                  >
                    Log out
                  </Text>
                </Item>
              </DropdownContainer>
            </ClickOutside>
          </PopupContainer>
        </>
      </Content>
    </Container>
  );
};
