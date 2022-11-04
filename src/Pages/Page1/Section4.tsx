import contest_1 from './img/contests_1.jpg';
import contest_2 from './img/contests_2.jpg';
import Picture from "../../Components/Picture";
import PageLayout from "../../Layouts/PageLayout";
import SectionLayout from "../../Layouts/SectionLayout";

export default function Section4() {

    const pageLinks = [
        { "name": '01', "path": "" },
        { "name": '02', "path": "/2" },
        { "name": '03', "path": "/3" },
        { "name": '04', "path": "/4" },
        { "name": '05', "path": "/5" }
    ];

    return (
        <PageLayout id={1} links={pageLinks} prevPage={'/page/3'} nextPage={'/page/5'}>
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
