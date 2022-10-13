import React from "react";
import { RiCopperCoinFill } from "react-icons/ri";
import clsx from "clsx";
import { useSelector } from "react-redux";

import { RootState } from "../../redux/store";

const TurnCoin = () => {
    const { currentTurn } = useSelector((store: RootState) => store.board);

    return (
        <div className={clsx("absolute bottom-6 left-6 rounded-full shadow-md shadow-black/50", { "bg-red-400": currentTurn === "red", "bg-blue-400": currentTurn === "blue" })}>
            <RiCopperCoinFill className="text-7xl" />
        </div>
    );
};

export default TurnCoin;
