type H2Types = {
    children: string
}

export default function H2({children}: H2Types) {
    return (
        <h2 className="max-md:px-8 mb-6 xl:w-2/3 uppercase text-3xl text-neutral-500">{children}</h2>
    );
}
