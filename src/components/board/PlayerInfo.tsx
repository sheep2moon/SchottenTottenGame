import React, { useMemo, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { PlayerSide, SingleScore } from "../../types/card";
import CountUp from "react-countup";
import TurnCoin from "./TurnCoin";
import clsx from "clsx";
import { MdOutlineSportsScore } from "react-icons/md";

const PlayerInfo = () => {
    const { currentTurn, boardScore } = useSelector((store: RootState) => store.board);
    const totalScore = useMemo(() => {
        const reduceFun = (acc: number, score: SingleScore) => {
            if (score.value >= 0) {
                return acc + score.value;
            } else return acc;
        };
        const redScore = Object.values(boardScore.red).reduce(reduceFun, 0);
        const blueScore = Object.values(boardScore.blue).reduce(reduceFun, 0);
        return { red: redScore, blue: blueScore };
    }, [currentTurn, boardScore]);
    return (
        <div>
            <div className="col absolute top-4 left-1/2 flex -translate-x-1/2 flex-col items-center rounded-md bg-black/20 p-1 shadow-black/90 ">
                <div className="flex">
                    <ScoreCounter score={totalScore.blue} side="blue" />
                    <ScoreCounter score={totalScore.red} side="red" reverse />
                </div>
            </div>
        </div>
    );
};

export default PlayerInfo;

const ScoreCounter = ({ score, side, reverse = false }: { score: number; side: PlayerSide; reverse?: boolean }) => {
    const [endedAt, setEndedAt] = useState(0);
    const onEnd = () => {
        setEndedAt(score);
    };

    useEffect(() => {
        console.log(endedAt);
    }, [endedAt]);

    return (
        <div
            className={clsx("flex  items-center gap-2 rounded-md px-2 text-3xl shadow-md  transition-all duration-200", {
                "text-red-600": side === "red",
                "text-blue-600": side === "blue",
                "flex-row-reverse": reverse
            })}
        >
            <span className="flex items-center gap-1 text-3xl font-semibold capitalize">
                <MdOutlineSportsScore />
            </span>
            <CountUp start={endedAt} onEnd={onEnd} end={score} duration={1} />
        </div>
    );
};
