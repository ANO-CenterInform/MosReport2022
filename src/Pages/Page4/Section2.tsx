import PageLayout from "../../Layouts/PageLayout";
import SectionLayout from "../../Layouts/SectionLayout";
import TwoColumns from "../../Layouts/TwoColumns";
import icon1 from './img/icon_metro.svg'
import icon2 from './img/icon_road.svg'
import icon3 from './img/icon_home.svg'
import icon4 from './img/icon_object.svg'
import Counter from "../../Components/Couter";
import H2 from "../../Components/H2";
// @ts-ignore
import img6 from './img/img6.jpg?format=avif;webp;jpg&picture&quality=60'
import Picture3 from "../../Components/Picture3";

export default function Section2() {
    return (
        <PageLayout id={4} links={2} prevPage={'/pages/4/1'} nextPage={'/pages/5/1'}>
            <SectionLayout title={'ОБЪЕМ РАБОТ, ВЫПОЛНЕННЫХ В 2018-2021 ГОДАХ'}>
                <H2 extraClass={'text-mosBlue-900 font-bold text-xl'}>ЗА 2018-2021 ГОДЫ ОБЩЕСТВО ОСУЩЕСТВИЛО ВВОД:</H2>
                <TwoColumns>
                    <TwoColumns.Column>
                        <div className={'flex gap-6 items-center mb-12'}>
                            <div className={'shrink-0'}>
                                <img src={icon1}/>
                            </div>
                            <div>
                                <p className={'mb-4 font-bold text-3xl text-mosBlue-700'}>
                                    <Counter min={0} max={39} className={'text-4xl'}/> станций метро
                                </p>
                                <p className={'text-sm'}>в т. ч. в 2021–11</p>
                            </div>
                        </div>
                        <div className={'flex gap-6 items-center mb-8'}>
                            <div className={'shrink-0'}>
                                <img src={icon2}/>
                            </div>
                            <div>
                                <p className={'mb-4 font-bold text-3xl text-mosBlue-700'}>
                                    <Counter min={0} max={5} className={'text-4xl'}/> собъектов дорожного стоительства
                                </p>
                                <p className={'text-sm'}>в т. ч. в 2021–4</p>
                            </div>
                        </div>
                    </TwoColumns.Column>
                    <TwoColumns.Column>
                        <div className={'flex gap-6 items-center mb-12'}>
                            <div className={'shrink-0'}>
                                <img src={icon3}/>
                            </div>
                            <div>
                                <p className={'mb-4 font-bold text-3xl text-mosBlue-700'}>
                                    <Counter min={0} max={5} className={'text-4xl'}/> электродепо
                                </p>
                                <p className={'text-sm'}>в т. ч. в 2021–1</p>
                            </div>
                        </div>
                        <div className={'flex gap-6 items-center mb-8'}>
                            <div className={'shrink-0'}>
                                <img src={icon4}/>
                            </div>
                            <div>
                                <p className={'mb-4 font-bold text-3xl text-mosBlue-700'}>
                                    <Counter min={0} max={3} className={'text-4xl'}/> собъекта гражданского строительства
                                </p>
                                <p className={'text-sm'}>в т. ч. в 2021–3</p>
                            </div>
                        </div>
                    </TwoColumns.Column>
                </TwoColumns>
                <H2 extraClass={'text-xl normal-case'}>Основные показатели деятельности Общества по выполнению физических объемов в 2018-2021 годах представлены в таблице:</H2>
                <div className={'flex overflow-x-auto mb-24'}>
                    <Picture3 img={img6} alt={''} pictureClass={'max-md:shrink-0'} />
                </div>
            </SectionLayout>
        </PageLayout>
    );
}
