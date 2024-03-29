// @ts-ignore
import man1 from "../../../src/images/page1_man1.jpg?format=avif;webp;jpg&picture&quality=60'";// @ts-ignore
import man2 from "../../../src/images/page1_man2.jpg?format=avif;webp;jpg&picture&quality=60'";// @ts-ignore
import man3 from "../../../src/images/page1_man3.jpg?format=avif;webp;jpg&picture&quality=60'";// @ts-ignore
import icon_metro from "../../../src/icons/icon_metro.svg";
import icon_train from "../../../src/icons/icon_train.svg";
import icon_builder from "../../../src/icons/icon_builder.svg";// @ts-ignore
import img4 from "../../../src/images/page1_img4.jpg?format=avif;webp;jpg&picture&quality=60'";// @ts-ignore
import img5 from "../../../src/images/page1_img5.jpg?format=avif;webp;jpg&picture&quality=60'";// @ts-ignore
import img6 from "../../../src/images/page1_img6.jpg?format=avif;webp;jpg&picture&quality=60'";// @ts-ignore
import img7 from "../../../src/images/page1_img7.jpg?format=avif;webp;jpg&picture&quality=60'";// @ts-ignore
import img8 from "../../../src/images/page1_img8.jpg?format=avif;webp;jpg&picture&quality=60'";// @ts-ignore
import img9 from "../../../src/images/page1_img9.jpg?format=avif;webp;jpg&picture&quality=60'";// @ts-ignore
import img10 from "../../../src/images/page1_img10.jpg?format=avif;webp;jpg&picture&quality=60'";// @ts-ignore
import img11 from "../../../src/images/page1_img11.jpg?format=avif;webp;jpg&picture&quality=60'";// @ts-ignore
import img12 from "../../../src/images/page1_img12.jpg?format=avif;webp;jpg&picture&quality=60'";// @ts-ignore
import Picture from "../../Components/Picture3";
import icon_project from "../../../src/icons/icon_project.svg";
import PersonCard from "../../Components/PersonCard";
import Counter from "../../Components/Couter";
import SectionLayout from "../../Layouts/SectionLayout";
import PageLayout from "../../Layouts/PageLayout";
import BlueBlock from "../../Components/BlueBlock";

