import {NavLink} from "react-router-dom";
import React from "react";

type NaviLink = {
    path: string,
    text: string
}

export default function NaviLink({path, text}: NaviLink) {

    const activeStyle = {
        color: "#EC4437",
    };

    return (
        <li className={'mb-4 list-none'}>
            <NavLink
                to={path}
                className={'mb-4 hover:text-mosRose-500'}
                style={({isActive}) =>
                    isActive ? activeStyle : undefined
                }
            >
                {text}
            </NavLink>
        </li>
    );
}
