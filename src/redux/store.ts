import { boardSlice } from "./boardSlice";
import { configureStore } from "@reduxjs/toolkit";
import handSlice from "./handSlice";

export const store = configureStore({
    reducer: {
        board: boardSlice.reducer,
        hand: handSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
