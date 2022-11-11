import PageLayout from "../../Layouts/PageLayout";
import SectionLayout from "../../Layouts/SectionLayout";
import TwoColumns from "../../Layouts/TwoColumns";
import Counter from "../../Components/Couter";
import icon from './images/icon_list.svg'

export default function Section7() {
    return (
        <PageLayout id={2} links={7} prevPage={'/pages/2/6'} nextPage={'/pages/3/1'}>
            <SectionLayout title={'ВЗАИМОДЕЙСТВИЕ С МАЛЫМ И СРЕДНИМ БИЗНЕСОМ'}>
                <TwoColumns>
                    <TwoColumns.Column>
                        <p>Работа Общества с субъектами малого и среднего предпринимательства (далее МСП) регламентирована Положением о закупках и Постановлением Правительства РФ от 11.12.2014 No1352 «Об особенностях участия субъектов малого и среднего предпринимательства в закупках товаров, работ, услуг отдельными видами юридических лиц».</p>
                        <p>Постановлением создан перечень товаров, работ, услуг, которые необходимо закупать у субъектов МСП. При каждой публикации плана закупок проверяется показатель количества закупок среди МСП и соблюдаются особенности осуществления конкурентных процедур в электронной форме участниками – субъектами МСП (п.38 Положения).</p>
                    </TwoColumns.Column>
                    <TwoColumns.Column>
                        <p>Ежегодно в Единой информационной системе в сфере закупок размещается годовой отчёт Общества о закупках у субъектов малого и среднего предпринимательства о совокупном годовом стоимостном объеме заключенных договоров. По итогам 2021 года результат закупок с МСП составляет 37,89% от общего годового объема закупок Общества (в денежном выражении10), при требуемом законодательством уровне не менее 20%.</p>
                        <p>Совокупный годовой стоимостной объем договоров, заключенных по результатам закупок, участниками которых являются только МСП, исполнен в размере 21,32% при требуемом не менее 18%.</p>
                    </TwoColumns.Column>
                </TwoColumns>
                <div className={'flex flex-col lg:flex-row items-center justify-center p-8 lg:p-12 bg-neutral-100 gap-8 mb-8'}>
                    <div className={'text-mosBlue-700 lg:w-1/2'}>
                        <p className={'text-5xl font-bold text-center lg:text-right mb-8'}><Counter min={0} max={21}/>,32%</p>
                        <p className={'text-xl uppercase max-md:text-center lg:text-right lg:w-1/2 float-right'}>СОВОКУПНЫЙ ГОДОВОЙ СТОИМОСТНОЙ ОБЪЕМ ДОГОВОРОВ</p>
                    </div>
                    <div className={' lg:w-1/2'}>
                        <img src={icon} className={'mb-6 max-md:mx-auto'}/>
                        <p className={'lg:w-1/2 max-md:text-center'}>заключенных по результатам закупок, участниками которых являются только МСП</p>
                    </div>
                </div>
                <div className={'mb-24 pt-8 border-t border-gray-400 max-md:px-8'}>
                    <ul className={'list-inside text-gray-400'}>
                        <li>10. https://zakupki.gov.ru/223/purchase/public/account/view/general-information.html?id=104009</li>
                    </ul>
                </div>
            </SectionLayout>
        </PageLayout>
    );
}
