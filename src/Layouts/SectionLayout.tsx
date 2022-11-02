type LayoutTypes = {
    id: string,
    title: string,
    children: string | JSX.Element[]
}

export default function SectionLayout({id, title, children}: LayoutTypes) {
 return (
     <section id={id} className="md:max-w-bootstrap-md 2xl:max-w-bootstrap-full mx-auto pt-10">
         <h2 className="px-8 mb-8 xl:px-0 uppercase text-2xl md:text-3xl text-mosBlue-700">{title}</h2>
         {children}
     </section>
 );
}
