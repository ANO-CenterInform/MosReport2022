type PictureTypes = {
    img: string,
    alt?: string,
    className?: string,
    pictureClass?: string
}
export default function Picture({img, alt, className, pictureClass}: PictureTypes) {
    return (
        <picture className={pictureClass}>
            <source media="(max-width: 413px)" srcSet={`${img}?avif&w=412&srcset&quality=10`} type="image/avif"/>
            <source media="(max-width: 413px)" srcSet={`${img}?webp&w=412&&srcset&quality=10`} type="image/webp"/>
            <source srcSet={`${img}?avif&srcset&quality=10`} type="image/avif"/>
            <source srcSet={`${img}?webp&srcset&quality=10`} type="image/webp"/>
            <img src={`${img}?quality=10&w=412`} alt={alt} className={className}/>
        </picture>
    );
}
