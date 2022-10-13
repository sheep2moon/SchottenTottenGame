import clsx from "clsx";
import React from "react";
import ScoreBlocks from "../components/board/ScoreBlocks";
import TurnCoin from "../components/board/TurnCoin";
import BoardSide from "../components/sides/BoardSide";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import PlayerInfo from "../components/board/PlayerInfo";

const PlayingBoard = () => {
    const { currentTurn } = useSelector((store: RootState) => store.board);
    return (
        // <>
        //     <TurnCoin />
        //     <div className="overflow-hidde grid h-screen grid-rows-[2fr_0.1fr_2fr] gap-2 transition-all ">
        //         <div className={clsx("transition-all", { "order-1 rotate-180": currentTurn === "red", "order-3": currentTurn === "blue" })}>
        //             <BoardSide side="blue" />
        //         </div>
        //         <div className="order-2">
        //             <ScoreBlocks />
        //         </div>
        //         <div className={clsx("transition-all", { "order-1 rotate-180": currentTurn === "blue", "order-3": currentTurn === "red" })}>
        //             <BoardSide side="red" />
        //         </div>
        //     </div>
        // </>
        <>
            <TurnCoin />
            <PlayerInfo />
            <div className={clsx("overflow-hidde grid h-screen grid-rows-[2fr_0.1fr_2fr] gap-2 transition-all duration-1000", { "rotate-180": currentTurn === "red" })}>
                <div className="rotate-180 transition-all ">
                    <BoardSide side="red" />
                </div>
                <div className="bg-zinc-800 p-1 shadow-md shadow-zinc-900">
                    <ScoreBlocks />
                </div>
                <div className="transition-all">
                    <BoardSide side="blue" />
                </div>
            </div>
        </>
    );
};

export default PlayingBoard;
