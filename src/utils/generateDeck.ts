import { faces, suits } from "./../types/card.d";
import { Card } from "../types/card";

export const generateDeck = (): Card[] => {
    const deck: Card[] = [];
    faces.forEach(face => {
        suits.forEach(suit => {
            deck.push({ face, suit });
        });
    });

    return deck;
};
