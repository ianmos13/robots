import { createSlice } from '@reduxjs/toolkit';

const compareSlice = createSlice({
  name: 'compare',
  initialState: [],
  reducers: {
    addToCompare: (state, action) => {
      const product = action.payload;
      if (!state.some(item => item.id === product.id)) {
        state.push(product);
      }
    },
    removeFromCompare: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { addToCompare, removeFromCompare } = compareSlice.actions;
export default compareSlice.reducer;