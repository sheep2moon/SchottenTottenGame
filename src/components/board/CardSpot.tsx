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
        <div
            ref={setNodeRef}
            className={clsx("flex aspect-[225/314] w-32  items-end justify-center rounded-md border border-slate-100 pb-2", { "bg-slate-400 opacity-40": isOver, " border-none bg-none opacity-40 shadow-lg shadow-zinc-400": !isOver })}
        >
            {!card && <GiCardPlay className="text-4xl text-white" />}
            {card && <PlayingCard face={card.face} suit={card.suit} />}
        </div>
    );
};

export default CardSpot;
