import styled from 'styled-components';

export const AddCardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  //overflow: scroll;
`;

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  z-index: 3;
`;
