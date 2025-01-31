import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedFilters: [],
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSelectedFilters(state, action) {
      state.selectedFilters = action.payload;
    },
    removeFilter(state, action) {
      state.selectedFilters = state.selectedFilters.filter(
        (item) => item !== action.payload
      );
    },
    clearFilters(state) {
      state.selectedFilters = [];
    },
  },
});

export const { setSelectedFilters, removeFilter, clearFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