export default function Section1() {
    return (

        <PageLayout id={1} links={5} prevPage={'/'} nextPage={'/pages/1/2'}>
            <SectionLayout title={'обращение к акционерам председателя совета директоров, генерального директора и исполнительного директора по девелопменту'} >
                <div className="relative md:static lg:grid xl:grid-cols-[100px_300px_22px_300px_22px_300px_100px]">
                    <div>{''}</div>
                    <PersonCard
                            image={man1}
                            name={'Газизуллин Марс Мулланурович'}
                            job={'Председатель совета директоров АО «Мосинжпроект»'} />
                    <div className="md:hidden w-full bg-mosBlue-700 absolute h-[144px] top-[286px] -z-[1]">{''}</div>
                    <div>{''}</div>
                    <PersonCard
                            image={man2}
                            name={'Кравцов Юрий Николаевич'}
                            job={'Генеральный директор АО «Мосинжпроект»'} />
                    <div>{''}</div>
                        <PersonCard
                            image={man3}
                            name={'Суниев Альберт Альфатович'}
                            job={'Исполнительный директор по девелопменту АО «Мосинжпроект»'} />
                    <div>{''}</div>
                </div>{/*Block end*/}

                <div className="-mt-[200px] pt-[200px] 2xl:-mt-[144px] lg:pt-[200px] 2xl:pt-[144px] px-6 bg-mosBlue-700 text-white">
                    <p className="mb-8 pt-6">«Мосинжпроект» в 2021 году значительно приблизил реализацию ключевого проекта современного отечественного метростроения – создание Большой кольцевой линии московского метро. Весной были запущены две станции – «Народное Ополчение» и «Мнёвники». В декабре открыт участок Большой кольцевой линии метро с десятью станциями. По состоянию на конец 2021 года на Большом кольце работают 22 станции.</p>
                    <p className="pb-8">Всего на БКЛ протяженностью 70 км будет функционировать 31 станция, то есть сейчас пассажиров принимают уже две трети из них. Завершение тоннелепроходки на Большом кольце – это огромный труд более чем 4 000 строителей в густонаселенных районах Москвы с большим количеством инженерных коммуникаций, в сложных гидрогеологических условиях.</p>
                </div>{/*Block end*/}

                <div className="flex flex-wrap lg:flex-nowrap gap-[50px] justify-center md:justify-between py-8 px-12 bg-neutral-100">
                    <div className="flex flex-col items-center justify-start">
                        <div className="mb-6"><img src={icon_metro} alt="" /></div>
                        <div>
                            <p className="text-3xl md:text-4xl font-bold text-mosBlue-700"><Counter min={0} max={70}/> км</p>
                            <p className="text-sm">протяженность БКЛ</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-start">
                        <div className="mb-6"><img src={icon_train} alt="" /></div>
                        <p className="text-3xl md:text-4xl font-bold text-mosBlue-700"><Counter min={0} max={31}/> станция</p>
                    </div>
                    <div className="flex flex-col items-center justify-start">
                        <div className="mb-6"><img src={icon_builder} alt="" /></div>
                        <div>
                            <p className="text-3xl md:text-4xl font-bold text-mosBlue-700"><Counter min={3800} max={4000}/> строителей</p>
                            <p className="text-sm">участвуют в строительстве БКЛ</p>
                        </div>
                    </div>
                </div>{/*Block end*/}

                <div className="py-8 px-12 bg-neutral-100 md:mb-6">
                    <p className="mb-6">При строительстве тоннелей на БКЛ были задействованы 33 тоннелепроходческих механизированных комплекса, которые проходили под водоемами, действующими объектами метрополитена и железной дороги, крупными автомагистралями. Мы использовали современные программы, позволяющие отслеживать влияние подземных работ на городскую среду.</p>
                    <p>Специалисты холдинга получили неоценимый опыт подземного строительства и тоннелепроходческих работ, который будет предложен для реализации различных проектов и в России, и за ее пределами.            </p>
                </div>{/*Block end*/}

                <div className="md:flex justify-between gap-6">
                    <div className="flex flex-1 justify-center items-center max-md:p-12 max-md:border-[35px] border-white p-4 bg-mosBlue-700">
                        <p className="text-white text-lg md:text-xl 2xl:text-3xl uppercase text-center">помимо реализации программы развития метрополитена, «мосинжпроект» занимается:</p>
                    </div>
                    <div className={`w-full lg:w-[751px]`}><Picture img={img4}  alt={''} /></div>
                </div>{/*Block end*/}

                <div className={"py-8 px-12 md:mb-6"}>
                    <p>Строительством новой городской магистрали – Московского скоростного диаметра, который будет сформирован Юго-Восточной и Северо-Восточной хордами, а также строительством Южной рокады.</p>
                </div>{/*Block end*/}

                <div className={"flex flex-wrap md:mb-8 md:flex-nowrap md:gap-[30px]"}>
                    <div className={"flex flex-col xl:basis-[752px]"}>
                        <div><Picture img={img5}  alt={''} /></div>
                        <div className={"p-8 bg-neutral-100  flex-1"}>
                            <p>Дорожным строительством в зоне жилой застройки в северной и южной частях промзоны «ЗИЛ». Так, на ЗИЛе строится мост длиной более 600 метров через затон Новинки. Вместе с прилегающей улично-дорожной сетью он обеспечит транспортную доступность новых жилых кварталов на территории бывшей промзоны и свяжет строящуюся Симоновскую набережную с районом Южнопортовый. Это позволит разгрузить Третье транспортное кольцо (ТТК), Варшавское шоссе и проспект Андропова.</p>
                        </div>
                    </div>
                    <div className="flex flex-col xl:basis-[359px] max-md:border-[35px] border-white">
                        <div><Picture img={img6}  alt={''} className={'mx-auto'} /></div>
                        <div className={"p-8 bg-mosRose-500 text-white flex items-center justify-center flex-1"}>
                            <p className={'text-center'}>Развитием транспортной сети в административно-деловом центре «Коммунарка» в Новой Москве.</p>
                        </div>
                    </div>
                </div>{/*Block end*/}

                <div className={'relative md:mb-8'}>
                    <div><Picture img={img7}  alt={''} /></div>
                    <div className={'p-8 bg-neutral-100 flex max-md:flex-col flex-wrap lg:flex-nowrap'}>
                        <div className={'max-md:order-2 lg:absolute lg:bottom-0 lg:left-0 lg:w-[376px] lg:border-r-[35px] lg:border-t-[35px] border-white'}>
                            <div><Picture img={img8}  alt={''} /></div>
                            <BlueBlock extraClass={'text-center'}>
                                Строительством многофункционального комплекса «Мнёвники».
                            </BlueBlock>
                        </div>
                        <p className={'max-md:order-1 max-md:pt-0 p-6 lg:pl-[400px]'}>Строительством уникального, знакового для России объекта «Национальный космический центр», который станет одним из крупнейших в мире космических центров. Площадь объектов превысит 250 тыс. кв. метров. Высотной доминантой комплекса зданий будет 288-метровая башня со шпилем. Именно на строительстве Национального космического центра тестируются и внедряются новые технологии на разных этапах строительного производства, охраны труда, промышленной безопасности.</p>
                    </div>
                </div>{/*Block end*/}

                <div className={'md:mb-8'}>
                    <div><Picture img={img9}  alt={''} /></div>
                    <div className={'p-8 bg-neutral-100 flex flex-wrap max-md:flex-col lg:flex-nowrap'}>
                        <div className={'shrink-0'}><Picture img={img10}  alt={''} className={'max-md:order-2 max-md:pb-6'} /></div>
                        <div className={'max-md:order-1 md:pl-8 max-md:mb-8'}>
                            <p>
                                АО «Мосинжпроект» достиг значительных успехов в области девелопмента, которые наряду с другими достижениями позволили улучшить жизнь москвичей и сделать ее комфортнее.
                            </p>
                            <ul className={'list-inside list-disc ml-4'}>
                                <li>
                                    По итогам 2021 года по программе развития транспортно-пересадочных узлов в рамках развития транспортной системы столицы были проданы три крупных ТПУ, заключены договоры купли-продажи долей ТПУ Нижегородская Терминал 1 (ТРЦ) и ТПУ Кленовый бульвар (МФЦ), в границах которых будут реализованы проекты строительства ТРЦ и МФЦ, соответственно.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>{/*Block end*/}

                <div className={'flex flex-col md:flex-row flex-wrap lg:flex-nowrap lg:gap-6 mb-8 justify-center lg:justify-between'}>
                    <div className={'flex flex-col gap-6'}>
                        <div className={'text-3xl text-white bg-mosBlue-700 uppercase p-6'}>
                            <p className={'text-center'}>в проектном портфеле общества присутствуют также и крупные градостроительные проекты:</p>
                        </div>
                        <div className={'flex flex-col xl:flex-row lg:gap-6 lg:justify-between'}>
                            <div className={'max-md:order-2 max-md:px-8 max-md:mb-8 shrink-0'}>
                                <Picture img={img11} alt={''} className={'mx-auto'}/>
                            </div>
                            <div className={'px-6 lg:pl-8 max-md:order-1 max-md:mb-8 max-md:px-8'}>
                                <ul>
                                    <li className={'list-disc list-outside'}>
                                        строительство многофункционального жилого комплекса, расположенного в районе деревни Ватутинки, который состоит из 16 очередей, включающих жильe, недвижимость, МФЦ, ФОК, торговый центр с кинотеатром и наземный паркинг на 450 машиномест. Первая очередь строительства планируется к реализации Московскому фонду реновации, остальные очереди являются коммерческой застройкой. Всего в рамках строительства проекта будет возведено 1,2 млн кв. м.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>{/*Block end*/}

                    <div className={'flex flex-col md:mb-8 lg:w-[364px] shrink-0'}>
                        <div className={'max-md:order-2 max-md:px-8'}><Picture img={img12}  alt={''} className={'mx-auto'} /></div>
                        <div className={'p-6 max-md:order-1 max-md:px-8 max-md:pt-0'}>
                            <ul>
                                <li className={'list-disc list-outside'}>серфинг-парк «Волна» – крупномасштабный проект комплексного освоения территорий Мневниковской поймы, архитектурная концепция которого разработана крупным международным архитектурным бюро Werner Sobek. Проект включен в Адресную инвестиционную программу города Москвы на 2021-2024 годы.</li>
                            </ul>
                        </div>
                    </div>
                </div>{/*Block end*/}

                <div className={'flex flex-col lg:flex-row flex-wrap lg:flex-nowrap bg-neutral-100 p-6 lg:mb-24 justify-center gap-6'}>
                    <div className={'text-right flex-1'}>
                        <p className={'text-sm'}>более</p>
                        <p className={'text-9xl text-mosBlue-700 font-bold'} data-aos="fade-right" data-aos-delay="100"><Counter min={0} max={60} className={''} /></p>
                        <p className={'text-4xl text-mosBlue-700 font-bold'}>проектных компаний (SPV)</p>
                    </div>
                    <div className={'flex-1'}>
                        <div className={'p-16 lg:p-8 lg:w-full flex flex-col items-center lg:items-start gap-6'}>
                            <img src={icon_project} alt={''} className={'w-28'}/>
                            <p>создано для реализации инвестиционных проектов АО «Мосинжпроект»</p>
                        </div>
                    </div>
                    <div className={'flex-1'}>
                        <p className={'mb-4'}>Всего для реализации инвестиционных проектов АО «Мосинжпроект» путем продажи долей/акций SPV или строительства собственными силами Обществом создано более 60 проектных компаний (SPV).</p>
                        <p>В 2021 году была продолжена активная работа по застройке земельных участков по всей Москве, в том числе по столичной программе реновации. В рамках реализации проектов дочерних обществ девелоперского блока АО «Мосинжпроект» было введено 942 тыс. кв. м.</p>
                    </div>
                </div>
            </SectionLayout>
        </PageLayout>


    );
}
