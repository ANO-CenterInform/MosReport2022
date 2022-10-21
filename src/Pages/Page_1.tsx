import { useState} from "react";


export default function Page_1() {

    const [menuState, setMenuState] = useState(false)

    const handleMenuClick = () => setMenuState((previousState) => !previousState);
    return (
        <>
            <div className="flex md:justify-center f-full md:absolute md:left-0 md:top-0 md:w-28 lg:w-44 bg-mosBlue-900
            md:pt-10 color-white">
                <button className="space-y-2" onClick={handleMenuClick}>
                    <div className="w-8 h-0.5 bg-white"></div>
                    <div className="w-8 h-0.5 bg-white"></div>
                    <div className="w-8 h-0.5 bg-white"></div>
                </button>
            </div>
            <div className={menuState ? 'absolute md:ml-28 lg:ml-44 bg-mosBlue-700 text-white' : 'hidden'}>
                Menu here
            </div>
            <div className="max-w-bootstrap mx-auto">

            </div>
        </>
        )
}
