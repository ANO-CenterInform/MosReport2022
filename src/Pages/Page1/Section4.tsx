// @ts-ignore
import contest_1 from './img/contests_1.jpg?format=avif;webp;jpg&picture&quality=60';
// @ts-ignore
import contest_2 from './img/contests_2.jpg?format=avif;webp;jpg&picture&quality=60';
import Picture from "../../Components/Picture3";
import PageLayout from "../../Layouts/PageLayout";
import SectionLayout from "../../Layouts/SectionLayout";

export default function Section4() {

    return (
        <PageLayout id={1} links={5} prevPage={'/pages/1/3'} nextPage={'/pages/1/5'}>
            <SectionLayout title={'Конкурсы АО «Мосинжпроект»'}>
                <div className={'flex overflow-x-auto mb-8'}>
                    <Picture img={contest_1} alt={''} pictureClass={'max-md:shrink-0'} />
                </div>
                <div className={'flex overflow-x-auto mb-8'}>
                    <Picture img={contest_2} alt={''} pictureClass={'max-md:shrink-0'} />
                </div>
            </SectionLayout>
        </PageLayout>
    );
}
