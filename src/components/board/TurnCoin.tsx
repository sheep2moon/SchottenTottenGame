import React from "react";
import { PlayerSide } from "../../types/card";
import { RiCopperCoinFill } from "react-icons/ri";
import clsx from "clsx";
import { useSelector, useDispatch } from "react-redux";
import { swapTurn } from "../../redux/boardSlice";
import { RootState } from "../../redux/store";

const TurnCoin = () => {
    const { currentTurn } = useSelector((store: RootState) => store.board);
    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch(swapTurn())} className={clsx("absolute bottom-2 left-2 rounded-full", { "bg-red-400": currentTurn === "red", "bg-blue-400": currentTurn === "blue" })}>
            <RiCopperCoinFill className="text-7xl" />
        </button>
    );
};

export default TurnCoin;
