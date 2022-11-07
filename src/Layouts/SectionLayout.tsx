type LayoutTypes = {
    title: string,
    children: string[] | JSX.Element[] | string | JSX.Element
}

export default function SectionLayout({title, children}: LayoutTypes) {
 return (
     <section className="md:max-w-bootstrap-md xl:max-w-bootstrap-full mx-auto pt-10 text-lg">
         <h2 className="px-8 mb-8 xl:px-0 uppercase text-2xl md:text-3xl text-mosBlue-700">{title}</h2>
         {children}
     </section>
 );
}
