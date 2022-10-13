import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import DraggableCard from "../board/DraggableCard";

const HandCards = () => {
    const { currentTurn } = useSelector((store: RootState) => store.board);
    const { decks } = useSelector((store: RootState) => store.hand);
    // if (!cards || cards.length === 0) return <div>No Cards</div>;
    console.log(decks);

    return (
        <div className="fixed bottom-2 right-2 z-[100]">
            <DraggableCard isReversed={false} {...decks[currentTurn].cards[decks[currentTurn].count - 1]} />
        </div>
    );
};

export default HandCards;
