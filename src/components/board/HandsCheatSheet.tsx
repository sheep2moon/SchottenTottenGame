import { Dialog, Transition } from "@headlessui/react";
import React, { useState, Fragment } from "react";
import { Card } from "../../types/card";
import PlayingCard from "./PlayingCard";
import { GiCardPick } from "react-icons/gi";

type PokerHand = {
    title: string;
    exampleCards: Card[];
};

const handsRanking: PokerHand[] = [
    {
        title: "Poker Królewski",
        exampleCards: [
            { face: "a", suit: "d" },
            { face: "k", suit: "d" },
            { face: "q", suit: "d" },
            { face: "j", suit: "d" },
            { face: "10", suit: "d" }
        ]
    },
    {
        title: "Poker",
        exampleCards: [
            { face: "j", suit: "s" },
            { face: "10", suit: "s" },
            { face: "9", suit: "s" },
            { face: "8", suit: "s" },
            { face: "7", suit: "s" }
        ]
    },
    {
        title: "Kareta",
        exampleCards: [
            { face: "8", suit: "s" },
            { face: "8", suit: "h" },
            { face: "8", suit: "d" },
            { face: "8", suit: "c" },
            { face: "7", suit: "h" }
        ]
    },
    {
        title: "Full",
        exampleCards: [
            { face: "j", suit: "s" },
            { face: "j", suit: "h" },
            { face: "j", suit: "d" },
            { face: "10", suit: "c" },
            { face: "10", suit: "h" }
        ]
    },
    {
        title: "Kolor",
        exampleCards: [
            { face: "8", suit: "h" },
            { face: "2", suit: "h" },
            { face: "j", suit: "h" },
            { face: "q", suit: "h" },
            { face: "7", suit: "h" }
        ]
    },
    {
        title: "Strit",
        exampleCards: [
            { face: "9", suit: "s" },
            { face: "8", suit: "h" },
            { face: "7", suit: "d" },
            { face: "6", suit: "c" },
            { face: "5", suit: "h" }
        ]
    },
    {
        title: "Trójka",
        exampleCards: [
            { face: "6", suit: "s" },
            { face: "6", suit: "h" },
            { face: "6", suit: "d" },
            { face: "q", suit: "c" },
            { face: "10", suit: "h" }
        ]
    },
    {
        title: "Dwie pary",
        exampleCards: [
            { face: "j", suit: "s" },
            { face: "j", suit: "h" },
            { face: "q", suit: "d" },
            { face: "q", suit: "c" },
            { face: "7", suit: "h" }
        ]
    },
    {
        title: "Para",
        exampleCards: [
            { face: "5", suit: "s" },
            { face: "a", suit: "h" },
            { face: "a", suit: "d" },
            { face: "3", suit: "c" },
            { face: "10", suit: "h" }
        ]
    },
    {
        title: "Wysoka karta",
        exampleCards: [
            { face: "k", suit: "s" },
            { face: "8", suit: "h" },
            { face: "5", suit: "d" },
            { face: "3", suit: "c" },
            { face: "9", suit: "h" }
        ]
    }
];

const HandsCheatSheet = () => {
    const [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }
    return (
        <>
            <div className="flex items-center justify-center">
                <button type="button" onClick={openModal} className="rounded-md px-4 py-2 text-3xl font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    <GiCardPick />
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-[999]" onClose={closeModal}>
                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-black bg-opacity-50" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-zinc-800 p-6 text-left align-middle text-zinc-50 shadow-xl transition-all">
                                    <Dialog.Title as="h3" className="text-xl font-medium leading-6 text-white">
                                        Ranking układów
                                    </Dialog.Title>
                                    <div className="mt-2 p-2">
                                        <ul className="grid grid-cols-2 gap-4 p-1">
                                            {handsRanking.map(hand => (
                                                <li key={hand.title}>
                                                    <span>{hand.title}</span>
                                                    <div className="flex">
                                                        {hand.exampleCards.map(card => (
                                                            <PlayingCard key={`${hand.title}${card.face}${card.suit}`} {...card} isReversed={false} size="small" />
                                                        ))}
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mx-auto mt-4 flex justify-center">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Zamknij
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default HandsCheatSheet;
