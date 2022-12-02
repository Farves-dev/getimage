import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getDatas = createAsyncThunk("data/getDatas", async () => {
  return fetch(`https://api.pexels.com/v1/search?query=car&per_page=80`, {
    headers: {
      Authorization: "563492ad6f91700001000001a3321c0fd1154ba9b76de56f6075ea82",
    },
  }).then((res) => res.json());
});

const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    loading: false,
  },
  extraReducers: {
    [getDatas.pending]: (state, action) => {
      state.loading = true;
    },
    [getDatas.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [getDatas.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default dataSlice.reducer;
