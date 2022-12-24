import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

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

export const fetchNews = createAsyncThunk<{ listOfNews: News[] }>(
  'fetchNews',
  async () => {
    const response = await fetch(
      'https://newsapi.org/v2/top-headlines?country=us&apiKey=ac80f53f243240ee8c057d031e1bee67',
    );
    const json = await response.json();
    if (response.ok) {
      return {
        listOfNews: json.articles ?? [],
      };
    } else {
      throw 'Error fetching news';
    }
  },
);

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
