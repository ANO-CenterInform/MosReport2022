import PageLayout from "../../Layouts/PageLayout";
import pageLinks from "./PageLinks";
import SectionLayout from "../../Layouts/SectionLayout";
import TwoColumns from "../../Layouts/TwoColumns";
// @ts-ignore
import img5 from './images/img5.jpg?format=avif;webp;jpg&picture&quality=60'
import Picture3 from "../../Components/Picture3";

export default function Section6() {
    return (
        <PageLayout id={2} links={pageLinks} prevPage={'/pages/2/5'} nextPage={'/pages/2/7'}>
            <SectionLayout title={'РАЗРАБОТКА И ВНЕДРЕНИЕ ИНСТРУМЕНТОВ В ОБЛАСТИ ИННОВАЦИЙ, ПРИМЕНЕНИЕ НОВЫХ ТЕХНОЛОГИЙ'}>
                <TwoColumns>
                    <TwoColumns.Column>
                        <p>Ежегодно АО «Мосинжпроект» реализует программу научно-технического сопровождения на всех стадиях строительства.
                            В 2020-2021 годах на базе Департамента градостроительной политики города Москвы при участии ООО «СпецГеоТрансПроект», ООО «Центр исследования опасных факторов пожаров», МГУ им. М.В. Ломоносова, Горного института НИТУ «МИСИС», АО «Мосинжпроект» и АО «УРСТ» проведены исследования и организовано выполнение научно-
                            исследовательских работ (НИР) по темам:</p>
                            <ol className={'list-decimal'}>
                                <li>Методы обеспечения пожарной безопасности и разработка Методических указаний по определению средств и методов обеспечения пожарной безопасности объектов Московского метрополитена.</li>
                                <li>Разработка Руководства по контролю качества скрытых работ геофизическими методами при строительстве подземных объектов, включая объекты метрополитена, на территории Москвы.</li>
                            </ol>
                        <p>Выполнен большой объём исследований на натурных моделях, в том числе на строительной площадке станции «Кунцевская» БКЛ, где впервые в РФ была создана натурная модель кольца тоннельной обделки из сборных высокоточных железобетонных блоков диаметром 6 м.</p>
                        <p>На основании систематизации дефектов заобделочного пространства, возникающих при проходке и эксплуатации тоннелей метрополитена в нескальных грунтах, были созданы модели этих дефектов, изготовлен тампонажный слой, выполнена обратная засыпка и уплотнение
                            заобделочного пространства. Исследования проводились с применением импакт-метода, виброакустического метода и георадиолокационного профилирования.</p>
                        <p>По результатам научно-исследовательских работ разработаны:</p>
                        <ul>
                            <li>1. «Руководство по контролю качества скрытых работ геофизическими методами при строительстве подземных объектов, включая объекты метрополитена, на территории Москвы», утвержденное Заместителем Мэра Москвы в Правительстве Москвы по вопросам градостроительной политики и строительства А.Ю. Бочкаревым 23.06.2021;</li>
                            <li>2. СТО-75-25 АО «Мосинжпроект». Стандарт по контролю качества скрытых работ геофизическими методами при строительстве объектов метрополитена;</li>
                        </ul>
                    </TwoColumns.Column>
                    <TwoColumns.Column>
                        <ul>
                            <li>3. СТО-75-26 АО «Мосинжпроект». Проектирование и монтаж средств огнезащиты несущих строительных конструкций сооружений метрополитена;</li>
                            <li>4. Предложения по внесению изменений в СП 45.13330.2017 «Земляные сооружения, основания и фундаменты».</li>
                        </ul>
                        <p>По заказу ФАУ ФЦС Минстроя России разработаны:</p>
                        <ul>
                            <li>1. Экспериментально-теоретические исследования величины коэффициента перебора грунта при проходке тоннелей механизированными тоннелепроходческими комплексами с активным пригрузом забоя;</li>
                            <li>2. Разработка методики расчета вертикальных откосов и забоев тоннелей, армированных горизонтальными элементами круглого сечения на основе решений теории устойчивости грунтов;</li>
                            <li>3. Исследование средств и методов обеспечения пожарной безопасности метрополитенов.</li>
                        </ul>
                        <p>Результаты вышеуказанных НИР АО «Мосинжпроект» использовал при переработке СП 120.13330.2021 «Метрополитены».</p>
                        <p>Кроме этого, в 2021 году были разработаны стандарты предприятия:</p>
                        <ul>
                            <li>1. СТО-75-03 АО «Мосинжпроект». «Гидроизоляция подземных сооружений транспортного назначения, возводимых открытым и полузакрытым способами. Правила проектирования и производства работ»;</li>
                            <li>2. СТО-75-27 АО «Мосинжпроект». Стандарт по проектированию, производству и контролю качества ремонтно-восстановительных работ на транспортных тоннелях и метрополитенах.</li>
                        </ul>
                        <p>По результатам научно-практической деятельности АО «Мосинжпроект» были опубликованы 9 статей в Российских и международных научных изданиях, в том числе входящих в системы ВАК и Scopus.</p>
                        <p>На 2022 год запланировано проведение научно-исследовательских и опытно-конструкторских работ, что в 2023 году послужит основой для совершенствования нормативно-технической базы как самого Общества, так и нормативно-технических документов Минстроя РФ.</p>
                    </TwoColumns.Column>
                </TwoColumns>
                <div className={'mb-24'}>
                    <Picture3 img={img5} alt={''} />
                </div>
            </SectionLayout>
        </PageLayout>
    );
}
