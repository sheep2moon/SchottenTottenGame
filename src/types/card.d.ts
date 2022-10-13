import { boardCols, faces, suits } from "../const/constsants";

export type Card = {
    face: typeof faces[number] | string;
    suit: typeof suits[number] | string;
};

export type PlayerSide = "red" | "blue";
export type BoardCol = typeof boardCols[number];

export type SingleScore = {
    value: number;
    rank: number;
};

export type Score = {
    [key in PlayerSide]: {
        [key: BoardCol]: SingleScore;
    };
};
