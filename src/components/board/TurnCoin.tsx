import React from "react";
import { PlayerSide } from "../../types/card";
import { RiCopperCoinFill } from "react-icons/ri";
import clsx from "clsx";

type TurnCoinProps = {
    currentTurn: PlayerSide;
    setCurrentTurn: (s: PlayerSide) => void;
};

const TurnCoin = ({ currentTurn, setCurrentTurn }: TurnCoinProps) => {
    return (
        <button onClick={() => setCurrentTurn(currentTurn === "blue" ? "red" : "blue")} className={clsx("absolute bottom-2 left-2 rounded-full", { "bg-red-400": currentTurn === "red", "bg-blue-400": currentTurn === "blue" })}>
            <RiCopperCoinFill className="text-7xl" />
        </button>
    );
};

export default TurnCoin;
