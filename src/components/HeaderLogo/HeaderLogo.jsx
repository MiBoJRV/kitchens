import React from "react";
import Logo from "./../../assets/images/logo.svg";
import {LogoInner} from "./Styles.jsx";

export const HeaderLogo = ({className}) => {

    return (
        <LogoInner className={className}>
        <a  href="/">
            <img src={Logo} alt="logo"/>
        </a>
        </LogoInner>
    );
};
