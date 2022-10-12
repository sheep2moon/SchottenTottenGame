import clsx from "clsx";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const ScoreBlocks = () => {
    const { score, currentTurn } = useSelector((store: RootState) => store.board);
    return (
        <div className={clsx("mx-auto flex h-full items-center justify-center gap-2", { "flex-row-reverse": currentTurn === "red" })}>
            {Object.keys(score).map((key, index) => (
                <div key={`scoreBlock-${score[key]}-${index}`} className={clsx("h-5 w-32 rounded-sm ", { "bg-red-400": score[key] === "red", "bg-blue-600": score[key] === "blue", "bg-slate-400": score[key] === "none" })}></div>
            ))}
        </div>
    );
};

export default ScoreBlocks;
