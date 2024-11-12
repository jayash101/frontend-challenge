import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: false,
  lyrics: "",
  artist: "",
  songs: "",
};

export const fetchSong = createAsyncThunk(
  "fetchSong",
  async ({ artist, songs }) => {
    const response = await fetch(
      `https://api.lyrics.ovh/v1/${artist}/${songs}`,
    );

    if (!response.ok) {
      console.error("Unable to fetch");
    }

    return response.json();
  },
);

const songSlice = createSlice({
  name: "song",
  initialState,

  // Stores form data
  reducers: {
    getArtist: (state, action) => {
      state.artist = action.payload;
    },

    getSong: (state, action) => {
      state.songs = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchSong.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSong.fulfilled, (state, action) => {
        state.loading = false;
        state.lyrics = action.payload;
      })
      .addCase(fetchSong.rejected, (state) => {
        state.error = true;
      });
  },
});

export const { getArtist, getSong } = songSlice.actions;
export default songSlice.reducer;
