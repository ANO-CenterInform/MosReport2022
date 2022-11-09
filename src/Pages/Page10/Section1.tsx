import PageLayout from "../../Layouts/PageLayout";
import SectionLayout from "../../Layouts/SectionLayout";

export default function Section1() {
    return (
        <PageLayout id={10} links={0} prevPage={'/pages/9/7'} nextPage={''}>
            <SectionLayout title={'СПРАВОЧНАЯ ИНФОРМАЦИЯ ДЛЯ АКЦИОНЕРОВ'} extraClass={'justify-center h-full'}>
                <div className={'mb-24'}>
                    <p className={'font-bold'}>Наименование Общества, организационно-правовая форма</p>
                    <p>Полное наименование Общества: акционерное общество «Мосинжпроект». Сокращенное наименование Общества: АО «Мосинжпроект».</p>
                    <p className={'font-bold'}>Адрес места нахождения Общества:</p>
                    <p>101990, г. Москва, Сверчков переулок, дом 4/1.</p>
                    <p>Контакты: +7 (495) 225-19-40 доб. 5555.</p>
                    <p><span className={'font-bold'}>Адрес в сети Интернет:</span> почта info@mosinzhproekt.ru, сайт www.mosinzhproekt.ru</p>
                    <p className={'font-bold'}>Краткая информация об аудиторе</p>
                    <p>Акционерное общество «Аудиторская фирма «Уральский союз», адрес места нахождения: 109004, г. Москва, Большой Факельный переулок д. 3 оф. 145, ОГРН 1027700302310, ИНН 7705040076, КПП 770901001.</p>
                    <p className={'font-bold'}>Реестродержатель Общества</p>
                    <p>Регистратором Общества, осуществляющим ведение реестра владельцев
                    ценных бумаг АО «Мосинжпроект», является акционерное общество «Индустрия-РЕЕСТР», место нахождения: 107061, г. Москва, ул. Хромова, д. 1, лицензия на осуществление деятельности по ведению реестра владельцев ценных бумаг: No10-000-1-00296 от 11.02.2004 г. ОГРН 1023301289153,
                        ИНН 3302021034, КПП 771801001.</p>
                    <p className={'font-bold'}>Утверждение годового отчета</p>
                    <p>В соответствии с п. 3 ст. 47, пп. 11 п. 1 ст. 48 Федерального закона от 26.12.1995 No208-ФЗ «Об акционерных обществах» Годовой отчет АО «Мосинжпроект» за 2021 год утверждается решением годового общего собрания акционеров
                        АО «Мосинжпроект».</p>
                    <p className={'font-bold'}>Сведения об оценщике, проводившем оценку рыночной стоимости одной акции Общества</p>
                    <p>Общество с ограниченной ответственностью «Центр оценки собственности».</p>
                    <p>ОГРН 102700560656 (Орган регистрации Государственное учреждение Московская регистрационная палата 20.09.1999 г. свидетельство No 663.157).
                    ИНН 7704205198.</p>
                    <p><span className={'font-bold'}>Адрес места нахождения:</span> 123056, г. Москва, ул. Красина, д. 27, стр. 2, офис 53.</p>
                </div>
            </SectionLayout>
        </PageLayout>
    );
}
