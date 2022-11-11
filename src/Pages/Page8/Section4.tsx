import PageLayout from "../../Layouts/PageLayout";
import SectionLayout from "../../Layouts/SectionLayout";
import SingleParagraph from "../../Components/SingleParagraph";
import Picture3 from "../../Components/Picture3";

import TwoColumns from "../../Layouts/TwoColumns";
// @ts-ignore
import img10 from './img/img10.jpg?format=avif;webp;jpg&picture&quality=60';// @ts-ignore
import img11 from './img/img11.jpg?format=avif;webp;jpg&picture&quality=60';// @ts-ignore
import H2 from "../../Components/H2";
import BlueBlock from "../../Components/BlueBlock";
// @ts-ignore

export default function Section4() {
    return (
        <PageLayout id={8} links={5} prevPage={'/pages/8/3'} nextPage={'/pages/8/5'}>
            <SectionLayout title={'Подготовка КАДРОВ'}>
                <SingleParagraph>
                    Обучение, оценка и развитие персонала организованы с учетом стратегических целей и задач Общества. В 2021 году была про- должена работа по развитию системы обязательного, функционального и корпоративного обучения, системы адаптации новых работников и оценки персонала при приеме и внутренних переводах.
                </SingleParagraph>

                <H2>АДАПТАЦИЯ ПЕРСОНАЛА</H2>

                <TwoColumns extraClass={'mb-8'}>
                    <TwoColumns.Column>
                        <p>
                            Для повышения лояльности новых сотрудников к компании и снижения те- кучести персонала в период испытательного срока в 2021 году в рамках процесса их адаптации проведены следующие мероприятия:
                        </p>

                        <ul className={'list-disc list-inside'}>
                            <li>
                                автоматизирован процесс адаптации на базе 1С, начата разработка мобильного приложения;
                            </li>
                            <li>
                                разработаны и размещены ввод- ные курсы для новых сотрудников в системе дистанционного обучения Общества:
                                <br/>– «Добро пожаловать в компанию», «Информационная безопасность», «Основы безопасного поведения»;
                                <br/>– Электронная брошюра «Руковод- ство нового сотрудника».
                            </li>
                            <li>
                                внесены изменения в систему наставничества.
                            </li>
                            <li>
                                сформирован пул из 95 наставников для вновь принятых работников.
                            </li>
                        </ul>
                    </TwoColumns.Column>
                    <TwoColumns.Column>
                        <ul className={'list-disc list-inside'}>
                            <li>
                                введена в действие новая нематери- альная система мотивации для наставников.
                            </li>
                        </ul>
                        <p className={'mb-6'}>
                            В результате внедренных изменений процесс адаптации в компании стал более понятным и простым, в новом формате прошли адаптацию 179 новых сотрудников. Период знакомства нового сотрудника с компанией и командой сократился. Процент работников, успешно прошедших испытательный срок и оставшихся в компании по итогам 2021 года, составил 83%.
                        </p>
                        <p>
                            Внедрена практика «Набор новых сотрудников» в рамках основных организационных мероприятий: в первый рабочий день на строительных площадках и в офисе вручаются приветственные сувениры с логотипами компании.
                        </p>
                    </TwoColumns.Column>
                </TwoColumns>
                <H2>ОЦЕНКА ПЕРСОНАЛА</H2>
                <TwoColumns extraClass={'mb-8'}>
                    <TwoColumns.Column>
                        <p className={'mb-6'}>
                            В 2021 г. был разработан новый подход к системе оценки персонала и внедрены единые критерии оценки для определения эффективности работников и повышения объективности и качества принятия решений в процессах подбора и продвижения сотрудников внутри компании:
                        </p>
                        <p>
                            При проведении оценки персонала в Обществе применяются современные подходы и инструменты, позволяющие определять уровень компетентности сотрудников, в т.ч.:
                        </p>
                        <ul className={'list-disc list-inside'}>
                            <li>
                                интервью по компетенциям;
                            </li>
                            <li>
                                психометрические тесты и опросники;
                            </li>
                            <li>
                                центры оценки;
                            </li>
                            <li>
                                профессиональные тесты (для оценки соответствия знаний кандидатов требованиям отраслевых и корпоративных профессиональных стандартов);
                            </li>
                            <li>
                                экспертная проверка компетенций.
                            </li>
                        </ul>
                    </TwoColumns.Column>
                    <TwoColumns.Column>
                        <p className={'mb-6'}>
                            по оценке компетенций персонала».
                        </p>
                        <p className={'mb-6'}>
                            2. Проведена оценка 79 руководите- лей Общества (Руководители проектов, Заместители руководителей проектов, Руководители функциональных подразделений) с целью определения потенциала работников для формирования кадрового резерва и плана преемственности для обеспечения кадровой защищенности компании. По результатам оценки подготовлены консолидированные отчеты для руководства Общества и проведены сессии обратной связи для участников.
                        </p>
                        <p className={'mb-6'}>
                            3. Внедрена дистанционная оценка уровня компетенций и способностей претендентов на управленческие вакансии для процесса подбора персонала и согласования внутренних переводов сотрудников с применением тестов способностей, личностного опросника «Навигатор» и других инструментов. Проведено обучение по использованию данных инструментов для сотрудников Блока кадровой политики, отвечающих за подбор, оценку и развитие персонала.
                            <br/>112 внешних кандидатов прошли оценку в 2021 году на управленческие вакансии и вакансии руководителей при кадровых переводах в Обществе.
                        </p>
                    </TwoColumns.Column>
                </TwoColumns>
                <BlueBlock>
                    <h2 className={'max-md:px-8 mb-6 xl:w-2/3 uppercase text-3xl text-white'}>
                        ОБУЧЕНИЕ ПЕРСОНАЛА
                    </h2>
                    <p>В 2021 г. была продолжена программа по обязательному и корпоративному обучению. Обучение функциональным навыкам и развитию профессиональных/технических компетенций проходит как в дистанционном формате, так и в очном.
                        Основные процессы планирования, организации и контроля качества обучения работников регламентированы в положении об оценке персонала Общества. Всего обучение по всем направлениям в 2021 году прошли 4 107 работников.</p>
                </BlueBlock>
                <div className={'mb-8'}>
                    <Picture3 img={img10} alt={''} />
                </div>
                <H2>ПО ИТОГАМ 2021 ГОДА:</H2>
                <TwoColumns extraClass={'mb-8'}>
                    <TwoColumns.Column>
                        <ul className={'list-disc list-inside'}>
                            <li>
                                обеспечено выполнение приоритетных задач по организации обя-зательного обучения работников и развитию уровня профессиональных компетенций в соответствии с требованиями законодательств, надзорных и контролирующих органов с целью минимизации рисков в профессиональной деятельности;
                            </li>
                            <li>
                                централизовано обучение по всем направлениям обязательного обучения; выбор подрядчиков и оценка программ проводятся с участием профильных внутренних экспертов Общества;
                            </li>
                            <li>
                                реализованы программы развития функциональных компетенций и ком- петенций в области цифровых технологий в строительстве;
                            </li>
                        </ul>
                    </TwoColumns.Column>
                    <TwoColumns.Column>
                        <ul className={'list-disc list-inside'}>
                            <li>
                                разработан новый подход к системе оценки персонала, внедрены единые критерии оценки для определения соответствия профессиональных и корпоративных компетенций работников отраслевым требованиям, корпоративным стандартам организации работ и требованиям должности;
                            </li>
                            <li>
                                продолжено сотрудничество в от- раслевом контексте с профильными вузами, учебными центрами Ком- плекса градостроительной политики и строительства г. Москвы (МГСУ, МАДИ, МГУУ при Правительстве Москвы и др.);
                            </li>
                            <li>
                                регламентирована система адаптации, оценки и обучения персонала, которая соответствует потребностям бизнеса и направлена на развитие компетенций с учетом стратегических целей и задач Общества.
                            </li>
                        </ul>
                    </TwoColumns.Column>
                </TwoColumns>
                <div className={'mb-24'}>
                    <Picture3 img={img11} alt={''} />
                </div>
            </SectionLayout>
        </PageLayout>
    );
}