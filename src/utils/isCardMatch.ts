import { Card } from "../types/card";

export const isCardMatch = (card: Card, face: string, suit: string) => {
    return card.face === face && card.suit === suit;
};
