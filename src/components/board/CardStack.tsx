import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { BoardCol, PlayerSide, Card } from "../../types/card";
import CardSpot from "./CardSpot";
import PlayingCard from "./PlayingCard";

type CardStackProps = {
    cards: Card[] | undefined;
    col: BoardCol;
    side: PlayerSide;
};

const CardStack = ({ cards, col, side }: CardStackProps) => {
    const { currentTurn } = useSelector((store: RootState) => store.board);
    return (
        <div className="relative w-32 ">
            {cards &&
                cards.map((card, index) => (
                    <div className="absolute" style={{ top: `${index * 60}px` }} key={`${card.face}${card.suit}`}>
                        <PlayingCard isReversed={false} {...card} />
                    </div>
                ))}
            {(!cards || cards.length < 5) && side === currentTurn && (
                <div className="absolute" style={{ top: `${(cards?.length ? cards.length : 0) * 60}px` }}>
                    <CardSpot id={`${side}stack-${col}`} />
                </div>
            )}
        </div>
    );
};

export default CardStack;
