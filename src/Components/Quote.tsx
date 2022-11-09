import Picture3 from "./Picture3";
type ImgTypes = {
    sources: object,
    fallback: {
        src: string
    }
}
type AppProps = {
    img: ImgTypes,
    name: string,
    children: string,
    extraClass?: string
}

export default function Quote({img, name, children, extraClass}: AppProps) {
    return (
        <div className={`flex max-md:flex-col items-center bg-mosBlue-700 text-white ${extraClass}`}>
            <Picture3 img={img} alt={''} pictureClass={'max-md:w-full'} className={'max-md:w-full'}/>
            <div className={'flex-1 p-2 lg:px-8 max-md:text-lg'}>
                <h6 className={'font-bold mb-4 max-md:pt-4'}>{name}</h6>
                {children}
            </div>
        </div>
    )
}
