import { useState } from 'react';

import { SearchButton, Form, Input } from './SearchForm.styled';

export const SearchForm = ({ onSubmit, toast }) => {
  const [query, setQuery] = useState('');

  const onChange = e => {
    const value = e.target.value.trim().toLowerCase();
    setQuery(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!query) {
      return toast('Write something, please.');
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
