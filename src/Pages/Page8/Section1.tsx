import PageLayout from "../../Layouts/PageLayout";
import SectionLayout from "../../Layouts/SectionLayout";
import Picture3 from "../../Components/Picture3";

import TwoColumns from "../../Layouts/TwoColumns";
// @ts-ignore
import img1 from './img/img1.jpg?format=avif;webp;jpg&picture&quality=60';// @ts-ignore
import img2 from './img/img2.jpg?format=avif;webp;jpg&picture&quality=60';// @ts-ignore

export default function Section1() {
    return (
        <PageLayout id={8} links={5} prevPage={'/pages/7/1'} nextPage={'/pages/8/2'}>
            <SectionLayout title={'КАДРОВАЯ И СОЦИАЛЬНАЯ ПОЛИТИКА'}>
                <div className={'mb-8'}>
                    <Picture3 img={img1} alt={''} />
                </div>
                <TwoColumns extraClass={'mb-8'}>
                    <TwoColumns.Column>
                        <p>
                            Кадровая политика Общества направлена на формирование эффективной команды и высокопрофессионального коллектива, способного решать и стратегические задачи, поставленные оперативные акционером. Для этого в Обществе:
                        </p>
                        <ul className={'list-inside list-decimal'}>
                            <li>
                                IT-инфраструктура, компьютеры – переход Общества на новый уровень автоматизации и цифровизации;
                            </li>
                            <li>
                                создаются условия для профессионального и карьерного роста лучших сотрудников;
                            </li>
                            <li>
                                проводится работа по формированию кадрового резерва для обеспечения потребностей бизнеса в квалифицированном персонале по различным бизнес направлениям;
                            </li>
                            <li>
                                используется система оценки и аттестации работников с целью развития их компетенций и повышения эффективности труда;
                            </li>
                        </ul>
                    </TwoColumns.Column>
                    <TwoColumns.Column>
                            <ul className={'list-inside list-decimal'}>
                                <li>
                                    обеспечивается функционирование эффективной системы мотивации работников, обеспечивающей конкурентоспособное вознаграждение каждого из них;
                                </li>
                                <li>
                                    осуществляется эффективный поиск и подбор кандидатов, а также адап- тация и всесторонняя поддержка вновь принятых сотрудников во время испытательного срока.
                                </li>

                            </ul>
                            <p>
                                В рамках предпринятых мер по обеспечению охраны здоровья персонала и обе- спечению функционирования Общества при пандемии COVID-19 в 2021 году были закуплены и выданы сотрудникам средства индивидуальной защиты на общую сумму 8 644 755 руб. В течение 2021 года также проводилась дезинфицирующая обработка рабочих мест ме- тодом сухого тумана и всех помещений, находящихся в собственности или аренде Общества.
                            </p>
                    </TwoColumns.Column>
                </TwoColumns>
                <div className={'mb-24'}>
                    <Picture3 img={img2} alt={''} />
                </div>
            </SectionLayout>
        </PageLayout>
    );
}
