import {NavLink} from "react-router-dom";
import icon_arrow_left from '../icons/icon_arrow_left.svg';
import icon_arrow_right from '../icons/icon_arrow_right.svg';

type FooterTypes = {
    prev: string,
    next: string
}

export default function Footer({prev, next}: FooterTypes) {
    return (
        <footer className={'bg-mosBlue-900'}>
            <div className="flex justify-between items-center md:max-w-bootstrap-md 2xl:max-w-bootstrap-full mx-auto py-10 max-md:px-8">
                {prev &&
                <NavLink to={prev} className="uppercase flex items-center text-white">
                    <img src={icon_arrow_left} alt="" /><span className="hidden md:block ml-2">Предыдущий раздел</span>
                </NavLink>
                }
                {next &&
                <NavLink to={next} className="uppercase flex items-center text-white">
                    <span className="hidden md:block mr-2">Следующий раздел</span><img src={icon_arrow_right} alt="" />
                </NavLink>
                }
            </div>
        </footer>
    );
}
