import icon_diploma from "./img/icon_diploma.svg";

export default function Section4() {
    return (
        <section className="md:max-w-bootstrap-md 2xl:max-w-bootstrap-full mx-auto pt-10">
            <h2 id={'forth'} className={"max-md:px-8 mb-6 xl:w-2/3 uppercase text-3xl text-mosBlue-700"}>ИНФОРМАЦИЯ О СУЩЕСТВЕННЫХ ФАКТАХ ЗА ОТЧЕТНЫЙ ПЕРИОД</h2>

            <div className={'flex flex-col md:flex-row max-md:px-8 gap-8 mb-8 lg:mb-12'}>
                <div className={'md:w-1/2 flex flex-col items-center'}>
                    <p>Решением единственного акционера Общества, утвержденным распоряжением Департамента строительства города Москвы от 23.11.2021 No Р-221/21, принято решение об изменении условий размещения дополнительных обыкновенных акций, опреде- ленных решением единственного акционера об увеличении уставного капитала АО «Мосинжпроект» путем размещения допол- нительных обыкновенных акций от 29.11.2019, утвержденным распоряжением Департамента строительства города Москвы от 29.11.2019 No Р-123/19 (с учетом изменения условий размещения дополнительных обыкновенных акций в соответствии с реше- нием единственного акционера от 13.11.2020, утвержденным распоряжением Департамента строительства города Москвы от 13.11.2020 No Р-198/20)</p>
                    <ul className={'list-decimal list-inside'}>
                        <li>Количество размещаемых допол- нительных обыкновенных акций – 73 979 724 (Семьдесят три милли- она девятьсот семьдесят девять тысяч семьсот двадцать четыре) штуки.</li>
                        <li>Общая номинальная стоимость до- полнительных обыкновенных акций – 3 344 126 300 (Три миллиарда триста сорок четыре миллиона сто двадцать шесть тысяч триста) рублей.</li>
                        <li>Форма оплаты дополнительных обыкновенных акций: 3.1. Оплата денежными средствами в размере 44 629 999 700 (Сорок четыре миллиарда шестьсот двадцать девять миллионов девятьсот девяносто де- вять тысяч семьсот) рублей.</li>
                        <li>Датой окончания размещения акций является 09 декабря 2022 года либо дата размещения последней ценной бумаги дополнительного выпуска, в зависимости от того, какая из двух дат наступит ранее.</li>
                    </ul>
                </div>
                <div className={'md:w-1/2 flex flex-col items-between'}>
                    <ol className={'mb-8'}>
                        <li>5. Иные условия размещения дополни- тельных обыкновенных акций, вклю- чая форму оплаты дополнительных обыкновенных акций неденежными средствами, оставить без изменений.</li>
                    </ol>
                    <div className={'flex flex-col items-center justify-center p-8 lg:p-24 bg-neutral-100'}>
                        <div className={'mb-6'}><img src={icon_diploma} alt={''} /></div>
                        <p className={'text-mosBlue-700 text-4xl font-bold'}>73 979 724</p>
                        <p className={'text-center'}>Количество размещаемых дополнительных обыкновенных акций</p>
                    </div>
                </div>
            </div> {/*Block end*/}
        </section>
    );
}
