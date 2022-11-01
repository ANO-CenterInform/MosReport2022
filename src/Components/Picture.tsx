type PictureTypes = {
    img: string,
    alt?: string,
    className?: string,
    pictureClass?: string
}
export default function Picture({img, alt, className, pictureClass}: PictureTypes) {
    return (
        <picture className={pictureClass}>
            <source srcSet={`${img}?avif&srcset`} type="image/avif"/>
            <source srcSet={`${img}?webp&srcset`} type="image/webp"/>
            <img src={img} alt={alt} className={className}/>
        </picture>
    );
}
