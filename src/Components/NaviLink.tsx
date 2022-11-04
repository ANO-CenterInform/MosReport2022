import {NavLink} from "react-router-dom";
import React from "react";

export default function NaviLink({path, text, onClick}) {
    return (
        <li className={'mb-4'}>
            <NavLink
                onClick
                to={path}
                className={(isActive) => (isActive ? 'mb-4 text-mosRose-500 hover:text-mosRose-500' : 'mb-4 hover:text-mosRose-500')}>
                {text}
            </NavLink>
        </li>
    );
}
