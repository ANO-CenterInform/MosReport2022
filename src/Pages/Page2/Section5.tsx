import PageLayout from "../../Layouts/PageLayout";
import SectionLayout from "../../Layouts/SectionLayout";
import SingleParagraph from "../../Components/SingleParagraph";
import icon_rise from "./images/icon_rise.svg";
import icon_worker from "./images/icon_worker.svg";
import icon_fall from "./images/icon_fall.svg";
import icon_metro from "./images/icon_metro.svg";
import icon_roads from "./images/icon_roads.svg";
import icon_territory from "./images/icon_territory.svg";
import H2 from "../../Components/H2";

export default function Section5() {
    return (
        <PageLayout id={2} links={7} prevPage={'/pages/2/4'} nextPage={'/pages/2/6'}>
            <SectionLayout title={'КОНКУРЕНТНОЕ ОКРУЖЕНИЕ АКЦИОНЕРНОГО ОБЩЕСТВА И ФАКТОРЫ РИСКА. УПРАВЛЕНИЕ РИСКАМИ, ВЛИЯНИЕ ПАНДЕМИИ'}>
                <SingleParagraph>Хотя общее положение экономики России в 2021 году улучшилось относительно кризисного 2020 года, строительный сектор столкнулся с рядом негативных последствий коронавирусных ограничений:</SingleParagraph>
                <div className={'flex flex-col lg:flex-row flex-wrap items-center justify-center bg-neutral-100 p-8 mb-8'}>
                    <div className={'flex flex-col items-center text-center lg:w-1/3 px-8 max-md:pb-6'}>
                        <div className={'shrink-0 mb-6'}>
                            <img className={'mx-auto'} src={icon_rise} alt={''}/>
                        </div>
                        <p>Рост цен на строительные материалы по данным Росстат составил 23,8% (7)</p>
                    </div>
                    <div className={'flex flex-col items-center text-center lg:border-l lg:border-r border-dashed border-gray-500 lg:w-1/3 px-8 max-md:pb-6'}>
                        <div className={'shrink-0 mb-6'}>
                            <img className={'mx-auto'} src={icon_worker} alt={''}/>
                        </div>
                        <p>Нехватка рабочих на стройках — по предварительной оценке Минстроя дефицит составил около 3 млн человек (8)</p>
                    </div>
                    <div className={'flex flex-col items-center text-center lg:w-1/3 px-8 max-md:pb-6'}>
                        <div className={'shrink-0 mb-6'}>
                            <img className={'mx-auto'} src={icon_fall} alt={''}/>
                        </div>
                        <p>Финансовые сложности, вызванные исполнением договоров</p>
                    </div>
                </div>
                <SingleParagraph>В результате рост себестоимости строительства составил более 15% (9).
                    <br/>Непростая геополитическая ситуация, ослабление национальной валюты, сокращение возможностей банковского сектора, угроза очередных волн пандемии COVID-19 являются существенными факторами риска для строительной отрасли РФ. В условиях потенциального снижения объема проектного финансирования ожидается обострение конкурентной борьбы.
                </SingleParagraph>
                <div className={'mb-8 pt-8 max-md:px-8 border-t border-gray-400'}>
                    <ul className={'list-inside text-gray-400'}>
                        <li>7. https://realty.ria.ru/20220112/stroymaterialy-1767542274.html</li>
                        <li>8. https://rg.ru/2021/08/03/v-minstroe-nazvali-masshtab-deficita-kadrov-v-otrasli.html</li>
                        <li>9. https://www.kommersant.ru/doc/4926989</li>
                    </ul>
                </div>
                <H2>ОСНОВНЫЕ КОНКУРЕНТЫ ОБЩЕСТВА ПО СЕКТОРАМ:</H2>
                <div className={'flex flex-col lg:flex-row flex-wrap items-center justify-center bg-neutral-100 p-8 mb-8'}>
                    <div className={'flex flex-col items-center text-center lg:w-1/3 px-8 max-md:pb-6'}>
                        <div className={'shrink-0 mb-6'}>
                            <img className={'mx-auto'} src={icon_metro} alt={''}/>
                        </div>
                        <p><span className={'text-mosBlue-700'}>Строительство метрополитена</span>
                            <br/>АО «Мосметрострой»,
                            <br/>АО «Объединение ИНГЕОКОМ», ООО «ИБТ»</p>
                    </div>
                    <div className={'flex flex-col items-center text-center max-md:pb-6  lg:w-1/3 lg:border-l lg:border-r border-dashed border-gray-500'}>
                        <div className={'shrink-0 mb-6'}>
                            <img className={'mx-auto'} src={icon_roads} alt={''}/>
                        </div>
                        <p>
                            <span className={'text-mosBlue-700'}>Дорожное строительство</span>
                            <br/>ПАО «Мостотрест», ООО «ИФСК «АРСК», АО «МСУ-1»
                        </p>
                    </div>
                    <div className={'flex flex-col items-center text-center lg:w-1/3 px-8'}>
                        <div className={'shrink-0 mb-6'}>
                            <img className={'mx-auto'} src={icon_territory} alt={''}/>
                        </div>
                        <p><span className={'text-mosBlue-700'}>Комплексное развитие территорий и КГП</span>
                            <br/>ГК ПИК, ГК ЛСР, компания «ИНТЕКО»</p>
                    </div>
                </div>
                <SingleParagraph extraClass={'mb-24'}>В целях снижения влияния рисков АО «Мосинжпроект» продолжит качественную и своевременную реализацию текущих проектов, развитие компетенций персонала, создание уникальных комплексных решений по развитию городской транспортной
                    инфраструктуры и активное продвижение в новых отраслевых сегментах.</SingleParagraph>
            </SectionLayout>
        </PageLayout>
    );
}
