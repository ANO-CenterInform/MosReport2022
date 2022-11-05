import SectionLayout from "../../Layouts/SectionLayout";
import SingleParagraph from "../../Components/SingleParagraph";
import TwoColumns from "../../Layouts/TwoColumns";
import icon_train from './images/icon_train.svg';
import icon_road from './images/icon_road.svg';
import icon_tpu from './images/icon_tpu.svg';
import icon_profit from './images/icon_profit.svg';
import icon_rels from './images/icon_rels.svg';
import icon_krp from './images/icon_krt.svg'
import icon_cran from './images/icon_cran.svg'
import icon_plant from './images/icon_plant.svg'

// @ts-ignore
import img3 from './images/img3.jpg?format=avif;webp;jpg&picture&quality=60'
// @ts-ignore
import img4 from './images/img4.jpg?format=avif;webp;jpg&picture&quality=60'
// @ts-ignore
import logo1 from './images/logo1.jpg?format=avif;webp;jpg&picture&quality=60'
// @ts-ignore
import logo2 from './images/logo2.jpg?format=avif;webp;jpg&picture&quality=60'

import PageLayout from "../../Layouts/PageLayout";
import pageLinks from "./PageLinks";
import Picture3 from "../../Components/Picture3";


export default function Section4() {
    return (
        <PageLayout id={2} links={pageLinks} prevPage={'/pages/2/3'} nextPage={'/pages/2/5'}>
            <SectionLayout title={'ПРИОРИТЕТНЫЕ НАПРАВЛЕНИЯ ДЕЯТЕЛЬНОСТИ'}>
                <SingleParagraph>Инжиниринговая компания «Мосинжпроект» – лидер строительной отрасли Москвы и одна из самых динамично развивающихся компаний России.</SingleParagraph>
                <div className={'p-12 lg:p-16 bg-neutral-100 mb-8'}>
                    <h2 className={'text-3xl text-mosBlue-900 text-center uppercase mb-8'}>В НАСТОЯЩЕЕ ВРЕМЯ АО «МОСИНЖПРОЕКТ» ОСУЩЕСТВЛЯЕТ СВОЮ ДЕЯТЕЛЬНОСТЬ В СЛЕДУЮЩИХ СЕГМЕНТАХ СТРОИТЕЛЬНОГО РЫНКА МОСКВЫ:</h2>
                    <div className={'flex flex-col lg:flex-row flex-wrap justify-center'}>
                        <div className={'flex flex-col items-center text-center lg:w-1/3 px-8 mb-8 lg:mb-12'}>
                            <div className={'shrink-0 mb-6'}>
                                <img className={'mx-auto'} src={icon_train} alt={''}/>
                            </div>
                            <p>Строительство метро</p>
                        </div>
                        <div className={'flex flex-col items-center text-center lg:w-1/3 px-8 mb-8 lg:mb-12'}>
                            <div className={'shrink-0 mb-6'}>
                                <img className={'mx-auto'} src={icon_road} alt={''}/>
                            </div>
                            <p>Дорожное строительство</p>
                        </div>
                        <div className={'flex flex-col items-center text-center lg:w-1/3 px-8 mb-8 lg:mb-12'}>
                            <div className={'shrink-0 mb-6'}>
                                <img className={'mx-auto'} src={icon_tpu} alt={''}/>
                            </div>
                            <p>Развитие транспортно-пересадочных узлов (ТПУ)</p>
                        </div>
                        <div className={'flex flex-col items-center text-center lg:w-1/3 px-8 mb-8'}>
                            <div className={'shrink-0 mb-6'}>
                                <img className={'mx-auto'} src={icon_tpu} alt={''}/>
                            </div>
                            <p>Строительство зданий и сооружений гражданского назначения</p>
                        </div>
                        <div className={'flex flex-col items-center text-center lg:w-1/3 px-8 mb-8'}>
                            <div className={'shrink-0 mb-6'}>
                                <img className={'mx-auto'} src={icon_profit} alt={''}/>
                            </div>
                            <p>Реализация инвестиционной программы</p>
                        </div>
                    </div>
                </div>{/*End of block*/}
                <TwoColumns>
                    <TwoColumns.Column>
                        <p>Развитие транспортной системы города осуществляется посредством реализации государственной программы города Москвы «Развитие транспортной системы», принятой постановлением Правительства Москвы от 26.03.2019 г. No 243-ПП «О внесении изменения в постановление Правительства Москвы от 2 сентября 2011 г. No 408-ПП».
                            Целью программы является обеспечение комфортных условий жизнедеятельности населения города Москвы путем развития устойчиво функционирующей, безопасной, привлекательной и удобной для</p>
                    </TwoColumns.Column>
                    <TwoColumns.Column>
                        <p>всех групп населения транспортной системы как части Московского транспортного узла. Срок действия данной госпрограммы города Москвы ограничен 2021 годом.
                            В период 2022-2024 годов АО «Мосинжпроект» осуществляет планирование своей деятельности по строительству метро, объектов транспортной и городской инфраструктуры согласно «Адресной инвестиционной программе города Москвы» (АИП Москвы), утвержденной Постановлением Правительства города Москвы от 12.10.2021 No 1591-ПП.</p>
                    </TwoColumns.Column>
                </TwoColumns>{/* End of block */}
                <SingleParagraph>Для реализации поставленных задач по развитию транспортной инфраструктуры в АИП Москвы в период 2022-20246 запланиро- ваны следующие объемы финансирования:</SingleParagraph>
                <div className={'flex overflow-x-auto mb-8'}>
                    <Picture3 img={img3} alt={''} pictureClass={'max-md:shrink-0'} />
                </div>{/* End of block */}
                <SingleParagraph>Кроме того, Общество в целях увеличения выручки и обеспечения ее диверсификации при сохранении приоритета выполнения строительных проектов на рынке города Москвы рассматривает следующие новые сегменты деятельности:</SingleParagraph>
                <div className={'flex flex-col lg:flex-row justify-start items-center lg:justify-between lg:items-stretch gap-8 mb-12'}>
                    <div className={'flex flex-col flex-1 items-center px-6'}>
                        <img src={icon_rels} className={'mb-6'} alt={''} />
                        <p className={'text-center'}>Инфраструктура рельсового транспорта</p>
                    </div>
                    <div className={'flex flex-col flex-1 items-center px-6 border-l border-r border-dashed border-mosBlue-700'}>
                        <img src={icon_krp} className={'mb-6'} alt={''} />
                        <p className={'text-center'}>Комплексное развитие территорий (КРТ) и крупных градостроительных проектов (КГП)</p>
                    </div>
                    <div className={'flex flex-col flex-1 items-center px-6 border-r border-dashed border-mosBlue-700'}>
                        <img src={icon_cran} className={'mb-6'} alt={''} />
                        <p className={'text-center'}>Припортовая инфраструктура</p>
                    </div>
                    <div className={'flex flex-col flex-1 items-center px-6'}>
                        <img src={icon_plant} className={'mb-6'} alt={''} />
                        <p className={'text-center'}>Объекты общезаводского хозяйства в секторе промышленного строительства</p>
                    </div>
                </div>{/*Block end*/}
                <SingleParagraph extraClass={'pt-8 border-t border-gray-400 text-gray-400'}>6. Утверждено приказом департамента строительства города Москвы от 27.10.2021 NoПР-396/21</SingleParagraph>
                <div className={'mb-8'}>
                    <Picture3 img={img4} alt={''} pictureClass={'max-md:shrink-0'} />
                </div>
                <SingleParagraph>В 2021 году приступил к регулярной работе Комитет по новым проектам – коллегиаль- ный орган, управляющий процессами развития бизнеса и привлечения новых доход- ных проектов Общества.
                    За отчетный период АО «Мосинжпроект» получило успешные квалификации в РФ:</SingleParagraph>
                <TwoColumns extraClass={'bg-neutral-100'}>
                    <TwoColumns.Column extraClass={'justify-center items-center p-12'}>
                        <div className={'shrink-0'}>
                            <Picture3 img={logo1} pictureClass={'block mb-6'} className={'mx-auto'}  />
                            <p className={'text-center'}>на выполнение СМР для АО «МХК «Евро- Хим», одного из ведущих производителей минеральных удобрений в мире;</p>
                        </div>
                    </TwoColumns.Column>
                    <TwoColumns.Column extraClass={'justify-center items-center p-12'}>
                        <div className={'shrink-0'}>
                            <Picture3 img={logo2} pictureClass={'mb-6 block'} className={'mx-auto'}  />
                            <p className={'text-center'}>на выполнение СМР для АО «МХК «Евро- Хим», одного из ведущих производителей минеральных удобрений в мире;</p>
                        </div>
                    </TwoColumns.Column>
                </TwoColumns>
                <SingleParagraph extraClass={'mb-24'}>
                    На международном уровне холдинг подтвердил квалификацию и техническое соответствие на выполнение работ по строительству метро в городе Измир (Турция), а также по развитию инфраструктуры городского рельсового транспорта в Иерусалиме (Израиль) и Ташкенте (Узбекистан).
                    <br/>По итогам успешного квалификационного отбора поступают приглашения к участию в конкурсных процедурах Заказчиков. По наиболее перспективным проектам подтверждается участие в тендерах и осуществляется подготовка технико-коммерческих предложений.
                </SingleParagraph>
            </SectionLayout>
        </PageLayout>
    );
}
