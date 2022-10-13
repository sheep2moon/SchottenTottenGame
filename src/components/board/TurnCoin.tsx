import React from "react";
import { RiCopperCoinFill } from "react-icons/ri";
import clsx from "clsx";
import { useSelector } from "react-redux";

import { RootState } from "../../redux/store";

const TurnCoin = () => {
    const { currentTurn } = useSelector((store: RootState) => store.board);

    return (
        <div className={clsx("absolute bottom-2 left-2 rounded-full ", { "bg-red-400": currentTurn === "red", "bg-blue-400": currentTurn === "blue" })}>
            <RiCopperCoinFill className="text-7xl" />
        </div>
    );
};

export default TurnCoin;
