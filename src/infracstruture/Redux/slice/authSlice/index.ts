import { createSlice } from '@reduxjs/toolkit';

export type UserDetailsType = {
  email: string;
  password: string;
};

const initialState = {
  userDetails: {},
  isLoggedIn: true,
};

const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {},
});

export default AuthSlice.reducer;
