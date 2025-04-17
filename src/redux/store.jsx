import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import colorReducer from './colorSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

// Persist Configs
const cartPersistConfig = {
  key: 'cart',
  storage,
};

const colorPersistConfig = {
  key: 'color',
  storage,
};

// Persisted Reducers
const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);
const persistedColorReducer = persistReducer(colorPersistConfig, colorReducer);

// Create Store
export const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    color: persistedColorReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // important for redux-persist
    }),
});

export const persistor = persistStore(store);
