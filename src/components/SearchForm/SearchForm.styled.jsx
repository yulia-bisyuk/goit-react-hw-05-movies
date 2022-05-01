import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  justify-content: start;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;
const FormInput = styled.input`
  padding: 4px 8px;
  width: 100%;
  height: 24px;
  border: 0px;
  border-bottom: 1px solid #063970;
  :focus {
    border: 0px;
    border-bottom: 1px solid #063970;
    outline: none;
  }
`;
const SearchButton = styled.button`
  display: inline-block;
  background-color: white;
  border: 0;
  border-bottom: 1px solid #063970;
  cursor: pointer;
  outline: none;
  /* width: 48px;
  height: 48px; */

  /* background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1); */
`;

export { Form, FormInput, SearchButton };
