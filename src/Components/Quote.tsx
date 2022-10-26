type AppProps = {
    img: string,
    name: string,
    children: string,
    extraClass?: string
}

export default function Quote({img, name, children, extraClass}: AppProps) {
    return (
        <div className={`flex bg-mosBlue-700 text-white ${extraClass}`}>
            <div><img src={img} alt={''} /></div>
            <div className={'flex-1 p-2'}>
                <h6 className={'font-bold'}>{name}</h6>
                {children}
            </div>
        </div>
    )
}
