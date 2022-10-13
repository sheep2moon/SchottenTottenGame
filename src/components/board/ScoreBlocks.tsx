import clsx from "clsx";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { boardCols } from "../../const/constsants";
import { RootState } from "../../redux/store";
import { SingleScore } from "../../types/card";

const ScoreBlocks = () => {
    const { boardScore, currentTurn } = useSelector((store: RootState) => store.board);
    console.log(boardScore);

    return (
        <div className={clsx("mx-auto flex h-full items-center justify-center gap-2")}>
            {/* {Object.keys(score).map((key, index) => (
                <div key={`scoreBlock-${score[key]}-${index}`} className={clsx("h-5 w-32 rounded-sm ", { "bg-red-400": score[key] === "red", "bg-blue-600": score[key] === "blue", "bg-slate-400": score[key] === "none" })}></div>
            ))} */}
            {boardCols.map(col => (
                <div key={`scoreBlock-${col}`} className={clsx("h-5 w-32 rounded-sm bg-zinc-900")}>
                    {<Block red={boardScore.red[8 - parseInt(col)] || { rank: 0, value: 0 }} blue={boardScore.blue[col] || { rank: 0, value: 0 }} />}
                </div>
            ))}
        </div>
    );
};

export default ScoreBlocks;

const Block = ({ red, blue }: { red: SingleScore; blue: SingleScore }) => {
    console.log(red.value, blue.value);

    if (!red.value || !blue.value) return <></>;

    return <div className={clsx("h-5 w-32", { "bg-red-500": red.value < blue.value, "bg-blue-500": blue.value < red.value, "bg-zinc-500": red.value !== 0 && red.value === blue.value })}></div>;
};
