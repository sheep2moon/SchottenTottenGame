import { useDroppable } from "@dnd-kit/core";
import React from "react";
import clsx from "clsx";
import PlayingCard from "./PlayingCard";
import { Card } from "../../types/card";
import { GiCardPlay } from "react-icons/gi";

type CardSpotProps = {
    id: string;
    card?: Card | undefined;
};

const CardSpot = ({ id, card }: CardSpotProps) => {
    const { isOver, setNodeRef } = useDroppable({
        id
    });
    return (
        <div ref={setNodeRef} className={clsx("flex aspect-[225/314] w-32 items-center justify-center rounded-md border border-slate-100", { "bg-slate-400 opacity-80": isOver, "opacity-4 bg-zinc-700": !isOver })}>
            {!card && <GiCardPlay className="text-4xl text-white" />}
            {card && <PlayingCard face={card.face} suit={card.suit} />}
        </div>
    );
};

export default CardSpot;
