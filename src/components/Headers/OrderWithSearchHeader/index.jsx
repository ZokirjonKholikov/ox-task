import React, { useState } from 'react';
import { Container, Header, ButtonContainer } from '../style';
import ModalContent from '../Modal';
import {
  update,
  set as setHeader,
  reset,
  save,
} from '../../../redux/modules/table/actions';
import { ORDERS } from '../../../constants/tables';
import { useShowModal } from '../../../hooks/modal';
import { InputIcon } from '../../FormElements/Inputs';
import Icon from '../../Icon';

export default ({ search, setSearch }) => {
  const { showBlured } = useShowModal();
  const [categoryHovered, setCategoryHovered] = useState(false);
  const handleOpenModal = () => {
    showBlured({
      title: 'Customize Columns',
      maxWidth: '448px',

      body: () => (
        <ModalContent
          type={ORDERS}
          headerKey='ordersHeader'
          reset={reset}
          save={save}
          set={setHeader}
          update={update}
        />
      ),
    });
  };

  return (
    <Container>
      <Header>
        <Header.TitleBox>
          <Header.Actions>
            <ButtonContainer
              onMouseOver={() => setCategoryHovered(true)}
              onMouseLeave={() => setCategoryHovered(false)}
              hovered={categoryHovered}
              onClick={handleOpenModal}
              align='left'
              className='mx-1'
            >
              <Icon icon='category' size='24px' />{' '}
            </ButtonContainer>
          </Header.Actions>
        </Header.TitleBox>
        <Header.SearchBox>
          <Header.SearchContainer>
            <InputIcon
              white
              isTheSame
              icon='search'
              size='large'
              value={search}
              placeholder='Search...'
              onChange={(e) => setSearch(e.target.value)}
            />
          </Header.SearchContainer>
        </Header.SearchBox>
      </Header>
    </Container>
  );
};
