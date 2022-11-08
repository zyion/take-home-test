import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface Cocktail {
  idDrink: string
  strDrink: string
  strAlcoholic: string
  strInstructions: string
  strDrinkThumb: string
}

interface CocktailState {
  loading: boolean
  searchTerm: string
  cocktailsList: Cocktail[]
}

const initialState = {
  loading: false,
  searchTerm: '',
  cocktailsList: [],
} as CocktailState

const cocktailSlice = createSlice({
  name: 'cocktails',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload
    },
    setCocktailsList: (state, action: PayloadAction<Cocktail[]>) => {
      state.cocktailsList = action.payload
    },
  },
})

export const {
  setCocktailsList,
  setSearchTerm,
  setLoading,
} = cocktailSlice.actions

export default cocktailSlice.reducer
