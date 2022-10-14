import clsx from "clsx";
import React from "react";
import ScoreBlocks from "../components/board/ScoreBlocks";
import TurnCoin from "../components/board/TurnCoin";
import BoardSide from "../components/sides/BoardSide";
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import PlayerInfo from "../components/board/PlayerInfo";
import HandCards from "../components/sides/HandCards";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { BoardCol, PlayerSide } from "../types/card";
import { addCard, swapTurn } from "../redux/boardSlice";
import { popCard } from "../redux/handSlice";
import HowToPlay from "../components/board/HowToPlay";
import HandsCheatSheet from "../components/board/HandsCheatSheet";

const PlayingBoard = () => {
    const dispatch = useDispatch();
    const { currentTurn } = useSelector((store: RootState) => store.board);

    const handleDragEnd = (e: DragEndEvent) => {
        if (e.over?.id && e.active.id) {
            const spotId = e.over.id;
            console.log(spotId);

            const card = e.active.id.toString().split("-");
            const face = card[1];
            const suit = card[2];
            if (face && suit) {
                const col = spotId.toString().split("-")[2] as BoardCol;
                const side = spotId.toString().split("-")[0] as PlayerSide;
                dispatch(addCard({ side, column: col, card: { face, suit } }));
                dispatch(popCard({ side }));
                dispatch(swapTurn());
            }
        }
    };
    return (
        <>
            <DndContext onDragEnd={handleDragEnd}>
                <TurnCoin />
                <div className="fixed right-4 top-4 z-50 flex">
                    <HowToPlay />
                    <HandsCheatSheet />
                </div>
                <PlayerInfo />
                <HandCards />
                <div className={clsx("mx-auto grid h-screen grid-rows-[2fr_0.1fr_2fr] gap-2 overflow-hidden  p-1   transition-all duration-700 ", { "rotate-180": currentTurn === "red" })}>
                    <div className="rotate-180 transition-all ">
                        <BoardSide side="red" />
                    </div>
                    <div className="">
                        <ScoreBlocks />
                    </div>
                    <div className=" transition-all">
                        <BoardSide side="blue" />
                    </div>
                </div>
            </DndContext>
        </>
    );
};

export default PlayingBoard;
