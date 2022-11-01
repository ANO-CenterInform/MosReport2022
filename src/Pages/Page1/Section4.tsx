import contest_1 from './img/contests_1.jpg';
import contest_2 from './img/contests_2.jpg';
import Picture from "../../Components/Picture";

export default function Section4() {
    return (
        <section id={'forth'} className="md:max-w-bootstrap-md 2xl:max-w-bootstrap-full mx-auto pt-10">
            <h2 className="px-8 mb-8 xl:px-0 uppercase text-3xl text-mosBlue-700">Конкурсы АО «Мосинжпроект»</h2>
            <div className={'flex overflow-x-auto mb-8'}>
                <Picture img={contest_1} alt={''} pictureClass={'max-md:shrink-0'} />
            </div>
            <div className={'flex overflow-x-auto mb-8'}>
                <Picture img={contest_2} alt={''} pictureClass={'max-md:shrink-0'} />
            </div>
        </section>
    );
}
