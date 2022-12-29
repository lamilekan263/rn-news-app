import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  addNewBookMarkRequest,
  deletBookmarkRequest,
  fetchBookmarksRequest,
} from './request';

export type BookmarkType = {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  _id?: string;
};

type InitialStateType = {
  loading: boolean;
  bookmarks: BookmarkType[];
};

const initialState: InitialStateType = {
  loading: false,
  bookmarks: [],
};

export const fetchBookmarks = createAsyncThunk('fetchBookmarks', async () => {
  const { response, json } = await fetchBookmarksRequest();
  if (response.ok) {
    return {
      bookmarks: json.bookmarks,
    };
  }
});
export const addNewBookmark = createAsyncThunk(
  'addNewBookmark',
  async (bookmark: BookmarkType) => {
    const { response, json } = await addNewBookMarkRequest(bookmark);
    if (response.ok) {
      return {
        bookmarks: json,
      };
    }
  },
);
export const deleteBookmarks = createAsyncThunk(
  'deleteBookmark',
  async (id: string) => {
    const { response, json } = await deletBookmarkRequest(id);
    if (response.ok) {
      return {
        bookmarks: json,
      };
    }
  },
);

const bookmark = createSlice({
  name: 'bookmark',
  initialState,
  reducers: {},
  extraReducers(builder) {
    // fetch all bookmarks
    builder.addCase(fetchBookmarks.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchBookmarks.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.bookmarks = payload?.bookmarks;
    });
    builder.addCase(fetchBookmarks.rejected, state => {
      state.loading = false;
    });

    // add bookmark
    builder.addCase(addNewBookmark.pending, state => {
      state.loading = true;
    });
    builder.addCase(addNewBookmark.fulfilled, state => {
      state.loading = false;
    });
    builder.addCase(addNewBookmark.rejected, state => {
      state.loading = false;
    });

    // delete bookmark
    builder.addCase(deleteBookmarks.pending, state => {
      state.loading = true;
    });
    builder.addCase(deleteBookmarks.fulfilled, state => {
      state.loading = false;
    });
    builder.addCase(deleteBookmarks.rejected, state => {
      state.loading = false;
    });
  },
});

export default bookmark.reducer;
