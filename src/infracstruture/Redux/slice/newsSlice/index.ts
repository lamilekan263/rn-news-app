import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchTopHeadlines } from './request';

export type News = {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export type NewsListState = {
  listOfNews: News[];
  loading: boolean;
  error: boolean | undefined;
};

const initialState: NewsListState = {
  listOfNews: [],
  loading: false,
  error: false,
};

export const fetchNews = createAsyncThunk<
  { listOfNews: News[] },
  { category: string }
>('fetchNews', async category => {
  const { response, json } = await fetchTopHeadlines(category);

  if (response.ok) {
    return {
      listOfNews: json.articles ?? [],
    };
  } else {
    throw 'Error fetching news';
  }
});

const newsSlice = createSlice({
  name: 'newsList',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchNews.pending, state => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(fetchNews.fulfilled, (state, { payload }) => {
      state.listOfNews = payload.listOfNews;
      state.loading = false;
    });
    builder.addCase(fetchNews.rejected, state => {
      state.loading = false;
      state.error = true;
    });
  },
});

export default newsSlice.reducer;
