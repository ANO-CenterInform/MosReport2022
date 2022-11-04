import contest_1 from './img/contests_1.jpg';
import contest_2 from './img/contests_2.jpg';
import Picture from "../../Components/Picture";
import PageLayout from "../../Layouts/PageLayout";
import SectionLayout from "../../Layouts/SectionLayout";
import pageLinks from './PageLinks'

export default function Section4() {

    return (
        <PageLayout id={1} links={pageLinks} prevPage={'/pages/3'} nextPage={'/pages/5'}>
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
