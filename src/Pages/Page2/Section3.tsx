import img1 from "./images/img1.jpg"
import img2 from "./images/img2.jpg"
import Picture from "../../Components/Picture";
import SectionLayout from "../../Layouts/SectionLayout";
import PageLayout from "../../Layouts/PageLayout";
import pageLinks from "./PageLinks";

export default function Section3() {
    return (
        <PageLayout id={2} links={pageLinks} prevPage={'/pages/2/2'} nextPage={'/pages/2/4'}>
            <SectionLayout title={'ПОЛОЖЕНИЕ КОМПАНИИ В ОТРАСЛИ'}>
                <p className={'mb-8 max-md:px-8'}>АО «Мосинжпроект» занимает 3 место в рейтинге крупнейших строительных компаний России (4).</p>
                <div className={'flex overflow-x-auto mb-8'}>
                    <Picture img={img1} alt={''} pictureClass={'max-md:shrink-0'} />
                </div>
                <p className={'mb-8 max-md:px-8 pb-8 border-b border-gray-500'}>АО «Мосинжпроект» сохраняет лидерство по объему реализованной продукции в секторе «Инжиниринг, промышленно-инфра- структурное строительство» рейтинга крупнейших компаний России, Эксперт-400 (5).</p>
                <div className={'flex overflow-x-auto mb-8'}>
                    <Picture img={img2} alt={''} pictureClass={'max-md:shrink-0'} />
                </div>
            </SectionLayout>
        </PageLayout>
    );
}