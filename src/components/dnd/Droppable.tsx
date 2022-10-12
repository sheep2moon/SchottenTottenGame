import React from "react";
import { useDroppable } from "@dnd-kit/core";

type DroppableProps = {
    children: React.ReactNode;
    id: string;
};

const Droppable = ({ children, id }: DroppableProps) => {
    const { isOver, setNodeRef } = useDroppable({
        id
    });
    const style = {
        color: isOver ? "green" : undefined
    };

    return (
        <div ref={setNodeRef} style={style}>
            {children}
        </div>
    );
};

export default Droppable;
