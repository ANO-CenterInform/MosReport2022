import {useEffect, useState, useRef} from "react";
import useOnScreen from "../hooks/useOnScreen";

type CounterTypes = {
    min: number,
    max: number,
    speed?: number,
    className?: string
}

export default function Counter({min, max, speed, className}: CounterTypes) {

    let timer: string | number | boolean | undefined;
    const [counter, setCounter] = useState(min);

    const elementRef = useRef<HTMLDivElement>(null);
    const isOnScreen = useOnScreen(elementRef);

    const updateCount = () => {
        timer = !timer && setInterval(() => {
                setCounter(prevCount => prevCount + 1)
        }, speed ? speed : 1000 / max)

        if (counter == max) {
            // @ts-ignore
            clearInterval(timer)
        }
    }

    useEffect(() => {
        if(isOnScreen) {
            updateCount();
        } else {
            setCounter(min)
        }
        // @ts-ignore
        return () => clearInterval(timer)
    });

    return (
        <span className={className} ref={elementRef}>
            {counter}
        </span>
    )
}
