import img from './img/section5.jpg';
import contest_2 from './img/contests_2.jpg';
import Picture from "../../Components/Picture";

export default function Section5() {
    return (
        <section id={'fith'} className="md:max-w-bootstrap-md 2xl:max-w-bootstrap-full mx-auto pt-10">
            <h2 className="px-8 mb-8 xl:px-0 uppercase text-3xl text-mosBlue-700">Задачи, стоящие перед ао «мосинжпроеккт» в следующем году</h2>
            <div className={'mb-8'}>
                <Picture img={img} alt={''} />
            </div>
            <div className={'flex overflow-x-auto mb-8'}>
                <Picture img={contest_2} alt={''} pictureClass={'max-md:shrink-0'} />
            </div>
        </section>
    );
}
