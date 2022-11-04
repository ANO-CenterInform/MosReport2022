import award1 from "./img/award1.jpg";
import award2 from "./img/award2.jpg";
import award3 from "./img/award3.jpg";
import award4 from "./img/award4.jpg";
import award5 from "./img/award5.jpg";
import award6 from "./img/award6.jpg";
import award7 from "./img/award7.jpg";
import award8 from "./img/award8.jpg";
import Award from "../../Components/Award";
import PageLayout from "../../Layouts/PageLayout";
import SectionLayout from "../../Layouts/SectionLayout";

export default function Section3() {

    const pageLinks = [
        { "name": '01', "path": "" },
        { "name": '02', "path": "/2" },
        { "name": '03', "path": "/3" },
        { "name": '04', "path": "/4" },
        { "name": '05', "path": "/5" }
    ];

    return (
        <PageLayout id={1} links={pageLinks} prevPage={'/page/1/2'} nextPage={'/page/1/3'}>
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
                            img={award6}
                            rating={'59 место (+2)'}
                            className={'mb-8 max-md:mx-6 lg:w-1/3'}
                        />
                    </div>

                    <div className={'flex flex-col lg:flex-row gap-8'}>
                        <div className={'lg:w-1/2'}>
                            <h3 className={'p-4 mb-8 text-center text-white bg-mosBlue-700 text-lg font-bold'}>Тор-50 управления закупочной деятельностью</h3>
                            <Award
                                title={'По версии ООО «Эксперт Бизнес-Решения»'}
                                img={award7}
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
