import { boardSlice } from "./boardSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        board: boardSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
