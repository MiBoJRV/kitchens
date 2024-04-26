import React from "react";

export const NavItem = ({title, href}) => {

    return (
        <li>
            <a href={href}> {title} </a>
        </li>
    );
};
