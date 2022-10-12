import Image from "next/image";
import React from "react";
import { Card } from "../../types/card";

// export type PlayingCardProps = {
//     face: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "j" | "q" | "k";
//     suit: "c" | "d" | "h" | "s";
// };

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
