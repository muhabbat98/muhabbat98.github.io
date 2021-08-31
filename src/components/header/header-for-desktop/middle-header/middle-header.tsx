import React from 'react';
import { Link } from 'react-router-dom';

import Container from '../../../grid/container';
import MiddleHeaderAction from '../../../middle-header-action';
import Search from '../../../search';
import {
  MiddleHeaderContainer,
  Logo,
  MiddleHeaderWrapper,
  SearchContainer,
} from './style';

const MiddleHeader = () => {
  return (
    <MiddleHeaderContainer>
      <Container>
        <MiddleHeaderWrapper>
          <Logo>
            <Link to="/">Marketplace</Link>
          </Logo>
          <SearchContainer>
            <Search />
          </SearchContainer>
          <MiddleHeaderAction />
        </MiddleHeaderWrapper>
      </Container>
    </MiddleHeaderContainer>
  );
};

export default MiddleHeader;