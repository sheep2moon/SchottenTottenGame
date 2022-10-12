import clsx from "clsx";
import React from "react";
import { Score } from "../../types/card";

type ScoreBlocksProps = {
    score: Score;
    reverse?: boolean;
};

const ScoreBlocks = ({ score, reverse }: ScoreBlocksProps) => {
    return (
        <div className="mx-auto flex gap-2">
            {Object.keys(score).map((key, index) => (
                <div key={`scoreBlock-${score[key]}-${index}`} className={clsx("h-full w-32 rounded-sm ", { "bg-red-400": score[key] === "red", "bg-blue-600": score[key] === "blue", "bg-slate-400": score[key] === "none" })}></div>
            ))}
        </div>
    );
};

export default ScoreBlocks;
