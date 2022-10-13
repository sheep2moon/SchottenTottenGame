import { BoardCol, Card, PlayerSide, Score } from "./../types/card.d";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { calculateStrength } from "../utils/calculateStrenght";

const startingScore: Score = {
    blue: {
        "1": { value: -1, rank: 0 },
        "2": { value: -1, rank: 0 },
        "3": { value: -1, rank: 0 },
        "4": { value: -1, rank: 0 },
        "5": { value: -1, rank: 0 },
        "6": { value: -1, rank: 0 },
        "7": { value: -1, rank: 0 }
    },
    red: {
        "1": { value: -1, rank: 0 },
        "2": { value: -1, rank: 0 },
        "3": { value: -1, rank: 0 },
        "4": { value: -1, rank: 0 },
        "5": { value: -1, rank: 0 },
        "6": { value: -1, rank: 0 },
        "7": { value: -1, rank: 0 }
    }
};

type InitialState = {
    currentTurn: PlayerSide;
    // score: Score;
    boardScore: Score;
    boardCards: {
        [key in PlayerSide]: BoardCards;
    };
};

type BoardCards = {
    [key: BoardCol]: Card[];
};

const initialState: InitialState = {
    currentTurn: "blue",
    // score: startingScore,
    boardCards: {
        blue: { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [] },
        red: { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [] }
    },
    boardScore: startingScore
};

export const boardSlice = createSlice({
    name: "board",
    initialState,
    reducers: {
        swapTurn: state => {
            state.currentTurn = state.currentTurn === "blue" ? "red" : "blue";
        },
        addCard: (state, action: PayloadAction<{ side: PlayerSide; column: BoardCol; card: Card }>) => {
            const { side, column, card } = action.payload;
            state.boardCards[side][column]?.push(card);
            const cards = state.boardCards[side][column];

            if (cards && cards.length === 5) {
                const res = calculateStrength(cards);
                state.boardScore[side][column] = res;
            }
        }
    }
});

export const { swapTurn, addCard } = boardSlice.actions;
export default boardSlice;
