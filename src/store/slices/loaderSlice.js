import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  loadingMessage: '',
};

const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    showLoader: (state, action) => {
      state.isLoading = true;
      state.loadingMessage = action.payload || 'Loading...';
    },
    hideLoader: (state) => {
      state.isLoading = false;
      state.loadingMessage = '';
    },
  },
});

export const { showLoader, hideLoader } = loaderSlice.actions;
export default loaderSlice.reducer;


