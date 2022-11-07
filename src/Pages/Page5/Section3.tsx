import PageLayout from "../../Layouts/PageLayout";
import SectionLayout from "../../Layouts/SectionLayout";
import SingleParagraph from "../../Components/SingleParagraph";
import Picture3 from "../../Components/Picture3";
import TwoColumns from "../../Layouts/TwoColumns";
// @ts-ignore
import img3 from './img/img3.jpg?format=avif;webp;jpg&picture&quality=60';
// @ts-ignore
import img4 from './img/img4.jpg?format=avif;webp;jpg&picture&quality=60';
// @ts-ignore
import img5 from './img/img5.jpg?format=avif;webp;jpg&picture&quality=60';
// @ts-ignore
import img6 from './img/img6.jpg?format=avif;webp;jpg&picture&quality=60';
// @ts-ignore
import img7 from './img/img7.jpg?format=avif;webp;jpg&picture&quality=60';
// @ts-ignore
import img8 from './img/img8.jpg?format=avif;webp;jpg&picture&quality=60';

export default function Section3() {
    return (
        <PageLayout id={5} links={4} prevPage={'/pages/5/2'} nextPage={'/pages/5/4'}>
            <SectionLayout title={'АНАЛИЗ ФИНАНСОВОГО СОСТОЯНИЯ ОБЩЕСТВА'}>
                <SingleParagraph extraClass={'text-gray-500'}>
                    <span className={'font-bold'}>Коэффициенты ликвидности Общества</span> характеризует способность акционерного общества выплачивать краткосрочные (в срок до 1 года) долговые обязательства. Основные показатели ликвидности представлены в таблице:
                </SingleParagraph>
                <div className={'flex overflow-x-auto mb-8'}>
                    <Picture3 img={img3} alt={''} pictureClass={'max-md:shrink-0'} />
                </div>
                <TwoColumns>
                    <TwoColumns.Column>
                        <p>Коэффициент абсолютной ликвидности показывает способность погасить краткосрочные долги за счет наиболее ликвидных средств (краткосрочных финансовых вложений и денежных средств). По состоянию на конец 2021 года показатель снизился до нижней границы рекомендуемых значений за счет переквалификации краткосрочных финансовых вложений в долго-срочные. Показатель находится в районе рекомендованных значений и, не смотря на снижение, Общество может также рассчитаться по текущим обязательствам. Коэффициент срочной ликвидности по итогам 2021 года составил 0,81 и нахо- дится в рамках нормативного диапазона,</p>
                    </TwoColumns.Column>
                    <TwoColumns.Column>
                        <p>что говорит о возможности Общества достаточно быстро погашать свои текущие обязательства за счет высоколиквидных активов (краткосрочной дебиторской задолженности, финансовых вложений и денежных средств).
                            Показатели финансовой устойчивости Общества отражают соотношение соб- ственных и заемных средств в источниках финансирования Общества и характеризуют степень финансовой независимости акционерного общества от кредиторов. Основные показатели финансовой устойчивости представлены в таблице:</p>
                    </TwoColumns.Column>
                </TwoColumns>
                <div className={'flex overflow-x-auto mb-8'}>
                    <Picture3 img={img4} alt={''} pictureClass={'max-md:shrink-0'} />
                </div>
                <SingleParagraph>
                    Ввиду специфики деятельности Общества показатели финансовой устойчивости находятся вне диапазона нормативных значений за счет длительного цикла реализации проектов строительства в рамках контрактов, предусматривающих длительное авансирование.
                </SingleParagraph>
                <SingleParagraph>
                    Ввиду задержки регистрации вклада города Москвы в уставный капитал АО «Мосинжпроект» показатель «Кредиторская задолжен- ность» увеличен на сумму задолженности перед учредителем Общества (21 456 820 тыс руб.). При прочих равных условиях и реги- страции уставного капитала в периоде поступления вкладов учредителей показатели финансовой независимости составили бы:
                </SingleParagraph>
                <div className={'flex overflow-x-auto mb-8'}>
                    <Picture3 img={img5} alt={''} pictureClass={'max-md:shrink-0'} />
                </div>
                <SingleParagraph extraClass={'pt-4 border-t border-gray-400 text-gray-400'}>
                    * показатели «Кредиторская задолженность» и «Уставный капитал» изменены на сумму незарегистрированного вклада учредителя.
                </SingleParagraph>
                <SingleParagraph>
                    Соответственно, помимо специфики реализации проектов длительного цикла на значение показателей финансовой независимости оказал влияние факт сдвига сроков регистрации увеличения уставного капитала Общества.
                </SingleParagraph>
                <SingleParagraph extraClass={'text-gray-500'}>
                    <span className={'font-bold'}>Показатели деловой активности Общества</span> характеризуют, насколько эффективно Общество использует оборотные средства. Основные показатели деловой активности представлены в таблице:
                </SingleParagraph>
                <div className={'flex overflow-x-auto mb-8'}>
                    <Picture3 img={img6} alt={''} pictureClass={'max-md:shrink-0'} />
                </div>
                <TwoColumns>
                    <TwoColumns.Column>
                        <p className={'mb-4'}>
                            Показатель «Оборачиваемость чистого оборотного капитала» составил 12,18 по состоянию на конец 2021 года, что демонстрирует эффективность использования инвестиций в оборотный капитал Общества и их положительное влияние на рост выручки от продаж. Чем выше значение этого коэффициента, тем более эффективно акционерное общество ис- пользует чистый оборотный капитал.
                        </p>
                        <p className={'mb-4'}>
                            Снижение коэффициента «Оборачиваемость основных средств» в 2021 году с 68,52 до 38,43 связано с ростом стоимости основных средств за счет ввода в эксплуатацию земельных участков и зданий со сроком полезного использования свыше 30 лет, полученных от города в качестве вклада в уставный капитал с целью реализации инвестиционных проектов. Увеличение фонда основных средств не повлияло на эффективность их использо- вания Обществом.
                            Оборачиваемость активов составила 0,77 раза по состоянию на конец 2021 года. Данный коэффициент показывает, с какой скоростью совершается полный цикл производства и обращения, а также отражает положительный уровень деловой активности Общества. Среднее значение
                        </p>
                    </TwoColumns.Column>
                    <TwoColumns.Column>
                        <p className={'mb-4'}>
                            показателя за пятилетний период деятельности составило 0,82 раза, незначительное изменение показателя относительно среднего значения является индикатором стабильного финансового состояния Общества. Оборачиваемость запасов (количество раз) отражает скорость реализации запасов. В целом, чем выше показатель оборачиваемости запасов, тем меньше средств связано с этой наименее ликвидной группой активов. Снижение оборачи- ваемости запасов на 0,08 до 3,54 раза по итогам 2021 года составило лишь 2%, что характеризует стабильную эффективность в работе с запасами и незавершенным производством.
                        </p>
                        <p className={'mb-4'}>
                            Оборачиваемость дебиторской задолженности показывает среднее число дней, требуемое для взыскания задолженности. Чем меньше это число, тем быстрее краткосрочная дебиторская задолженность обращается в денежные средства, а, следовательно, повышается ликвидность оборотных средств акционерного общества. По итогам 2021 года показатель составил 219,93 дня, наблюдается рост в связи с ростом дебиторской задолженности за счет увеличения объема авансирования на вводных объектах БКЛ и хордовых магистралей.
                        </p>
                    </TwoColumns.Column>
                </TwoColumns>
                <SingleParagraph extraClass={'text-gray-500'}>
                    <span className={'font-bold'}>Показатели рентабельности Общества</span> показывают прибыльность финансово-хозяйственной деятельности. Основные показате- ли деловой активности представлены в таблице:
                </SingleParagraph>
                <div className={'flex overflow-x-auto mb-8'}>
                    <Picture3 img={img7} alt={''} pictureClass={'max-md:shrink-0'} />
                </div>
                <SingleParagraph>
                    В Обществе наблюдается отрицательная динамика всех показателей рентабельности относительно значений предыдущего года за счет снижения показателя «Чистая прибыль».
                    <br/>По результатам анализа можно сделать вывод, что структура баланса в целом удовлетворительная, финансовое положение Общества стабильно и активы в краткосрочной перспективе покрывают текущие обязательства. Общество стабильно развивается согласно выбранной стратегии, что подтверждается полученными финансовыми результатами и портфелем заключенных контрактов.
                </SingleParagraph>
                <div className={'mb-24'}>
                    <Picture3 img={img8} alt={''} />
                </div>
            </SectionLayout>
        </PageLayout>
    );
}
