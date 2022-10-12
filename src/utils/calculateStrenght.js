import { verificateHand } from "poker-hand-verifier";

const faceOrder = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "j", "q", "k", "a"];

export const calculateStrength = cards => {
    verificateHand(cards);
    const cardSuits = cards.map(card => card.suit);
    const cardFaces = cards.map(card => card.face);
    const flush = () => cardSuits.every(suit => suit === cardSuits[0]);
    const straight = () => {
        for (let i = 0; i < 5; i++) {
            const orderDiff = faces.findIndex(faces[i]);
        }
    };
};
