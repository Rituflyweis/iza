import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import loaderReducer from './slices/loaderSlice';
import searchReducer from './slices/searchSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    loader: loaderReducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: [],
      },
    }),
});



