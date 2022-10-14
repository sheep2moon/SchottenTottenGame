import { Transition, Dialog } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { BsQuestionDiamondFill } from "react-icons/bs";

const HowToPlay = () => {
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
                    <BsQuestionDiamondFill />
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
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-zinc-800 p-6 text-left align-middle text-zinc-50 shadow-xl transition-all">
                                    <Dialog.Title as="h3" className="text-xl font-medium leading-6 text-white">
                                        Jak grać?
                                    </Dialog.Title>
                                    <div className="mt-2 p-2">
                                        <ul className="list-decimal p-1">
                                            <li className="py-1">W każdej rundzie możesz położyć kartę z ręki na miejsce w jednej z siedmiu kolumn.</li>
                                            <li className="py-1">W każdej kolumnie może znajdować się maksymalnie 5 kart które tworzą pokerowe układy.</li>
                                            <li className="py-1">Za każdy ułożony układ 5-ciu kart otrzymujesz punkty odpowiadające sile układu.</li>
                                            <li className="py-1">Gra kończy się w momencie zapełnienia wszystkich siedmiu kolumn kartami.</li>
                                            <li className="py-1">Wygrywa zawodnik z wyższą ilością zdobytych punktów.</li>
                                        </ul>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Rozumiem
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

export default HowToPlay;
