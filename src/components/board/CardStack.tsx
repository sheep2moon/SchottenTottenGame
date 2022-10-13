import clsx from "clsx";
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
        <div className="relative w-32">
            <div
                className={clsx("absolute left-0 right-0 -top-1 -bottom-96 rounded-md ", {
                    "bg-gradient-to-b from-red-600/40 via-red-500/40 to-red-600/10": side === "red",
                    "bg-gradient-to-b from-blue-600/40 via-blue-500/40 to-blue-600/10": side === "blue"
                })}
            ></div>
            {cards &&
                cards.map((card, index) => (
                    <div className="absolute" style={{ top: `${index * 50}px` }} key={`${card.face}${card.suit}`}>
                        <PlayingCard isReversed={false} {...card} />
                    </div>
                ))}
            {(!cards || cards.length < 5) && side === currentTurn && (
                <div className="absolute" style={{ top: `${(cards?.length ? cards.length : 0) * 50}px` }}>
                    <CardSpot id={`${side}-stack-${col}`} />
                </div>
            )}
        </div>
    );
};

export default CardStack;
