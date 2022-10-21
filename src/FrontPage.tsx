import { Link } from "react-router-dom";
import ReportDate from "./Components/ReportDate";
import img1 from '../public/images/page1_img1.jpg';
import img2 from '../public/images/page1_img2.jpg';
import img3 from '../public/images/page1_img3.jpg';
import mip_logo from '../public/images/mip_logo.png';
import icon_arrow_right from '../public/icons/icon_arrow_right.svg';

export default function FrontPage() {

    return (
        <div className="bg-mosBlue-900 h-full text-white">
            <div className="max-w-bootstrap mx-auto">
                <div className="flex flex-wrap bg-mosBlue-700">
                    <div className="md:w-1/2 flex">
                        <div>
                            <img src={img1} alt="" />
                        </div>
                        <div className="flex flex-1 justify-center items-center bg-mosRose-500 p-2">
                            <ReportDate classes="text-7xl md:text-8xl font-bold" year={2022} />
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap bg-mosBlue-700">
                    <div><img src={img2} alt="" /></div>
                    <div className="p-4 md:pl-16">
                        <p className="text-6xl md:text-7xl font-bold uppercase md:leading-normal">Годовой<br/> отчет</p>
                    </div>
                </div>
                <div className="flex flex-wrap bg-mosBlue-700">
                    <div className="md:w-1/2 flex order-2 md:order-1">
                        <div className="flex flex-1 justify-center items-center bg-mosBlue-100 p-2 text-right">
                            <p className="text-2xl text-mosBlue-700 uppercase">проектируем будущее,<br/>строим настоящее</p>
                        </div>
                        <div>
                            <img src={img3} alt="" />
                        </div>
                    </div>
                    <div className="order-1 md:order-2 p-4 md:pt-0 md:pl-16">
                        <Link to={"pages/1"} className="uppercase flex">
                            <span className="mr-2">Перейти в отчёт</span> <img src={icon_arrow_right} alt="" />
                        </Link>
                    </div>
                </div>
                <div className="flex flex-wrap bg-mosBlue-700">
                    <div className="md:w-1/2 justify-center items-center p-6 md:p-24 bg-mosBlue-900">
                        <img src={mip_logo} alt="" />
                    </div>
                    <div className="md:w-1/2 sm:p-4 md:pt-0 md:pl-16">
                    </div>
                </div>

            </div>
        </div>
    )
}
