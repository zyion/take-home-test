import React, { FC } from 'react';
import { Stack, Center, Group, Text, Card, Image, Badge, Grid, Loader } from '@mantine/core';
import { useSearchCocktails } from '../hooks';

export const CocktailsList: FC = () => {
  const { searchTerm, cocktailsList, loading } = useSearchCocktails();

  return (
    <Stack m="xl" spacing="xl">
      {loading ?
        <Center>
          <Loader color="grape" variant="dots" />
        </Center>
        : null}
      {!loading && !cocktailsList?.length && searchTerm ?
        <Center>
          <Text>No cocktails found matching: {searchTerm}</Text>
        </Center>
        : null}
      {!loading && cocktailsList?.length && searchTerm ?
        <Grid gutter="md">
          {cocktailsList.map(item => (
            <Grid.Col key={item.idDrink} span={3}>
              <Card shadow="sm" p="lg" radius="md" withBorder>
                <Card.Section>
                  <Image
                    src={item.strDrinkThumb}
                    alt={item.strDrink}
                    style={{
                      width: "150ox"
                    }}
                  />
                </Card.Section>
                <Group position="apart" mt="md" mb="xs">
                  <Text weight={500}>{item.strDrink}</Text>
                  <Badge color="grape" variant="light">
                    {item.strAlcoholic}
                  </Badge>
                </Group>
                <Text size="sm" color="dimmed" style={{
                  minHeight: "240px"
                }}>
                  {item.strInstructions}
                </Text>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
        : null}
    </Stack>
  );
}
