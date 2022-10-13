import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import TurnCoin from "./TurnCoin";

const PlayerInfo = () => {
    const { currentTurn, boardScore } = useSelector((store: RootState) => store.board);
    const totalScore = useMemo(() => {
        const redScore = Object.values(boardScore.red).reduce((acc, score) => acc + score.value, 0);
        const blueScore = Object.values(boardScore.blue).reduce((acc, score) => acc + score.value, 0);
        return { red: redScore, blue: blueScore };
    }, [currentTurn, boardScore]);
    return (
        <div className="text-zinc absolute top-1/2 left-2 z-50 flex -translate-y-1/2 flex-col items-center rounded-md bg-zinc-200 p-4 text-lg font-bold shadow-lg shadow-zinc-900">
            <span>Score</span>
            <div className="flex">
                <span className="text-blue-500">{totalScore.blue}</span>
                <span>-</span>
                <span className="text-red-500">{totalScore.red}</span>
            </div>
        </div>
    );
};

export default PlayerInfo;
