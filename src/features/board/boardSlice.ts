import { createSlice } from "@reduxjs/toolkit";

type BoardField = {
  id: number;
  symbol: string | null;
};

const initialState: Array<Array<BoardField>> = [
  [
    { id: 1, symbol: null },
    { id: 2, symbol: null },
    { id: 3, symbol: null },
  ],
  [
    { id: 4, symbol: null },
    { id: 5, symbol: null },
    { id: 6, symbol: null },
  ],
  [
    { id: 7, symbol: null },
    { id: 8, symbol: null },
    { id: 9, symbol: null },
  ],
];

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {},
});

export default boardSlice.reducer;
