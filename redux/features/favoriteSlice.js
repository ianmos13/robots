import { createSlice } from '@reduxjs/toolkit'

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: [],
  reducers: {
    addToFavorite: (state, action) => {
      const product = action.payload;
      if (!state.some(item => item.id === product.id)) {
        state.push(product);
      }
    },
    removeFromFavorite: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
    clearFavorites: () => {
      return []; 
    },
  },
});

export const { addToFavorite, removeFromFavorite, clearFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;