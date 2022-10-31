import {useEffect, useState, useRef} from "react";
import { useInView } from 'react-intersection-observer';

type CounterTypes = {
    min: number,
    max: number,
    className: string
}

export default function Counter({min, max, className}: CounterTypes) {

    let timer: string | number | boolean | NodeJS.Timeout | undefined;
    const [counter, setCounter] = useState(min);

    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
    });

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
        if(inView) {
            updateCount();
        } else {
            setCounter(min)
            console.log(counter)
        }
        // @ts-ignore
        return () => clearInterval(timer)
    });

    return (
        <span className={className} ref={ref}>
            {counter}
        </span>
    )
}
