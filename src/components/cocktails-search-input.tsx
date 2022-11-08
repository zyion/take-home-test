import React, { FC } from 'react';
import { TextInput } from '@mantine/core';
import { SearchIcon } from ".";
import { useSearchCocktails } from '../hooks';

export const CocktailsSearchInput: FC = () => {
  const { searchTerm, handleSearchChange } = useSearchCocktails();

  return (
    <TextInput
      placeholder='search cocktails'
      variant='default'
      size="md"
      icon={<SearchIcon color="gray" size="md" />}
      value={searchTerm}
      onChange={e => handleSearchChange(e.currentTarget.value)} />
  );
}
