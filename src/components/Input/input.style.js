import styled from 'styled-components';

const FormWrapper = styled.form`
  display:flex;
  flex-direction:row;
  border:1px solid rgb(255 255 255 / 19%);
  padding: 4px;
  margin: 20px auto;
  width: 600px;
`;

const StyledInput = styled.input`
  flex-grow:2;
  border:none;
  padding: 0 20px;
  background-color:white;
    &:focus {
      outline: none;
    }
  }
`;

const BoxWrapper = styled.div`
  color: white;
  position:relative;
  background: rgb(117 71 97 / 50%);
  display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0 0 20px;
  a {
    color: pink;
    font-weight: bold;
    margin: 0 10px;
  }
  .copied {
    font-family: 'La Belle Aurore', cursive;
    font-size: 2rem;
    position:absolute;
    right:-66px;
  }
`;

export { FormWrapper, StyledInput, BoxWrapper };
