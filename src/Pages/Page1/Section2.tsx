import img1 from '../../../src/images/page1_screen2_img1.jpg';
import img2 from '../../../src/images/page1_screen2_img2.jpg';
import Quote from "../../Components/Quote";
import Picture from "../../Components/Picture";
import SectionLayout from "../../Layouts/SectionLayout";
import React, {Suspense, useEffect} from "react";
import AOS from "aos";
import Sidebar from "../../Components/Sidebar";
import Footer from '../../Components/Footer'
import PageLayout from "../../Layouts/PageLayout";

export default function Section2() {

    useEffect(() => {
        AOS.init();
    }, [])

    const pageLinks = [
        { "name": '01', "path": "/1" },
        { "name": '02', "path": "/2" },
        { "name": '03', "path": "/3" },
        { "name": '04', "path": "/4" },
        { "name": '05', "path": "/5" }
    ];

    return (
        <PageLayout id={1} links={pageLinks} prevPage={'/page/1'} nextPage={'/page/3'}>
            <SectionLayout title={'планы на будущее'}>
                <div className={'mb-8'}>
                    <Picture img={img1} alt={''} />
                </div>
                <div className={'mb-8 flex flex-wrap md:flex-nowrap md:gap-6 lg:gap-8'}>
                    <div className={'lg:w-1/2 max-md:px-8'}>
                        <p className={'mb-6'}>Заместитель Мэра Москвы в Правительстве Москвы по вопросам градостроительной политики и строительства Андрей Юрьевич Бочкарёв сообщил о том, что до конца 2024 года в столице будет построено 27 станций метро. АО «Мосинжпроект», как генеральный проектировщик и генеральный подрядчик, является активным участником процесса строительства новых линий и станций метро.</p>

                        <Quote extraClass={'mb-6'} img={img2} name={'Бочкарев Андрей Юрьевич'}>
                            Заместитель Мэра Москвы в Правительстве Москвы по вопросам градостроительной политики и строительства
                        </Quote>

                        <p className={'mb-6'}>В 2022 году будет продолжено строительство БКЛ – сейчас ведутся работы на северо-восточном и восточном участках, также продолжается реконструкция станций «Варшавская» и «Каширская». После ввода девяти станций самое протяженное в мире метрокольцо замкнется. В планах холдинга на ближайшие два года – ввод 14 станций метро. Помимо девяти станций БКЛ сюда войдут станции «Пыхтино» и «Внуково» нового участка Калининско-Солнцевской линии, участок Люблинско-Дмитровской ветки – станции «Яхромская», «Лианозово» и «Физтех». Также планируется ввод в эксплуатацию электродепо «Южное» (Братеево-2) и «Аминьевское».</p>

                        <p className={'mb-6'}>В активной стадии находится строительство девяти станций будущей Троицкой линии метро. На текущий момент строительная готовность участка с пятью станциями первой очереди от «Новаторской» до «Мамырей» составляет 50 процентов. Между станциями пройдено восемь однопутных тоннелей, на некоторых станциях уже начался монтаж эскалаторов, на «Новаторской» строится пересадка на одноименную станцию Большой кольцевой линии.</p>

                        <p className={'max-md:mb-6'}>На центральном участке Троицкой линии началось строительство трех станций – «Вавиловской», «Академической» и «Крымской», еще одна – «ЗИЛ» – находится на этапе проектирования, и уже стартовала тоннелепроходка. В этом году начинаем также строительство Рублёво-Архангельской и Бирюлёвской веток метро.</p>
                    </div>
                    <div className={'lg:w-1/2 max-md:px-8'}>
                        <p className={'mb-6'}>В планах Общества – наращивание работы в крупных городских агломерациях. Мосинжпроект готов выступать в качестве оператора комплексного освоения территорий и реализовывать региональные градостроительные проекты под ключ. Из ближайших перспективных задач – комплексное развитие транспортной инфраструктуры Екатеринбурга.
                            Кроме того, уже сейчас холдинг реализует крупный проект в Магнитогорске. По результатам конкурса Институт «Мосинжпроект», входящий в структуру инжинирингового холдинга, стал генеральным проектировщиком уникального общественного пространства «Притяжение», недавно началось проектирование объектов второй очереди.</p>

                        <p className={'mb-6'}>Инжиниринговый холдинг готов предложить свои услуги по реализации проектов в области рельсового транспорта, портовой инфраструктуры, общестроительных работ для предприятий нефтегазохимии и горной металлургии. В минувшем году холдинг успешно прошел предварительные квалификации на строительство промышленных объектов и мостовых сооружений для ряда крупных отечественных компаний. В целом определены сегменты российского инфраструктурного строительства, в которых «Мосинжпроект» сможет развивать свой бизнес в последующие 5–10 лет. Объем инвестиций в эти сегменты до 2030 года оценивается в 30 трлн. рублей. «Мосинжпроект» подтвердил свою квалификацию и техническое соответствие, позволяющие выполнять работы по строительству транспортных объектов на международных рынках.
                            В планах АО «Мосинжпроект» на 2022-2024 годы по девелоперской деятельности – дальнейшая реализации инвестиционных проектов по продаже ТПУ, реализация таких крупномасштабных проектов, как серфинг-парк «Волна», «Ватутинки» и строительство жилого небоскреба «1Tower» на территории ММДЦ «Москва-Сити».</p>

                        <p>Девелоперское направление деятельности принесет Обществу прибыль в размере 24,8 млрд рублей, по итогам получения которой будут выплачены дивиденды акционерам в размере около 8 млрд рублей.
                            Инжиниринговый холдинг «Мосинжпроект» является оператором ключевых градостроительных программ развития города и ежегодно подтверждает накопленный уровень профессионализма своими высокими рейтинговыми позициями, а созданные силами холдинга проекты становятся победителями престижных национальных и международных конкурсов.</p>
                    </div>
                </div>
            </SectionLayout>
        </PageLayout>
    );
}
