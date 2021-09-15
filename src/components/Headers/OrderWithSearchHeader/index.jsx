import React from 'react';
import { Container, Header } from '../style';
import { InputIcon } from '../../FormElements/Inputs';

export default ({ search, setSearch }) => {
  return (
    <Container>
      <Header>
        <Header.TitleBox>
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
