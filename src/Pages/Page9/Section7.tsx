import PageLayout from "../../Layouts/PageLayout";
import SectionLayout from "../../Layouts/SectionLayout";
import TwoColumns from "../../Layouts/TwoColumns";
import H2 from "../../Components/H2";


export default function Section7() {
    return (
        <PageLayout id={9} links={7} prevPage={'/pages/9/6'} nextPage={'/pages/10/1'}>
            <SectionLayout title={'ЦИФРОВИЗАЦИЯ, ИНФОРМАЦИОННАЯ БЕЗОПАСНОСТЬ'}>
                <H2>
                    ПРОЕКТНЫЕ ИТ-ИНИЦИАТИВЫ
                </H2>
                <TwoColumns>
                    <TwoColumns.Column>
                        <p className={'mb-6'}>
                            Строительная отрасль также, как и другие, нацелена на повышение производительности труда. Один из инструментов достижения этой цели – цифровизация и автоматизация бизнес-процессов. Программа развития информационных и цифровых технологий АО «Мосинжпроект» в 2021-2025 годах разработана в целях формирования основ для решения стратегических задач и реализации ключевых проектов в области информационных технологий и цифровой трансформации, направленной на повышение конкурентоспособности и эффективности деятельности Общества.
                        </p>
                        <p>
                            Информационные и цифровые технологии рассматриваются в качестве одного из ключевых инструментов стратегических преобразований и
                        </p>
                    </TwoColumns.Column>
                    <TwoColumns.Column>

                        <p className={'mb-6'}>
                            развития бизнеса Общества на основе интеграции, автоматизации и повышения эффективности бизнеспроцессов его деятельности.
                        </p>
                        <p>
                            В основу цифрового ядра Общества заложена BIM-платформа в связке с Системой технического документооборота, обеспечивающей управление всей технической документацией строительно-инвестиционного проекта, созданием Единой среды общих данных, обеспечивающей работу и обмен информацией между всеми участниками проекта, включая территориально-распределенных участников, и созданием системы управления инженерными данными, обеспечивающей управление всей информацией об изделии/объекте. Другие информационные системы обеспечивают автоматизацию распределенных функций обеспечения.
                        </p>
                    </TwoColumns.Column>
                </TwoColumns>
                <div className={'p-8 mb-8 lg:mb-24 bg-neutral-100'}>
                    <p className={'mb-8'}>
                        Для планирования и реализации мероприятий в области информационных и цифровых технологий, направленных на достижение целей цифровой трансформации Общества, в 2021 году были инициированы ИТ-проекты по следующим функциональным областям:
                    </p>
                    <ol className={'list-decimal list-inside'}>
                        <li className={'font-bold mb-6'}>
                            Создание современной производственной среды:
                            <ul className={'list-disc list-inside'}>
                                <li className={'font-normal'}>
                                    Внедрение BIM-технологий;
                                </li>
                                <li className={'font-normal'}>
                                    Внедрение системы технического документооборота (СТДО);
                                </li>
                                <li className={'font-normal'}>
                                    Внедрение цифровой платформы, обеспечивающей регистрацию, оповещение, расследование, выполнение мероприятий, анализ в области HSE;
                                </li>
                                <li className={'font-normal'}>
                                    Внедрение автоматизированной информационной системы строительного контроля.
                                </li>
                            </ul>
                        </li>
                        <li className={'font-bold mb-6'}>
                            Сквозная автоматизация бизнеспроцессов:
                            <ul className={'list-disc list-inside'}>
                                <li className={'font-normal'}>
                                    Внедрение системы электронного документооборота (СЭД 2.0);
                                </li>
                                <li className={'font-normal'}>
                                    Внедрение цифровой платформы для блока управления поставками;
                                </li>
                                <li className={'font-normal'}>
                                    Внедрение системы управления стратегическими проектами;
                                </li>
                                <li className={'font-normal'}>
                                    Реализация ИТ-задач в рамках проекта «Налоговый мониторинг».
                                </li>
                            </ul>
                        </li>
                        <li className={'font-bold mb-6'}>
                            Управление данными, информацией
                            <ul className={'list-disc list-inside'}>
                                <li className={'font-normal'}>
                                    Внедрение MDM-системы для централизованного управления справочными данными.
                                </li>
                                <li className={'font-normal'}>
                                    Внедрение информационно-аналитической системы АРМ Генерального директора.
                                </li>
                                <li className={'font-normal'}>
                                    Внедрение системы предотвращения утечек информации (DLP).
                                </li>
                                <li className={'font-normal'}>
                                    Внедрение системы управления событиями информационной безопасности (SIEM).
                                </li>
                            </ul>
                        </li>
                    </ol>
                </div>
            </SectionLayout>
        </PageLayout>
    );
}
