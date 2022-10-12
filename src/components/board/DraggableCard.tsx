import React from "react";
import { PlayerSide, Card } from "../../types/card";
import Draggable from "../dnd/Draggable";
import PlayingCard from "./PlayingCard";

type DraggableCardProps = Card & {
    side: PlayerSide;
    isReversed: boolean;
};

const DraggableCard = ({ suit, face, side, isReversed }: DraggableCardProps) => {
    return (
        <Draggable id={`${side}-${face}-${suit}`}>
            <div>
                <PlayingCard isReversed={isReversed} face={face} suit={suit} />
            </div>
        </Draggable>
    );
};

export default DraggableCard;
