import clsx from "clsx";
import React, { useState } from "react";
import ScoreBlocks from "../components/board/ScoreBlocks";
import TurnCoin from "../components/board/TurnCoin";

import BoardSide from "../components/sides/BoardSide";
import { boardCols, PlayerSide, Score } from "../types/card";

const startingScore: Score = {
    "1": "none",
    "2": "none",
    "3": "none",
    "4": "none",
    "5": "none",
    "6": "none",
    "7": "none"
};

const PlayingBoard = () => {
    const [currentTurn, setCurrentTurn] = useState<PlayerSide>("blue");
    const [score, setScore] = useState<Score>(startingScore);

    return (
        <>
            <TurnCoin currentTurn={currentTurn} setCurrentTurn={setCurrentTurn} />
            <div className="overflow-hidde grid h-screen grid-rows-[2fr_0.1fr_2fr] gap-2 ">
                <div className={clsx("", { "order-1 rotate-180": currentTurn === "red", "order-3": currentTurn === "blue" })}>
                    <BoardSide currentTurn={currentTurn} side="blue" />
                </div>
                <div className="order-2">
                    <ScoreBlocks score={score} />
                </div>
                <div className={clsx("", { "order-1 rotate-180": currentTurn === "blue", "order-3": currentTurn === "red" })}>
                    <BoardSide currentTurn={currentTurn} side="red" />
                </div>
            </div>
        </>
    );
};

export default PlayingBoard;
