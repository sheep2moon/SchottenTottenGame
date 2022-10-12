import React from "react";
import { PlayerSide, Card } from "../../types/card";
import DraggableCard from "../board/DraggableCard";

type HandCardsProps = {
    cards: Card[];
    side: PlayerSide;
    currentTurn: PlayerSide;
};

const HandCards = ({ cards, side, currentTurn }: HandCardsProps) => {
    if (!cards || cards.length === 0) return <div>No Cards</div>;
    console.log(currentTurn, side);

    return <div className="fixed bottom-2 right-2">{cards[cards.length - 1] && <DraggableCard isReversed={currentTurn !== side} side={side} face={cards[cards.length - 1]?.face || ""} suit={cards[cards.length - 1]?.suit || ""} />}</div>;
};

export default HandCards;
