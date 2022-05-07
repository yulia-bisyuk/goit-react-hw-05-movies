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
  margin-bottom: 20px;
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
  margin-bottom: 20px;
  display: inline-block;
  background-color: white;
  border: 0;
  border-bottom: 1px solid #063970;
  cursor: pointer;
  outline: none;
`;

export { Form, FormInput, SearchButton };
