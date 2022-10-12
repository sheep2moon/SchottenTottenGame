export const faces = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "j", "q", "k"] as const;
export const suits = ["c", "d", "h", "s"] as const;
export const boardCols = ["1", "2", "3", "4", "5", "6", "7"];

export type Card = {
    face: typeof faces[number] | string;
    suit: typeof suits[number] | string;
};

export type PlayerSide = "red" | "blue" | "none";
export type BoardCol = typeof boardCols[number];

export type Score = {
    [key: BoardCol]: PlayerSide;
};
