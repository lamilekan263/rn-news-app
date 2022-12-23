import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Action
export const getNews = createAsyncThunk(
  'news/getNews',
  async (data, thunkApi) => {
    try {
      const response = await fetch(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=ac80f53f243240ee8c057d031e1bee67',
      );
    } catch (error) {}
  },
);
