import React from "react";
import { BoardCol, PlayerSide, Card } from "../../types/card";
import CardSpot from "./CardSpot";
import PlayingCard from "./PlayingCard";

type CardStackProps = {
    cards: Card[] | undefined;
    col: BoardCol;
    side: PlayerSide;
};

const CardStack = ({ cards, col, side }: CardStackProps) => {
    return (
        <div className="relative w-32">
            {cards &&
                cards.map((card, index) => (
                    <div className="absolute" style={{ top: `${index * 60}px` }} key={`${card.face}${card.suit}`}>
                        <PlayingCard isReversed={false} {...card} />
                    </div>
                ))}
            {(!cards || cards.length < 5) && (
                <div className="absolute" style={{ top: `${(cards?.length ? cards.length : 0) * 60}px` }}>
                    <CardSpot id={`${side}stack-${col}`} />
                </div>
            )}
        </div>
    );
};

export default CardStack;
