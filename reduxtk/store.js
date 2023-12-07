import { configureStore } from '@reduxjs/toolkit';
import { inventarioSlide } from './slice';

export const store = configureStore({
    reducer: inventarioSlide.reducer,
})