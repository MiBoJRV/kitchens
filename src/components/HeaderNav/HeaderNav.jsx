import React from "react";
import {NavItem} from "../NavItem/NavItem.jsx";
import {Nav} from "./Styles.jsx";

export const HeaderNav = ({ menuItems, className }) => {
    return (
        <Nav className={className}>
            <ul>
                {menuItems.map((link) => (
                    <NavItem
                        key={link.id}
                        {...link}
                    />
                ))}
            </ul>
        </Nav>
    );
};
