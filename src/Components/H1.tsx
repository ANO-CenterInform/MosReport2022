type H1Types = {
    children: string,
    extraClass?: string
}

export default function H1({children, extraClass}: H1Types) {
    return (
        <h2 data-aos={'fade-in'} data-aos-delay={100} className={`max-md:px-8 mb-8 xl:w-2/3 uppercase text-3xl text-mosBlue-900 ${extraClass}`}>{children}</h2>
    );
}
