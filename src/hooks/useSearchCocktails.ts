import { useCallback, useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import { setSearchTerm, setCocktailsList, setLoading } from '../cocktailReducer'
import { useCocktailList } from './useCocktailList'
import debounce from 'lodash/debounce'

export function useSearchCocktails() {
  const loading = useSelector((state: RootState) => state.loading)
  const searchTerm = useSelector((state: RootState) => state.searchTerm)
  const cocktailsList = useSelector((state: RootState) => state.cocktailsList)
  const dispatch = useDispatch()

  const { getCocktailsList } = useCocktailList()

  const updateCocktailsList = useCallback(
    async (term: string) => {
      dispatch(setLoading(true))
      const cocktailsList = await getCocktailsList(term)
      dispatch(setCocktailsList(cocktailsList))
      dispatch(setLoading(false))
    },
    [dispatch, getCocktailsList],
  )

  const handleSetCocktailsList = useMemo(
    () => debounce(updateCocktailsList, 300),
    [updateCocktailsList],
  )

  useEffect(() => {
    if (searchTerm) {
      dispatch(setLoading(true))
      handleSetCocktailsList(searchTerm)
    } else dispatch(setCocktailsList([]))

    return () => handleSetCocktailsList.cancel()
  }, [dispatch, handleSetCocktailsList, searchTerm])

  const handleSearchChange = useCallback(
    (term: string) => {
      dispatch(setSearchTerm(term))
    },
    [dispatch],
  )

  return {
    loading,
    searchTerm,
    handleSearchChange,
    cocktailsList: cocktailsList,
  }
}
