import icon_diploma from "./img/icon_diploma.svg";
import PageLayout from "../../Layouts/PageLayout";
import SectionLayout from "../../Layouts/SectionLayout";
import Counter from "../../Components/Couter";

export default function Section4() {
    return (
        <PageLayout id={3} links={4} prevPage={'/pages/3/3'} nextPage={'/pages/4/1'}>
            <SectionLayout title={'ИНФОРМАЦИЯ О СУЩЕСТВЕННЫХ ФАКТАХ ЗА ОТЧЕТНЫЙ ПЕРИОД'}>
                    <div className={'flex flex-col md:flex-row max-md:px-8 gap-8 mb-8 lg:mb-12'}>
                        <div className={'md:w-1/2 flex flex-col items-center'}>
                            <p>Решением единственного акционера Общества, утвержденным распоряжением Департамента строительства города Москвы от 23.11.2021 No Р-221/21, принято решение об изменении условий размещения дополнительных обыкновенных акций, определенных решением единственного акционера об увеличении уставного капитала АО «Мосинжпроект» путем размещения дополнительных обыкновенных акций от 29.11.2019, утвержденным распоряжением Департамента строительства города Москвы от 29.11.2019 No Р-123/19 (с учетом изменения условий размещения дополнительных обыкновенных акций в соответствии с решением единственного акционера от 13.11.2020, утвержденным распоряжением Департамента строительства города Москвы от 13.11.2020 No Р-198/20)</p>
                            <ul className={'list-decimal list-inside'}>
                                <li>Количество размещаемых дополнительных обыкновенных акций – 73 979 724 (Семьдесят три миллиона девятьсот семьдесят девять тысяч семьсот двадцать четыре) штуки.</li>
                                <li>Общая номинальная стоимость дополнительных обыкновенных акций – 3 344 126 300 (Три миллиарда триста сорок четыре миллиона сто двадцать шесть тысяч триста) рублей.</li>
                                <li>Форма оплаты дополнительных обыкновенных акций: 3.1. Оплата денежными средствами в размере 44 629 999 700 (Сорок четыре миллиарда шестьсот двадцать девять миллионов девятьсот девяносто девять тысяч семьсот) рублей.</li>
                                <li>Датой окончания размещения акций является 09 декабря 2022 года либо дата размещения последней ценной бумаги дополнительного выпуска, в зависимости от того, какая из двух дат наступит ранее.</li>
                            </ul>
                        </div>
                        <div className={'md:w-1/2 flex flex-col items-between'}>
                            <ol className={'mb-8'}>
                                <li>5. Иные условия размещения дополнительных обыкновенных акций, включая форму оплаты дополнительных обыкновенных акций неденежными средствами, оставить без изменений.</li>
                            </ol>
                            <div className={'flex flex-col items-center justify-center p-8 lg:p-24 bg-neutral-100'}>
                                <div className={'mb-6'}><img src={icon_diploma} alt={''} /></div>
                                <p className={'text-mosBlue-700 text-4xl font-bold'}><Counter min={0} max={73}/> <Counter min={700} max={979}/> <Counter min={500} max={724}/></p>
                                <p className={'text-center'}>Количество размещаемых дополнительных обыкновенных акций</p>
                            </div>
                        </div>
                    </div>{/*Block end*/}
            </SectionLayout>
        </PageLayout>
    );
}
