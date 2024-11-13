import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './TaskSlice';

export const Store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

