import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { Card } from "../../types/card";

type PlayingCardProps = Card & {
    isReversed?: boolean;
    size?: "big" | "small";
};

const PlayingCard = ({ face, suit, isReversed = true, size = "big" }: PlayingCardProps) => {
    return (
        <div className={clsx("z-50 flex h-fit w-32 items-center rounded-sm border border-slate-900", { "w-32": size === "big", "w-16": size === "small" })}>
            <Image src={isReversed ? require("../../assets/card-images/b.svg") : require("../../assets/card-images/" + face + suit + ".svg")} alt="playing card" className="" />
        </div>
    );
};

export default PlayingCard;
