import Picture from "./Picture3";
import { motion } from "framer-motion"

type ImgTypes = {
    sources: object,
    fallback: {
        src: string
    }
}
type PersonTypes = {
    image: ImgTypes,
    name: string,
    job: string
}

export default function PersonCard({image, name, job}: PersonTypes) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className={`flex flex-col items-center`}>
            <div className="flex justify-center z-40"><Picture img={image} alt={''} /></div>
            <div className="flex-1 p-4 bg-mosRose-500 text-white text-center max-w-[300px] z-40">
                <p className="font-bold z-40">{name}</p>
                <p>{job}</p>
            </div>
        </motion.div>
    );
}
