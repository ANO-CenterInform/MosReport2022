import PageLayout from "../../Layouts/PageLayout";
import SectionLayout from "../../Layouts/SectionLayout";
import SingleParagraph from "../../Components/SingleParagraph";
import Picture3 from "../../Components/Picture3";
import icon_money from './img/icon_money.svg';
import TwoColumns from "../../Layouts/TwoColumns";
import Counter from "../../Components/Couter";
// @ts-ignore
import img1 from './img/img1.jpg?format=avif;webp;jpg&picture&quality=60';
// @ts-ignore
import img2 from './img/img2.jpg?format=avif;webp;jpg&picture&quality=60';

export default function Section1() {
    return (
        <PageLayout id={6} links={1} prevPage={'/pages/5/4'} nextPage={'/pages/7/1'}>
            <SectionLayout title={'РАСПРЕДЕЛЕНИЕ ПРИБЫЛИ ОБЩЕСТВА'}>
                <SingleParagraph>
                    На основании постановления Правительства Москвы от 02.05.2006 No304-ПП «Об утверждении Стандартов корпоративного поведения города Москвы как акционера» и в соответствии с Решением единственного акционера, утвержденным распоряжением Департамента строительства города Москвы от 29.06.2021 NoР-119/21, произведено распределение прибыли за 2020 год в размере 12 105 394 тыс. руб.:
                </SingleParagraph>
                <TwoColumns>
                    <TwoColumns.Column>
                        <div className={'flex items-center gap-8'}>
                            <div className={'shrink-0'}>
                                <img src={icon_money} />
                            </div>
                            <div>
                                <p className={'text-5xl text-mosBlue-700 font-bold mb-2'}>
                                    <Counter min={0} max={23}/>,82%
                                </p>
                                <p className={'text-mosBlue-700 uppercase mb-6'}>ОТ ПРИБЫЛИ В РАЗМЕРЕ</p>
                                <p className={'text-3xl text-mosBlue-700'}><Counter min={0} max={2} speed={500}/> <Counter min={300} max={833}/> <Counter min={0} max={342}/> тыс. руб.</p>
                                <p>объявить дивидендами</p>

                            </div>
                        </div>
                    </TwoColumns.Column>
                    <TwoColumns.Column>
                        <div className={'flex items-center gap-8'}>
                            <div className={'shrink-0'}>
                                <img src={icon_money} />
                            </div>
                            <div>
                                <p className={'text-5xl text-mosBlue-700 font-bold mb-2'}>
                                    <Counter min={0} max={10}/>%
                                </p>
                                <p className={'text-mosBlue-700 uppercase mb-6'}>ОТ ПРИБЫЛИ В РАЗМЕРЕ</p>
                                <p className={'text-3xl text-mosBlue-700'}><Counter min={0} max={1} speed={1000}/> <Counter min={0} max={210}/> <Counter min={200} max={539}/> тыс. руб.</p>
                                <p>направлено в фонд потребления</p>

                            </div>
                        </div>
                    </TwoColumns.Column>
                </TwoColumns>
                <TwoColumns>
                    <TwoColumns.Column>
                        <div className={'flex items-center gap-8'}>
                            <div className={'shrink-0'}>
                                <img src={icon_money} />
                            </div>
                            <div>
                                <p className={'text-5xl text-mosBlue-700 font-bold mb-2'}>
                                    <Counter min={0} max={66}/>,18%
                                </p>
                                <p className={'text-mosBlue-700 uppercase mb-6'}>ОТ ПРИБЫЛИ В РАЗМЕРЕ</p>
                                <p className={'text-3xl text-mosBlue-700'}><Counter min={0} max={8} speed={200}/> 0<Counter min={0} max={11}/> <Counter min={200} max={512}/> тыс. руб.</p>
                                <p>направить на реинвестирование</p>

                            </div>
                        </div>
                    </TwoColumns.Column>
                    <TwoColumns.Column>
                        <p className={'lg:pl-32'}>
                            В соответствии с Федеральным законом от 26 декабря 1995 года No208-ФЗ «Об акционерных обществах» и постановлением Правительства Москвы от 02.05.2006 No304-ПП «Об утверждении Стандартов корпоративного пове-дения города Москвы как акционера» с учетом того, что город Москва в лице Департамента городского имущества города Москвы является владельцем 100% голосующих акций АО «Мосинжпроект», прибыль в размере 3 896 880 тыс. руб., полученная Обществом по результатам 2021 года, подлежит распределению в соответствии с решением единственного акционера АО «Мосинжпроект». Информация о доходности дивидендных выплат за последние три года отсутствует так как в отчетном периоде купля-продажа акций не осуществлялась, соответственно невозможно определить курсовую стоимость акций.
                        </p>
                    </TwoColumns.Column>
                </TwoColumns>
                <hr className={'pt-8 mb-8 border-t border-gray-400'}/>
                <div className={'flex overflow-x-auto mb-8'}>
                    <Picture3 img={img1} alt={''} pictureClass={'max-md:shrink-0'} />
                </div>
                <SingleParagraph extraClass={'text-gray-500 font-bold'}>
                    Сумма начисленных и выплаченных дивидендов по результатам деятельности за 2018-2020 годы представлена в таблице, тыс. руб.:
                </SingleParagraph>
                <div className={'flex overflow-x-auto mb-24'}>
                    <Picture3 img={img2} alt={''} pictureClass={'max-md:shrink-0'} />
                </div>
            </SectionLayout>
        </PageLayout>
    );
}
