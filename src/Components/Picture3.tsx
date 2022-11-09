import { motion } from "framer-motion"

type ImgTypes = {
    sources: object,
    fallback: {
        src: string
    }
}

type PictureTypes = {
    img: ImgTypes,
    alt?: string,
    className?: string,
    pictureClass?: string
}

export default function Picture3({img, alt, className, pictureClass}: PictureTypes) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}>
            <picture className={pictureClass}>
                    {Object.entries(img.sources).map(entry => {
                        return <source srcSet={entry[1][0].src} type={`image/${entry[0]}`}  key={entry[0]}/>
                    })}
                <img src={img.fallback.src} alt={alt} className={className} />
            </picture>
        </motion.div>);
}



