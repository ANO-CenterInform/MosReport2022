import { Link } from "react-router-dom";
import ReportDate from "./Components/ReportDate";
import img1 from '../public/images/page1_img1.jpg';
import img2 from '../public/images/page1_img2.jpg';
import img3 from '../public/images/page1_img3.jpg';

export default function App() {

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
                    <div className="md:w-1/2 flex">
                        <div className="flex flex-1 justify-center items-center bg-mosBlue-100 p-2 text-right">
                            <p className="text-2xl text-mosBlue-700 uppercase">проектируем будущее,<br/>строим настоящее</p>
                        </div>
                        <div>
                            <img src={img3} alt="" />
                        </div>
                    </div>
                    <div><Link to={"report"}>Перейти в отчёт</Link></div>
                </div>

            </div>
        </div>
    )
}
