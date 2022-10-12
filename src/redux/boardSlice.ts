import { BoardCol, PlayerSide, Score } from "./../types/card.d";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const startingScore: Score = {
    "1": "none",
    "2": "blue",
    "3": "none",
    "4": "none",
    "5": "none",
    "6": "none",
    "7": "none"
};

type InitialState = {
    currentTurn: PlayerSide;
    score: Score;
};

const initialState: InitialState = {
    currentTurn: "blue",
    score: startingScore
};

export const boardSlice = createSlice({
    name: "board",
    initialState,
    reducers: {
        swapTurn: state => {
            state.currentTurn = state.currentTurn === "blue" ? "red" : "blue";
        },
        makeScore: (state, action: PayloadAction<{ column: BoardCol; side: PlayerSide }>) => {
            state.score[action.payload.column] = action.payload.side;
        }
    }
});

export const { swapTurn, makeScore } = boardSlice.actions;
export default boardSlice;
