import { useState } from 'react';
import PropTypes from 'prop-types';

import { SearchButton, Form, Input } from './SearchForm.styled';

export const SearchForm = ({ onSubmit, toast }) => {
  const [query, setQuery] = useState('');

  const onChange = e => {
    const value = e.currentTarget.value.trim().toLowerCase();
    setQuery(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!query) {
      toast('Write something, please.');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <SearchButton type="submit">Search</SearchButton>
      <Input
        type="text"
        autoFocus
        autoComplete="off"
        name="search"
        onChange={onChange}
        placeholder="Search movie"
        value={query}
      />
    </Form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  toast: PropTypes.func.isRequired,
};
