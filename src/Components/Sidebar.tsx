import React, { useEffect, useState } from "react";
import { Transition } from '@headlessui/react'
import mosLogo from '../../public/images/mip_logo.png';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        function handleEscape(event: any) {
            if (!isOpen) return;

            if (event.key === "Escape") {
                setIsOpen(false);
            }
        }

        document.addEventListener("keyup", handleEscape);
        return () => document.removeEventListener("keyup", handleEscape);
    }, [isOpen]);

    return (
        <div>
            <div className="flex h-full justify-center w-full md:left-0 md:top-0 md:w-28 2xl:w-44
            py-4 md:pt-10 md:h-full color-white bg-mosBlue-900">
                <button className="" onClick={() => setIsOpen(state => !state)}>
                    {!isOpen ? <div className="flex flex-col justify-center h-8 w-8 space-y-2"><div className="w-8 h-0.5 bg-white"></div>
                            <div className="w-8 h-0.5 bg-white"></div>
                            <div className="w-8 h-0.5 bg-white"></div></div> :

                        <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="#fff" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    }
                </button>
            </div>
            <Transition
                show={isOpen}
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <Transition.Child
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="absolute inset-0">
                        <div
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 opacity-75 bg-cool-gray-600"
                        />
                    </div>
                </Transition.Child>

                <div className='absolute sm:top-0 sm:left-0 md:ml-28 lg:ml-44 p-8 bg-mosBlue-700 text-white h-full w-full lg:w-44 z-40'>
                    <div><img src={mosLogo} /> </div>
                </div>
            </Transition>
        </div>
    );
}
