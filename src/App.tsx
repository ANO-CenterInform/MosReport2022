import ReportDate from "./Components/ReportDate";
import img1 from './assets/images/page1_img1.jpg'

function App() {

    return (
        <div className="bg-mosBlue-900 h-screen">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-wrap">
                    <div className="md:w-1/2 flex">
                        <div>
                            <img src={img1} alt="" />
                        </div>
                        <div className="flex flex-1 justify-center items-center bg-mosRose-500 p-2">
                            <ReportDate classes="text-white text-7xl md:text-8xl font-bold" year={2022} />
                        </div>
                    </div>
                    <div className="md:w-1/2"></div>
                </div>
            </div>
        </div>
    )
}

export default App
