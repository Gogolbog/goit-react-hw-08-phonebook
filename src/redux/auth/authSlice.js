import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refreshUser, register } from './operations';
import { authInitialState } from './InitialState';

const handleRegisterFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
};

const handleLoginFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
};

const handleLogoutFulfilled = state => {
  state.user = { name: null, email: null };
  state.token = '';
};

const handleRefreshUserFulfilled = (state, action) => {
  state.user = action.payload;
};

const handleRefreshUserRejected = state => {
  state.token = '';
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, handleRegisterFulfilled)
      .addCase(login.fulfilled, handleLoginFulfilled)
      .addCase(logout.fulfilled, handleLogoutFulfilled)
      .addCase(refreshUser.fulfilled, handleRefreshUserFulfilled)
      .addCase(refreshUser.rejected, handleRefreshUserRejected);
  },
});

export const authReducer = authSlice.reducer;
