import PageLayout from "../../Layouts/PageLayout";
import SectionLayout from "../../Layouts/SectionLayout";
import SingleParagraph from "../../Components/SingleParagraph";
import Picture3 from "../../Components/Picture3";
// @ts-ignore
import img1 from './img/img1.jpg?format=avif;webp;jpg&picture&quality=60';

export default function Section1() {
    return (
        <PageLayout id={5} links={4} prevPage={'/pages/4/2'} nextPage={'/pages/5/2'}>
            <SectionLayout title={'АНАЛИЗ ФИНАНСОВЫХ РЕЗУЛЬТАТОВ ДЕЯТЕЛЬНОСТИ ОБЩЕСТВА'}>
                <SingleParagraph extraClass={'text-gray-500'}>
                    Анализ финансового состояния АО «Мосинжпроект» выполнен за трехлетний период на основе данных финансовой отчетности организации за 2019-2021 годы.
                </SingleParagraph>
                <SingleParagraph extraClass={'font-bold text-gray-500'}>Показатели финансово-хозяйственной деятельности за 2019-2021 годы, тыс. руб.</SingleParagraph>
                <div className={'flex overflow-x-auto mb-8'}>
                    <Picture3 img={img1} alt={''} pictureClass={'max-md:shrink-0'} />
                </div>
                <SingleParagraph extraClass={'mb:8 lg:mb-24'}>В анализируемом периоде относительно итогов 2020 года наблюдается разнонаправленная динамика показателей «Выручка» и «Чистая прибыль».
                    Рост показателя «Выручка» на 4 384 426 тыс. руб. (2%) обусловлен освоением большего объема работ за счет оптимизации производственных процессов, использованием современных инновационных разработок в области проектирования и строительства. Ориентация на глобальные тенденции развития с учетом меняющихся внешних факторов и ожиданий заинтересованных сторон обеспечивает устойчивое развитие и рост.</SingleParagraph>
            </SectionLayout>
        </PageLayout>
    );
}
