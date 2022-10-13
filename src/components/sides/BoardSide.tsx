import { DndContext, DragEndEvent, DragOverlay, DragStartEvent } from "@dnd-kit/core";
import React, { useState } from "react";
import { PlayerSide, Card, BoardCol } from "../../types/card";
import { generateDeck } from "../../utils/generateDeck";
import { isCardMatch } from "../../utils/isCardMatch";
import CardStack from "../board/CardStack";
import PlayingCard from "../board/PlayingCard";
import HandCards from "./HandCards";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { addCard, swapTurn } from "../../redux/boardSlice";
import { calculateStrength } from "../../utils/calculateStrenght";

type BoardCards = {
    [key: string]: Card[];
};

type BoardSideProps = {
    side: PlayerSide;
};

const BoardSide = ({ side }: BoardSideProps) => {
    const [handCards, setHandCards] = useState<Card[]>(generateDeck());
    generateDeck();
    const { currentTurn, boardCards } = useSelector((store: RootState) => store.board);
    const [activeId, setActiveId] = useState("");
    const dispatch = useDispatch();

    const handleDragEnd = (e: DragEndEvent) => {
        if (e.over?.id && e.active.id) {
            const cardId = e.active.id;
            const spotId = e.over.id;
            const card = cardId.toString().split("-");
            const face = card[1];
            const suit = card[2];
            if (face && suit) {
                const col = spotId.toString().split("-")[1] as BoardCol;
                dispatch(addCard({ side, column: col, card: { face, suit } }));
                setHandCards((prev: Card[]) => {
                    if (prev) {
                        return prev.filter(card => !isCardMatch(card, face, suit));
                    }
                    return prev;
                });
                dispatch(swapTurn());
            }
        }
    };
    const handleDragStart = (e: DragStartEvent) => {
        setActiveId(e.active.id.toString());
    };

    return (
        <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
            <div className="flex w-full flex-col items-center gap-1 ">
                <HandCards currentTurn={currentTurn} cards={handCards} side={side} />
                <div className="flex gap-2 bg-red-500">
                    {[...Array(7)].map((_, index) => (
                        <CardStack side={side} key={`${side}-col${index + 1}`} cards={boardCards[side]?.[index + 1]} col={(index + 1).toString()} />
                    ))}
                </div>
            </div>
        </DndContext>
    );
};

export default BoardSide;

// <div key={`blue-${indexRow}`} className="flex gap-1">
//     {[...Array(5)].map(indexCol => (
//         <CardSpot key={`blue-${indexRow}-${indexCol}`} id={`blue-${indexCol}-${indexRow}`} />
//     ))}
// </div>
