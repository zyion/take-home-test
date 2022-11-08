import { store } from './store'
import { setLoading, setSearchTerm, setCocktailsList } from './cocktailReducer'

it('should set initial state', () => {
  expect(store.getState().loading).toBe(false)
  expect(store.getState().searchTerm).toBe('')
  expect(store.getState().cocktailsList).toEqual([])
})

it('should set loading state', () => {
  store.dispatch(setLoading(true))
  expect(store.getState().loading).toBe(true)
})

it('should set search term', () => {
  store.dispatch(setSearchTerm('martini'))
  expect(store.getState().searchTerm).toBe('martini')
})

it('should set cocktails list', () => {
  const cocktail = {
    idDrink: '11728',
    strDrink: 'Martini',
    strAlcoholic: 'Alcoholic',
    strInstructions: '',
    strDrinkThumb: '',
  }
  store.dispatch(setCocktailsList([cocktail]))

  expect(store.getState().cocktailsList.length).toBe(1)
  expect(store.getState().cocktailsList[0]).toBe(cocktail)
})
