import { Link } from "react-router-dom";
import ReportDate from "../Components/ReportDate";
import img1 from '../../src/images/page1_img1.jpg';
import img2 from '../../src/images/page1_img2.jpg';
import img3 from '../../src/images/page1_img3.jpg';
import mip_logo from '../../src/images/mip_logo.png';
import Picture from "../Components/Picture";
import icon_arrow_right from '../../src/icons/icon_arrow_right.svg';

export default function FrontPage() {

    return (
        <div className="flex flex-col justify-center bg-mosBlue-900 h-screen text-white">
            <div className="flex flex-wrap h-full 2xl:h-auto md:flex-nowrap max-w-bootstrap-full mx-auto">
                <div className={'lg:w-1/2 h-full flex flex-col order-2 md:order-1'}>

                    <div className="flex flex-wrap bg-mosBlue-700">
                        <div className="flex w-full">
                            <div>
                                <Picture img={img1} alt={''} />
                            </div>
                            <div className="flex flex-1 justify-center items-center bg-mosRose-500 p-2">
                                <ReportDate classes="text-7xl md:text-8xl font-bold" year={2022} />
                            </div>
                        </div>
                    </div>

                    <div><Picture img={img2} alt={''} /></div>

                    <div className="flex flex-wrap bg-mosBlue-700">
                        <div className="flex order-2 md:order-1">
                            <div className="flex flex-1 justify-center items-center bg-mosBlue-100 p-2 text-right">
                                <p className="text-2xl text-center text-mosBlue-700 uppercase">проектируем будущее,<br/>строим настоящее</p>
                            </div>
                            <div>
                                <Picture img={img3} alt={''} />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-1 justify-center items-center p-6 2xl:py-12 bg-mosBlue-900">
                        <Picture img={mip_logo} alt={''} />
                    </div>

                </div>
                <div className={'flex flex-col md:h-full w-full lg:w-1/2 order-1 md:order-2 bg-mosBlue-700 md:pt-[230px]'}>

                    <div className="p-4 md:pl-16 mb-8">
                        <p className="text-6xl md:text-7xl font-bold uppercase md:leading-tight">Годовой<br/> отчет</p>
                    </div>

                    <div className="order-1 md:order-2 p-4 md:pt-0 md:pl-16">
                        <Link to={"pages/1"} className="uppercase flex items-center">
                            <span className="mr-2">Перейти в отчёт</span> <img src={icon_arrow_right} alt="" />
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}
