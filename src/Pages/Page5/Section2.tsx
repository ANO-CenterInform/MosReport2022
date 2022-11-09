import PageLayout from "../../Layouts/PageLayout";
import SectionLayout from "../../Layouts/SectionLayout";
import SingleParagraph from "../../Components/SingleParagraph";
import Picture3 from "../../Components/Picture3";
// @ts-ignore
import img2 from './img/img2.jpg?format=avif;webp;jpg&picture&quality=60';

export default function Section2() {
    return (
        <PageLayout id={5} links={4} prevPage={'/pages/5/1'} nextPage={'/pages/5/3'}>
            <SectionLayout title={'АНАЛИЗ СТРУКТУРЫ АКТИВОВ ОБЩЕСТВА'}>
                <SingleParagraph extraClass={'font-bold text-gray-500'}>Структура и динамика активов бухгалтерского баланса за 2019-2021 годы, тыс. руб.</SingleParagraph>
                <div className={'flex overflow-x-auto mb-8'}>
                    <Picture3 img={img2} alt={''} pictureClass={'max-md:shrink-0'} />
                </div>
                <SingleParagraph extraClass={'mb:8 lg:mb-24'}>
                    Краткосрочные обязательства увеличи- лись относительно 2020 года на 38 552 966 тыс. руб. и представлены кредиторской задолженностью с долей в валюте баланса 76% и оценочными обязательствами (резервы предстоящих расходов) с долей в валюте баланса 2%.
                    Общество для достижения поставленных задач не использует кредитных средств, источником финансирования финансово-хозяйственной деятельности является собственный капитал, который в 2021 году увеличился на 1 005 368 тыс. руб. (2%) за счет увеличения нераспределенной прибыли.
                </SingleParagraph>
            </SectionLayout>
        </PageLayout>
    );
}
