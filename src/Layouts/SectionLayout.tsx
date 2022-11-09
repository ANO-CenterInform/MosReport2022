type LayoutTypes = {
    title: string,
    children: string[] | JSX.Element[] | string | JSX.Element,
    extraClass?: string
}

export default function SectionLayout({title, children, extraClass = ''}: LayoutTypes) {
 return (
     <section className={`flex flex-col md:max-w-bootstrap-md xl:max-w-bootstrap-full mx-auto pt-10 text-lg ${extraClass}`}>
         <h2 className="px-8 mb-8 xl:px-0 uppercase text-2xl md:text-3xl text-mosBlue-700">{title}</h2>
         {children}
     </section>
 );
}
