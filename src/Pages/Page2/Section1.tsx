import Counter from "../../Components/Couter";
import SectionLayout from "../../Layouts/SectionLayout";
import icon1 from './images/icon1.svg'
import icon2 from './images/icon2.svg'
import icon3 from './images/icon3.svg'
import PageLayout from "../../Layouts/PageLayout";

export default function Section1() {
    return (
        <PageLayout id={2} links={7} prevPage={'/pages/1/5'} nextPage={'/pages/2/2'}>
            <SectionLayout title={'ОБЩИЕ СВЕДЕНИЯ, ПОЛОЖЕНИЕ АКЦИОНЕРНОГО ОБЩЕСТВА В ОТРАСЛИ'} >
                <div className={'relative flex flex-col justify-center items-center lg:flex-row px-10 max-md:py-10 lg:h-80 lg:gap-10 bg-mosBlue-700 text-white'}>
                    <div className={'absolute top-0 left-0 h-4 w-48 bg-mosRose-500'}></div>
                    <div className={'flex flex-col max-md:order-2 lg:flex-row items-center lg:w-2/3 justify-center lg:justify-end uppercase'}>
                        <div className={'flex items-end mr-8'}><Counter min={0} max={130} speed={15} className={'text-7xl'}/>трлн</div>
                        <div className={'flex items-end'}>
                            <div><Counter min={500} max={795} speed={5} className={'text-7xl'}/><span className={'text-7xl'}>,3</span></div>
                            <span>млрд<br/>рублей</span>
                        </div>
                    </div>
                    <div className={'flex flex-col max-md:order-1 lg:w-1/3 max-md:items-center lg:justify-start'}>
                        <span className={'shrink-0'}><img src={icon1} alt={''} /></span>
                        <p>Объем ВВП России за 2021 год</p>
                    </div>
                </div>
                <div className={'relative flex flex-col justify-center items-center lg:flex-row px-10  max-md:py-10 lg:h-80 lg:gap-10 bg-mosBlue-900 text-white'}>
                    <div className={'absolute top-0 right-0 h-4 w-56 bg-mosRose-500'}></div>
                    <div className={'flex lg:w-2/3 lg:justify-end uppercase'}>
                        <div className={'flex items-end'}>
                            <div>
                                <Counter min={795} max={921} speed={5} className={'text-8xl lg:text-9xl text-mosBlue-900 text-border'}/>
                                <span className={'text-8xl lg:text-9xl text-mosBlue-900 text-border'}>,7</span>
                            </div>
                            <span>млрд<br/>рублей</span>
                        </div>
                    </div>
                    <div className={'flex flex-col lg:w-1/3 max-md:items-center lg:justify-start'}>
                        <span><img src={icon2} alt={''} /></span>
                        <p>бюджетных инвестиций пришлось на дорожное хозяйство</p>
                    </div>
                </div>
                <div className={'relative flex flex-col justify-center items-center lg:flex-row px-10 max-md:py-10 lg:h-80 lg:gap-10 bg-mosBlue-700 text-white lg:mb-24'}>
                    <div className={'absolute top-0 left-0 h-4 w-56 bg-mosRose-500'}></div>
                    <div className={'flex lg:w-2/3 lg:justify-end uppercase'}>
                        <div className={'flex items-end'}>
                            <div><Counter min={330} max={567} speed={5} className={'text-8xl lg:text-9xl'}/></div>
                            <span>млрд<br/>рублей</span>
                        </div>
                    </div>
                    <div className={'flex flex-col lg:w-1/3 max-md:items-center lg:justify-start'}>
                        <span><img src={icon3} alt={''} /></span>
                        <p>Москва вошла в ТОП-5 регионов по объему инфраструктурных госрасходов</p>
                    </div>
                </div>
            </SectionLayout>
        </PageLayout>
    );
}
