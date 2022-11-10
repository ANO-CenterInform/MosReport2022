import PageLayout from "../../Layouts/PageLayout";
import SectionLayout from "../../Layouts/SectionLayout";
import TwoColumns from "../../Layouts/TwoColumns";
import icon_money from './img/icon_money_blue.svg'
import Counter from "../../Components/Couter";


export default function Section6() {
    return (
        <PageLayout id={9} links={7} prevPage={'/pages/9/5'} nextPage={'/pages/9/7'}>
            <SectionLayout title={'ОТВЕТСТВЕННЫЙ ПОДХОД В ЦЕПОЧКЕ ПОСТАВОК'}>
                <TwoColumns>
                    <TwoColumns.Column>
                        <p>
                            При управлении цепочкой поставок АО «Мосинжпроект» стремится выстраивать отншения с контрагентами, основанные на ответственном ведении бизнеса. Для поддержания принципов устойчивого развития в рамках управления поставками компании в 2021 году удалось реализовать следующие инициативы:
                        </p>
                        <ul className={'list-disc list-inside'}>
                            <li>
                                Внедрение новых подходов к закупкам в АО «Мосинжпроект» и дочерних и зависимых обществах (ДЗО), позволяющих повысить надёжность поставляемых материально-технических ресурсов. Оценка предложений поставщиков учитывает не только ценовые, но и качественные критерии выбора поставщика.
                            </li>
                            <li>
                                Внедрение стандарта по квалификации контрагентов (ДЗО, осуществляющих коммерческие закупки11), пилотирование процесса мониторинга и предварительной проработки рынка (для АО «Мосинжпроект» и ДЗО в контуре 223-ФЗ). Разработана анкета системы оценки поставщиков и подрядчиков по ESG-критериям, включающая вопросы окружающей среды, социальной ответственности и управления качеством (в т.ч. ISO), что позволяет повысить качество контрагентов АО «Мосинжпроект» и ДЗО.
                            </li>
                        </ul>
                    </TwoColumns.Column>
                    <TwoColumns.Column>
                        <ul className={'list-disc list-inside'}>
                            <li>
                                Цифровизация документооборота по формированию потребности на поставку внутри компании на базе 1С для Дивизиона метро.
                            </li>
                            <li>
                                Цифровое информационное моделирование строительства с учётом BIM-моделей материалов и оборудования, предоставляемых контрагентами.
                            </li>
                        </ul>
                        <p className={'mb-8'}>
                            Увеличение количества строительных объектов в 2021 году повлекло рост затрат на закупку на 38 % по сравнению с 2020 годом:
                        </p>
                        <div className={'flex flex-col lg:flex-row lg:justify-between justify-center gap-8'}>
                            <div>
                                <p className={'mb-4'}><img src={icon_money} alt={''}/></p>
                                <p>
                                    <span className={'text-5xl font-bold text-mosBlue-700'}><Counter min={100} max={142} />,5</span>
                                    <span className={'text-mosBlue-700 uppercase'}>МЛРД РУБ.</span>
                                </p>
                                <p>
                                    объявить дивидендами
                                </p>
                            </div>
                            <div>
                                <p className={'mb-4'}><img src={icon_money} alt={''}/></p>
                                <p>
                                    <span className={'text-5xl font-bold text-mosBlue-700'}><Counter min={100} max={196} />,1</span>
                                    <span className={'text-mosBlue-700 uppercase'}>МЛРД РУБ.</span>
                                </p>
                                <p>
                                    затраты на закупку в 2021 году
                                </p>
                            </div>
                        </div>
                    </TwoColumns.Column>
                </TwoColumns>
                <p className={'pt-8 mb-8 max-md:px-8 lg:mb-24 border-t border-gray-400 text-gray-400'}>
                    11. Коммерческие закупки — это закупки, которые проводятся коммерческими организациями в соответствии с собственными регламентами и правилами, принятыми организаторами, с использованием собственных финансовых средств.
                </p>
            </SectionLayout>
        </PageLayout>
    );
}
