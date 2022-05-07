import PropTypes from 'prop-types';
import { useState } from 'react';
import { Form, FormInput, SearchButton } from './SearchForm.styled';
import { IconContext } from 'react-icons';
import { ImSearch } from 'react-icons/im';

const SearchForm = ({ onSubmit }) => {
  const [userQuery, setUserQuery] = useState('');

  const handleChange = e => {
    setUserQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(userQuery);
    setUserQuery('');
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <IconContext.Provider value={{ color: '#063970', size: '20px' }}>
          <SearchButton type="submit">
            <ImSearch />
          </SearchButton>
        </IconContext.Provider>
        <FormInput
          type="text"
          placeholder="Search movies"
          onChange={handleChange}
          value={userQuery}
        />
      </Form>
    </>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
};
