import Picture from "./Picture";

type AwardTypes = {
    title: string,
    img: string,
    awardName?: string,
    rating?: string,
    className?: string
}

export default function Award({title, img, awardName, rating, className}: AwardTypes) {
    return (
        <div className={`flex flex-col items-center justify-between ${className}`}>
            <h4 className={'mb-4 text-lg text-mosBlue-700 text-center'}>{title}</h4>
            <div className={'mb-4'}><Picture img={img} alt={''} /></div>
            {(awardName || rating) &&
            <div className={'w-full'}>
                {awardName && <p className={'mb-4 text-mosBlue-700 font-bold'}>{awardName}</p>}
                {rating && <div className={'p-2 text-center bg-mosRose-500 text-white'}>{rating}</div>}
            </div>
            }
        </div>
    );
}
