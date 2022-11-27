// Библиотеки
import { configureStore } from '@reduxjs/toolkit';

//Модули
import { reducer } from './reducer';

export const store = configureStore({
  reducer: {
    film: reducer,
  },
});

export type StoreType = ReturnType<typeof store.getState>;