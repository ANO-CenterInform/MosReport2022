import PageLayout from "../../Layouts/PageLayout";
import SectionLayout from "../../Layouts/SectionLayout";

export default function Section2() {
    return (
        <PageLayout id={3} links={4} prevPage={'/pages/3/1'} nextPage={'/pages/3/3'}>
            <SectionLayout title={'Организационная структура'} extraClass={'justify-center h-full'}>

                    <div className={'flex flex-col md:flex-row max-md:px-8 md:gap-8'}>
                        <div className={'md:w-1/2'}>
                            <p className={'mb-4'}>Организационная структура АО «Мосинжпроект» утверждена приказом генерального директора Общества No1193-ЗП от 15 декабря 2021 г. (Приложение 1).
                                Действующая структура Общества соответствует существующим бизнес-процессам и отражает взаимодействие структурных подразделений.
                                Компания имеет горизонтальную структуру управления по четко распределенным функциям и центрам ответственности за бизнес-процессы.
                                В 2021 году реализован проект по переходу на матричную систему управления проектами. В рамках данного проекта в Блоке операционной деятельности были созданы команды управления проектами, включающие работников функциональных структурных подразделений – ресурсных пулов. В настоящее время в Обществе действует принцип функционального и оперативного подчинения работников.
                                Матричная система управления проектами позволяет оптимизировать использование и повысить управляемость человеческими ресурсами, а также компетенциями, поддерживая все проекты строительства на разных этапах жизненного цикла.</p>
                        </div>
                        <div className={'md:w-1/2'}>
                            <p className={'mb-4'}>Организационная структура Общества имеет следующие уровни управления:</p>
                            <ol className={'ml-4 list-outside list-disc md:mb-4'}>
                                <li className={'mb-1'}>для производственных подразделений (Дивизиона строительства метро, Дивизиона гражданского строительства, Дивизиона дорожного строительства) – 6 уровней управления.</li>
                                <li className={'mb-1'}>для функциональных подразделений – 5 уровней управления.</li>
                            </ol>
                            <p className={'mb-4'}>Норма управляемости в Обществе на конец 2021 года составляла 6,7 (соотношение количества работников на одного руководителя). Бенчмарк по данной метрике составляет 7 работников на одного руководителя. Показатель Общества соответствует лучшим мировым практикам.
                                В результате перехода на новую организационную структуру были достигнуты основные цели. Кроме того, в настоящее время проводится работа по приведению организационных структур дочерних обществ в соответствие с требованиями к целевой организационной структуре Общества. Приложение 1. Приказ No1193-ЗП от 15 декабря 2021 г.
                                Приложение 2. Требование к организационной структуре.</p>
                        </div>
                    </div>{/*Block end*/}
            </SectionLayout>
        </PageLayout>
    );
}
