import React from 'react';
import './App.scss';
import { MantineProvider, Center, Stack, Group, Title } from '@mantine/core';
import { CocktailIcon } from "./components";
import { CocktailsList, CocktailsSearchInput } from "./components"

function App() {

  return (
    <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
      <Stack m="xl" spacing="xl">
        <Center>
          <Stack>
            <Group m="xl">
              <CocktailIcon size="xl" color="grape" />
              <Title order={1} color="grape">Cocktail List</Title>
            </Group>
            <CocktailsSearchInput />
          </Stack>
        </Center>
        <CocktailsList />
      </Stack>
    </MantineProvider>
  );
}

export default App;
