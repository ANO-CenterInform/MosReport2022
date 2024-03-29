type SingleParagraphTypes = {
    children: any,
    extraClass?: string
}

export default function SingleParagraph({children, extraClass}: SingleParagraphTypes) {
    return (
        <p className={`mb-8 max-md:px-8 ${extraClass}`}>{children}</p>
    );
}
