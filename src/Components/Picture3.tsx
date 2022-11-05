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
        <picture className={pictureClass}>
            {Object.entries(img.sources).map(entry => {
                return <source srcSet={entry[1][0].src} type={`image/${entry[0]}`}  key={entry[0]}/>
            })}
        <img src={img.fallback.src} alt={alt} className={className} />
    </picture>);
}



