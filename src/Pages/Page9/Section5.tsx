import PageLayout from "../../Layouts/PageLayout";
import SectionLayout from "../../Layouts/SectionLayout";
import TwoColumns from "../../Layouts/TwoColumns";
import Picture3 from "../../Components/Picture3";
// @ts-ignore
import img1 from './img/img35.jpg?format=avif;webp;jpg&picture&quality=60';


export default function Section1() {
    return (
        <PageLayout id={9} links={7} prevPage={'/pages/9/4'} nextPage={'/pages/9/6'}>
            <SectionLayout title={'УПРАВЛЕНЧЕСКИЙ АСПЕКТ. ВЗАИМОДЕЙСТВИЕ С ЗАИНТЕРЕСОВАННЫМИ СТОРОНАМИ (G)'}>
                <TwoColumns extraClass={'mb-8'}>
                    <TwoColumns.Column>
                        <p>
                            Приоритетами АО «Мосинжпроект» явля- ется гармонизация интересов различных групп заинтересованных сторон, а также оперативное реагирование на их ожидания, потребности и опасения. В целях выстраивания наиболее эффективного и устойчивого сотрудничества мы используем инструменты и механизмы взаимодействия, учитывающие интересы, потребности и ожидания каждой конкретной группы заинтересованных сторон.
                        </p>
                        <p>
                            Ключевыми заинтересованными сторонами АО «Мосинжпроект» являются те лица и организации, на которые оказывает
                        </p>
                    </TwoColumns.Column>
                    <TwoColumns.Column>
                        <p>
                            водействие деятельность холдинга, а также те, кто может влиять на достижение компанией поставленных целей и задач. В число основных заинтересованных сторон входят:
                        </p>
                        <ul className={'list-inside list-disc'}>
                            <li>
                                акционер и совет директоров;
                            </li>
                            <li>
                                органы государственной власти и регуляторы;
                            </li>
                            <li>
                                сотрудники;
                            </li>
                            <li>
                                подрядчики и поставщики;
                            </li>
                            <li>
                                местные сообщества;
                            </li>
                            <li>
                                общественные организации;
                            </li>
                            <li>
                                средства массовой информации (СМИ).
                            </li>
                        </ul>
                    </TwoColumns.Column>
                </TwoColumns>
                <div className={'mb-24'}>
                    <Picture3 img={img1} alt={''} className={'mx-auto'} />
                </div>
            </SectionLayout>
        </PageLayout>
    );
}
