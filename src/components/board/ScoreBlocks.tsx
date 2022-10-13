import clsx from "clsx";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { boardCols } from "../../const/constsants";
import { RootState } from "../../redux/store";
import { PlayerSide, SingleScore } from "../../types/card";

const ScoreBlocks = () => {
    const { boardScore, currentTurn } = useSelector((store: RootState) => store.board);
    console.log(boardScore);

    return (
        <div className={clsx("mx-auto flex h-8 items-center justify-center gap-2")}>
            {boardCols.map(col => (
                <div key={`scoreBlock-${col}`} className={clsx(" h-6 w-32 rounded-md bg-zinc-900")}>
                    {<Block currentTurn={currentTurn} red={boardScore.red[col] || { rank: 0, value: -1 }} blue={boardScore.blue[col] || { rank: 0, value: -1 }} />}
                </div>
            ))}
        </div>
    );
};

export default ScoreBlocks;

const Block = ({ red, blue, currentTurn }: { red: SingleScore; blue: SingleScore; currentTurn: PlayerSide }) => {
    return (
        <div className={clsx("h-6 w-32 shadow-sm shadow-zinc-700", { "bg-gradient-to-b from-zinc-900 via-red-900 to-zinc-900": red.value > blue.value, "bg-gradient-to-b from-zinc-900 via-blue-900 to-zinc-900": blue.value > red.value })}>
            <span className={clsx(" flex items-center justify-center text-slate-50", { "rotate-180": currentTurn === "red" })}>+1000</span>
        </div>
    );
};
