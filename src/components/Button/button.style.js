import styled from 'styled-components';

const ButtonWrapper = styled.button`
  color:white;
  padding: 10px;
  cursor: pointer;
  border: none;
  width: 70px;
  overflow: visible;
  background: rgb(255 255 255 / 20%);
  transition: 0.3s;
  &:hover {
    background: rgb(255 255 255 / 10%);
  }
`;

export { ButtonWrapper };
