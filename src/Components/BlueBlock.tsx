import {ReactNode} from "react";

type BlueBlockTypes = {
    children: ReactNode | string | JSX.Element,
    extraClass?: string
}

export default function BlueBlock({children, extraClass = ''}: BlueBlockTypes) {
    return (
        <div className={`mb-8 p-8 bg-mosBlue-700 text-white ${extraClass}`}>
            {children}
        </div>
    );
}
