import { DndContext, DragEndEvent } from "@dnd-kit/core";
import React, { useState } from "react";
import { PlayerSide, Card, BoardCol } from "../../types/card";
import { generateDeck } from "../../utils/generateDeck";
import { isCardMatch } from "../../utils/isCardMatch";
import CardStack from "../board/CardStack";
import HandCards from "./HandCards";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { addCard, swapTurn } from "../../redux/boardSlice";
import { boardCols, reverseBoardCols } from "../../const/constsants";

type BoardSideProps = {
    side: PlayerSide;
};

const BoardSide = ({ side }: BoardSideProps) => {
    const { boardCards } = useSelector((store: RootState) => store.board);

    return (
        <div className="flex w-full flex-col items-center gap-1 ">
            <div className="flex gap-2 bg-red-500">
                {side === "blue" && boardCols.map(col => <CardStack side={side} key={`blue-col${col}`} cards={boardCards.blue?.[col]} col={col} />)}
                {side === "red" && reverseBoardCols.map(col => <CardStack side="red" key={`red-col${col}`} cards={boardCards.red?.[col]} col={col} />)}
            </div>
        </div>
    );
};

export default BoardSide;
