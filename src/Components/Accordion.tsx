import React, { useState, useContext, Fragment } from 'react';
import { Transition } from '@headlessui/react';

const AccordionContext = React.createContext({
    open: false,
    setOpen: (open: boolean) => {},
    toggleOpen: () => {}
});

type AccordionTypes = {
    children: JSX.Element[],
}

const Accordion = ({ children }: AccordionTypes) => {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen((previousState) => !previousState);
    };

    return (

        <AccordionContext.Provider value={{ open, setOpen, toggleOpen }}>
            <>{children}</>
        </AccordionContext.Provider>
    );
};

type TriggerTypes = {
    children: JSX.Element,
}
const Trigger = ({ children }: TriggerTypes) => {

    const { open, toggleOpen } = useContext(AccordionContext);

    return (
        <div className={'relative pl-6'} onClick={toggleOpen}>
            <span className={'absolute top-0 left-0 text-2xl leading-4'}>{open ? <>-</> : <>+</>}</span>
            <span className={'uppercase'}>{children}</span>
        </div>
    );
};

type ContentTypes = {
    children: JSX.Element,
}
const Content = ({children}: ContentTypes) => {

    const { open, toggleOpen } = useContext(AccordionContext);

    return (
        <>
            <Transition
                as={Fragment}
                show={open}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <div className={'pl-8'}>{children}</div>
            </Transition>
        </>
    );
};

Accordion.Trigger = Trigger;
Accordion.Content = Content;

export default Accordion;
