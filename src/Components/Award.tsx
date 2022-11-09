import { motion, Variants } from "framer-motion";
import Picture from "./Picture3";

const cardVariants: Variants = {
    offscreen: {
        y: 300
    },
    onscreen: {
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};

type ImgTypes = {
    sources: object,
    fallback: {
        src: string
    }
}

type AwardTypes = {
    title: string,
    img: ImgTypes,
    awardName?: string,
    rating?: string,
    className?: string
}

export default function Award({title, img, awardName, rating, className = ''}: AwardTypes) {
    return (
        <motion.div
            className={`flex flex-col ${className}`}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
        >
        <motion.div
            className={`flex flex-col items-center justify-between h-full`}
            variants={cardVariants}
        >
            <h4 className={'mb-4 text-lg text-mosBlue-700 text-center'}>{title}</h4>
            <div className={'mb-4'}><Picture img={img} alt={''} /></div>
            {(awardName || rating) &&
            <div className={'w-full'}>
                {awardName && <p className={'mb-4 w-full text-center text-mosBlue-700 font-bold'}>{awardName}</p>}
                {rating && <div className={'p-2 text-center bg-mosRose-500 text-white'}>{rating}</div>}
            </div>
            }
        </motion.div>
        </motion.div>
    );
}
