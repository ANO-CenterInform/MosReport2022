type AppProps = {
    img: string,
    name: string,
    children: string,
    extraClass?: string
}

export default function Quote({img, name, children, extraClass}: AppProps) {
    return (
        <div className={`flex  max-md:flex-col bg-mosBlue-700 text-white ${extraClass}`}>
            <div><img className='max-md:w-full' src={img} alt={''} /></div>
            <div className={'flex-1 p-2 max-md:text-lg'}>
                <h6 className={'font-bold max-md:mb-4 max-md:pt-4'}>{name}</h6>
                {children}
            </div>
        </div>
    )
}
