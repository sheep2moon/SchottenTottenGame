import { SingleScore } from "./../types/card.d";
import { Card } from "../types/card";
import { evaluateCards, rankCards } from "phe";

// const faceOrder = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "j", "q", "k", "a"];
// const strengthOrder = ["royal-flush", "four-of-kind", "full-house", "flush", "straight", "three-of-kind", "two-pair", "pair", "high-card"];

export const calculateStrength = (cards: Card[]): SingleScore => {
    const parsedCards = cards.map(card => {
        let face = card.face;
        if (card.face === "10") {
            face = "T";
        }
        return `${face.toUpperCase()}${card.suit}`;
    });
    const cardsValue = evaluateCards(parsedCards);
    const cardsRank = rankCards(parsedCards);
    // const result = evalu(parsedCards);
    console.log(parsedCards);
    console.log(cardsValue, cardsRank);
    return { value: cardsValue, rank: cardsRank };
};
