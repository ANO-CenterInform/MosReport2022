import {useEffect, useState} from "react";

type CounterTypes = {
    min: number,
    max: number,
    className: string
}

export default function Counter({min, max, className}: CounterTypes) {

    let timer: string | number | boolean | NodeJS.Timeout | undefined;
    const [counter, setCounter] = useState(0);

    const updateCount = () => {
        timer = !timer && setInterval(() => {
                setCounter(prevCount => prevCount + 1)
        }, 1000 / max)

        if (counter == max) {
            // @ts-ignore
            clearInterval(timer)
        }
    }

    useEffect(() => {
        updateCount();
        // @ts-ignore
        return () => clearInterval(timer)
    });

    return (
        <span className={className}>
            {counter}
        </span>
    )
}
