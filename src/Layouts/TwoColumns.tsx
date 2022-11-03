type ColumnTypes = {
    children: JSX.Element[] | JSX.Element,
    extraClass?: string[]
}

function Column({children, extraClass}: ColumnTypes) {
    return (
        <div className={`lg:w-1/2 max-md:px-8 ${extraClass}`}>
        {children}
        </div>
    )
}

type TwoColumnsTypes = {
    children: JSX.Element[],
    extraClass?: string[]
}

const TwoColumns = ({children, extraClass}: TwoColumnsTypes) => {
    return (
        <div className={`flex flex-col lg:flex-row gap-8 mb-8 ${extraClass}`}>
        {children}
        </div>
    )
}

TwoColumns.Column = Column;

export default TwoColumns;
