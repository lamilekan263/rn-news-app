import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authSlice from './slice/authSlice';
import newsSlice from './slice/newsSlice';

const rootReducer = combineReducers({
  newsList: newsSlice,
  auth: authSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
export type AppDispatch = typeof store.dispatch;
