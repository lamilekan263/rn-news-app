import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { deviceStorage } from '../../../../services/deviceStorage';
import { fetcUserDetailsRequest, login, register } from './request';

export type RegisterDetailsType = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type LoginDetailsType = {
  email: string;
  password: string;
};

type InitialStateType = {
  userToken: string | null;
  isLoggedIn: boolean;
  loading: boolean;
  userDetails: {
    firstName: string;
    lastName: string;
    email: string;
    _id: string;
  } | null;
};

const initialState: InitialStateType = {
  userToken: null,
  isLoggedIn: false,
  loading: false,
  userDetails: null,
};

export const registerUser = createAsyncThunk(
  'registerUser',
  async (details: RegisterDetailsType) => {
    try {
      const { response, json } = await register(details);
      if (response.ok) {
        deviceStorage.saveItem('token', json.token);
        return {
          isLoggedIn: true,
        };
      } else {
        throw 'Error user';
      }
    } catch (error) {
      console.log(error.message);
    }
  },
);

export const loginUser = createAsyncThunk(
  'loginUser',
  async (details: LoginDetailsType, resetForm) => {
    const { response, json } = await login(details);
    if (response.ok) {
      deviceStorage.saveItem('token', json.token);
      resetForm();
      return {
        isLoggedIn: true,
      };
    } else {
      throw 'Error user';
    }
  },
);

export const fetchUserDetails = createAsyncThunk(
  'fetchUserDetails',
  async () => {
    const { response, json } = await fetcUserDetailsRequest();
    if (response.ok) {
      return {
        userDetails: json.user,
      };
    } else {
      throw 'Error user';
    }
  },
);

export const logout = createAsyncThunk('logout', async () => {
  await deviceStorage.removeItem('token');
});

export const init = createAsyncThunk('init', async () => {
  const token = await deviceStorage.getItem('token');
  return {
    userToken: token ?? null,
  };
});

const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(registerUser.pending, state => {
      state.loading = true;
    });

    builder.addCase(registerUser.fulfilled, state => {
      state.loading = false;
      state.isLoggedIn = true;
    });
    builder.addCase(registerUser.rejected, state => {
      state.loading = false;
    });
    // logincase
    builder.addCase(loginUser.pending, state => {
      state.loading = true;
    });

    builder.addCase(loginUser.fulfilled, state => {
      state.loading = false;
      state.isLoggedIn = true;
    });
    builder.addCase(loginUser.rejected, state => {
      state.loading = false;
    });
    // logout
    builder.addCase(logout.pending, state => {
      state.loading = true;
    });
    builder.addCase(logout.fulfilled, state => {
      state.loading = false;
      state.userToken = null;
      state.isLoggedIn = false;
      state.userDetails = null;
    });

    // userdetails
    builder.addCase(fetchUserDetails.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchUserDetails.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.userDetails = payload.userDetails;
    });
    // init app
    builder.addCase(init.pending, state => {
      state.loading = true;
    });

    builder.addCase(init.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.userToken = payload.userToken;
    });
    builder.addCase(init.rejected, state => {
      state.loading = false;
    });
  },
});

export default AuthSlice.reducer;
