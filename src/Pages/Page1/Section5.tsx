// @ts-ignore
import img from './img/section5.jpg?format=avif;webp;jpg&picture&quality=60';
import icon1 from './img/icon1.svg';
import icon2 from './img/icon2.svg';
import icon3 from './img/icon3.svg';
import icon4 from './img/icon4.svg';
import icon5 from './img/icon5.svg';
import Picture from "../../Components/Picture3";
import PageLayout from "../../Layouts/PageLayout";
import SectionLayout from "../../Layouts/SectionLayout";

export default function Section5() {

    return (
        <PageLayout id={1} links={5} prevPage={'/pages/1/4'} nextPage={'/pages/2/1'}>
            <SectionLayout title={'Задачи, стоящие перед ао «мосинжпроект» в следующем году'}>
                <div className={'mb-8'}>
                    <Picture img={img} alt={''} />
                </div>
                <div className={'flex flex-col lg:flex-row gap-8 max-md:px-8 mb-8 mb-24 text-mosBlue-900'}>
                    <div className={'lg:w-1/2'}>
                        <div className={'flex gap-6 mb-8'}>
                            <div className={'shrink-0'}><img src={icon1} alt={''} /></div>
                            <p>Реализовать программу города Москвы по строительству метро, инфраструктурных, гражданских и дорожных объектов в заданные сроки в соответствии с утвержденным бюджетом;</p>
                        </div>
                        <div className={'flex gap-6 items-start'}>
                            <div className={'shrink-0'}><img src={icon2} alt={''} /></div>
                            <div>
                                <p>Повысить качество управления АО «Мосинжпроект» и дочерними обществами путем внедрения:</p>
                                <ul className={'list-disc list-outside ml-8'}>
                                    <li className={'mb-4'}>эффективной системы развития и обучения персонала, адаптированной с учетом специфики АО «Мосинжпроект» и каждого дочернего общества;</li>
                                    <li className={'mb-4'}>современных цифровых инструментов управления процессом проектирования и строительства на всех этапах реализации проекта;</li>
                                    <li className={'mb-4'}>модели управления ресурсами и активами АО «Мосинжпроект» и его дочерних обществ с максимальным эффектом для обществ и Акционера.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={'lg:w-1/2'}>
                        <div className={'flex gap-6 mb-8'}>
                            <div className={'shrink-0'}><img src={icon3} alt={''} /></div>
                            <p>Повышать социальную ответственность Общества за качество и безопасность деятельности сотрудников Общества и его подрядчиков, обеспечивать сохранность окружающей среды и минимизировать вредное на нее воздействие.</p>
                        </div>
                        <div className={'flex gap-6 mb-8'}>
                            <div className={'shrink-0'}><img src={icon4} alt={''} /></div>
                            <p>Развивать компетенции, ресурсы и коммерческие возможности АО «Мосинжпроект» для реализации крупных проектов как EPC/M-компании.</p>
                        </div>
                        <div className={'flex gap-6 mb-8'}>
                            <div className={'shrink-0'}><img src={icon5} alt={''} /></div>
                            <p>Расширить географию бизнеса путем выхода на региональные и международные рынки проектирования и строительства инфраструктурных, промышленных и гражданских объектов.</p>
                        </div>
                    </div>
                </div>
            </SectionLayout>
        </PageLayout>
    );
}
