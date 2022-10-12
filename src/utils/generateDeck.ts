import { faces, suits } from "./../types/card.d";
import { Card } from "../types/card";

export const generateDeck = (): Card[] => {
    const deck: Card[] = [];
    faces.forEach(face => {
        suits.forEach(suit => {
            deck.push({ face, suit });
        });
    });

    const shuffled = deck
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);

    return shuffled;
};
