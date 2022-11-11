// @ts-ignore
import award1 from "./img/award1.jpg?format=avif;webp;jpg&picture&quality=60";// @ts-ignore
import award2 from "./img/award2.jpg?format=avif;webp;jpg&picture&quality=60";// @ts-ignore
import award3 from "./img/award3.jpg?format=avif;webp;jpg&picture&quality=60";// @ts-ignore
import award4 from "./img/award4.jpg?format=avif;webp;jpg&picture&quality=60";// @ts-ignore
import award5 from "./img/award5.jpg?format=avif;webp;jpg&picture&quality=60";// @ts-ignore
import award6 from "./img/award6.jpg?format=avif;webp;jpg&picture&quality=60";// @ts-ignore
import award7 from "./img/award7.jpg?format=avif;webp;jpg&picture&quality=60";// @ts-ignore
import award8 from "./img/award8.jpg?format=avif;webp;jpg&picture&quality=60";// @ts-ignore
import awardExpert from "./img/awardExpert.jpg?format=avif;webp;jpg&picture&quality=60'";// @ts-ignore
import Award from "../../Components/Award";
import PageLayout from "../../Layouts/PageLayout";
import SectionLayout from "../../Layouts/SectionLayout";

export default function Section3() {

    return (
        <PageLayout id={1} links={5} prevPage={'/pages/1/2'} nextPage={'/pages/1/4'}>
            <SectionLayout title={'награды и достижения холдинга «мосинжпроект» по итогам работы в 2021 году'}>
                    <h3 className={'p-4 mb-8 text-center text-white bg-mosBlue-700 text-lg font-bold'}>Рейтинги АО «Мосинжпроект»</h3>
                    <div className={'flex flex-col lg:flex-row justify-center lg:justyfy-start gap-8 mb-8'}>
                        <Award
                            title={'Тор-400 крупнейших компаний страны'}
                            img={award1}
                            awardName={'«Эксперт-400»'}
                            rating={'72 место (+21)'}
                            className={'mb-8 max-md:mx-6 lg:w-1/3'}
                        />
                        <Award
                            title={'Тор-250 крупнейших строительных компаний мира'}
                            img={award2}
                            awardName={'ENR’s 2021 Top 250 Global Contractors'}
                            rating={'114 место (+9)'}
                            className={'mb-8 max-md:mx-6 lg:w-1/3'}
                        />
                        <Award
                            title={'Тор-150 крупнейших проектных компаний мира'}
                            img={award3}
                            awardName={'ENR’s 2021 Top 150 Global Design Firms'}
                            rating={'138 место (-34)'}
                            className={'mb-8 max-md:mx-6 lg:w-1/3'}
                        />
                    </div>
                    <h3 className={'p-4 mb-8 text-center text-white bg-mosBlue-700 text-lg font-bold'}>Тор-100 ведущих компаний России</h3>
                    <div className={'flex flex-col lg:flex-row justify-center lg:justyfy-start gap-8 mb-8'}>
                        <Award
                            title={'Ежегодный рейтинг «РБК 500»'}
                            img={award4}
                            rating={'65 место (+9)'}
                            className={'mb-8 max-md:mx-6 lg:w-1/3'}
                        />
                        <Award
                            title={"Рейтинг крупнейших компаний «RAEX-600»"}
                            img={award5}
                            rating={'65 место (+4)'}
                            className={'mb-8 max-md:mx-6 lg:w-1/3'}
                        />
                        <Award
                            title={'Рейтинг устойчивого развития «Эксперт»'}
                            img={awardExpert}
                            rating={'59 место (+2)'}
                            className={'mb-8 max-md:mx-6 lg:w-1/3'}
                        />
                    </div>

                    <div className={'flex flex-col lg:flex-row gap-8 mb-8 lg:mb-24'}>
                        <div className={'lg:w-1/2'}>
                            <h3 className={'p-4 mb-8 text-center text-white bg-mosBlue-700 text-lg font-bold'}>Тор-50 управления закупочной деятельностью</h3>
                            <Award
                                title={'По версии ООО «Эксперт Бизнес-Решения»'}
                                img={award6}
                                rating={'65 место (+9)'}
                                className={'mb-8 max-md:mx-6 lg:w-1/2 mx-auto'}
                            />
                        </div>
                        <div className={'lg:w-1/2'}>
                            <h3 className={'p-4 mb-8 text-center text-white bg-mosBlue-700 text-lg font-bold'}>Рейтинг качества управления «Эксперт РА»</h3>
                            <Award
                                title={"«А+.gq – Очень высокий уровень качества управления» «(Рейтинг подтвержден)»"}
                                img={award8}
                                className={'mb-8 max-md:mx-6 lg:w-1/2 mx-auto'}
                            />
                        </div>
                    </div>
            </SectionLayout>
        </PageLayout>
    );
}
