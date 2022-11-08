import { useCallback } from 'react'

export function useCocktailList() {
  // Note: this API requires payment info
  // const apiUrl = "https://the-cocktail-db.p.rapidapi.com/search.php";
  const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?'

  const getCocktailsList = useCallback<(term: string) => Promise<any[]>>(
    (searchTerm: string = '') => {
      return new Promise((resolve, reject) => {
        fetch(
          apiUrl +
            new URLSearchParams({
              s: searchTerm,
            }),
          {
            method: 'GET',
            headers: {
              // "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY || "",
              // "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST || "",
            },
          },
        )
          .then((response) => response.json())
          .then((data) => {
            resolve(data?.drinks)
          })
          .catch(reject)
      })
    },
    [],
  )

  return {
    getCocktailsList,
  }
}
