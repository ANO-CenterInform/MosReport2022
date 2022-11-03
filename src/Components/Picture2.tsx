type PictureTypes = {
    avif: string,
    webp: string,
    fallback: string,
    alt?: string,
    className?: string,
    pictureClass?: string
}
export default function Picture2({avif, webp, fallback, alt, className, pictureClass}: PictureTypes) {

    return (
        <picture className={pictureClass}>
            <source srcSet={avif} type="image/avif"/>
            <source srcSet={webp} type="image/webp"/>
            <img src={fallback} alt={alt} className={className}/>
        </picture>
    );
}
