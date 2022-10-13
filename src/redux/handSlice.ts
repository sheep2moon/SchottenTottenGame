import { Card, PlayerSide } from "./../types/card.d";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { generateDeck } from "../utils/generateDeck";

type InitialState = {
    decks: {
        [key in PlayerSide]: {
            cards: Card[];
            count: number;
        };
    };
};

const initialState: InitialState = {
    decks: {
        blue: {
            cards: generateDeck(),
            count: 52
        },
        red: {
            cards: generateDeck(),
            count: 52
        }
    }
};

export const handSlice = createSlice({
    name: "hand",
    initialState,
    reducers: {
        popCard: (state, action: PayloadAction<{ side: PlayerSide }>) => {
            state.decks[action.payload.side].cards.pop();
            state.decks[action.payload.side].count -= 1;
        }
    }
});

export const { popCard } = handSlice.actions;
export default handSlice;
