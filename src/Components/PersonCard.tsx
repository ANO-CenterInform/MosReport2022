import Picture from "./Picture";

type PersonTypes = {
    image: string,
    name: string,
    job: string
}

export default function PersonCard({image, name, job}: PersonTypes) {
    return (
        <div className={`flex flex-col items-center`}>
            <div className="flex justify-center"><Picture img={image} alt={''} /></div>
            <div className="flex-1 p-4 bg-mosRose-500 text-white text-center max-w-[300px]">
                <p className="font-bold">{name}</p>
                <p>{job}</p>
            </div>
        </div>
    );
}
