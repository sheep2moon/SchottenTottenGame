import Image from "next/image";
import React from "react";
import { Card } from "../../types/card";

type PlayingCardProps = Card & {
    isReversed?: boolean;
};

const PlayingCard = ({ face, suit, isReversed = true }: PlayingCardProps) => {
    return (
        <div className="z-50 flex h-fit w-32 items-center rounded-sm border border-slate-900">
            <Image src={isReversed ? require("../../assets/card-images/b.svg") : require("../../assets/card-images/" + face + suit + ".svg")} alt="playing card" className="" />
        </div>
    );
};

export default PlayingCard;
