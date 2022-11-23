import PageLayout from "../../Layouts/PageLayout";
import SectionLayout from "../../Layouts/SectionLayout";
import SingleParagraph from "../../Components/SingleParagraph";
import Picture3 from "../../Components/Picture3";

import TwoColumns from "../../Layouts/TwoColumns";
// @ts-ignore
import img3 from './img/img3.jpg?format=avif;webp;jpg&picture&quality=60';// @ts-ignore
import img4 from './img/img4.jpg?format=avif;webp;jpg&picture&quality=60';// @ts-ignore
import img5 from './img/img5.jpg?format=avif;webp;jpg&picture&quality=60';// @ts-ignore
import img6 from './img/img6.jpg?format=avif;webp;jpg&picture&quality=60';// @ts-ignore
import img7 from './img/img7.jpg?format=avif;webp;jpg&picture&quality=60';// @ts-ignore

export default function Section2() {
    return (
        <PageLayout id={8} links={5} prevPage={'/pages/8/1'} nextPage={'/pages/8/3'}>
            <SectionLayout title={'СТРУКТУРА КАДРОВОГО СОСТАВА'}>
                <SingleParagraph>
                    В структуре персонала Компании основную долю работников составляют специалисты – 71%, доля руководителей специалистов служащих (РСС) составляет около 29% от общей численности персонала.
                </SingleParagraph>
                <div className={'mb-8'}>
                    <Picture3 img={img3} alt={''} />
                </div>
                <TwoColumns extraClass={'mb-8'}>
                    <TwoColumns.Column>
                        <p>
                            Значительная доля персонала Общества, около 63%, приходится на мужчин, что объясняется спецификой деятельности Общества. Большинство из них – это технические специалисты, высококвалифицированные инженеры в области проектирования и управления строительством.
                            <br/>Средний возраст работников Общества составляет 39 лет. Основная часть персонала – это работники в возрасте от 30 до 50 лет, их доля составляет
                        </p>
                    </TwoColumns.Column>
                    <TwoColumns.Column>
                            <p>
                                порядка 70%. Это работники, находящиеся в самом трудоспособном возрасте, а также более чутко реагирующие на изменения внешней среды и более легко к ним адаптирующиеся. Самая малочисленная категория – сотрудники старше 50 лет (их доля составила 14,5% от общей численности) и сотрудники до 30 лет (их доля – 15%).
                            </p>
                    </TwoColumns.Column>
                </TwoColumns>
                <div className={'mb-8'}>
                        <Picture3 img={img4} alt={''} />
                </div>
                <p className={'p-8 mb-8 text-white text-3xl uppercase bg-mosBlue-700'}>
                    БОЛЬШИНСТВО СОТРУДНИКОВ ОБЩЕСТВА ИМЕЮТ ВЫСШЕЕ ОБРАЗОВАНИЕ – 95%,
                    <br/>СРЕДНЕЕ СПЕЦИАЛЬНОЕ/ ПРОФЕССИОНАЛЬНОЕ ОБРАЗОВАНИЕ 3,5%, СРЕДНЕЕ – 1,5%.
                    <br/>ПО СРАВНЕНИЮ С 2020 ГОДОМ ДОЛЯ СОТРУДНИКОВ, ИМЕЮЩИХ ВЫСШЕЕ ОБРАЗОВАНИЕ, УВЕЛИЧИЛАСЬ НА 1%.
                </p>
                <TwoColumns extraClass={'mb-8'}>
                    <TwoColumns.Column>
                        <Picture3 img={img6} alt={''} />
                    </TwoColumns.Column>
                    <TwoColumns.Column>
                        <Picture3 img={img7} alt={''} />
                    </TwoColumns.Column>
                </TwoColumns>
            </SectionLayout>
        </PageLayout>
    );
}
