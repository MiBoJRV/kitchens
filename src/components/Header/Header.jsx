import React from "react";
import {useHeader} from "../../hooks/useHeader.jsx";
import {MENU_ITEMS_LEFT, MENU_ITEMS_RIGHT} from "../HeaderNav/constants.jsx";
import {HeaderWrap} from "./Styles.jsx";
import {HeaderNav} from "../HeaderNav/HeaderNav.jsx";
import {HeaderLogo} from "../HeaderLogo/HeaderLogo.jsx";
import {Button} from "../Button/Button.jsx";
import {HeaderSocial} from "../HeaderSocial/HeaderSocial.jsx";
import BurgerIcon from "./../../assets/images/burger-icon.svg";
import CloseIcon from "./../../assets/images/close-icon.svg";

export const Header = () => {
    const {
        isMobileMenu,
        toggleMobileMenu,
    } = useHeader();
    return (
        <header>
            <HeaderWrap>
                <div className="desktop-menu">
                    <HeaderSocial/>
                    <HeaderNav menuItems={MENU_ITEMS_LEFT}/>
                    <HeaderLogo/>
                    <HeaderNav menuItems={MENU_ITEMS_RIGHT}/>
                    <Button classNames="outlined header" variant="outlined" text="My order"/>

                </div>
                <button
                    type="button"
                    onClick={toggleMobileMenu}
                    className="mobile-btn"
                >
                    {isMobileMenu ? <img src={CloseIcon} alt="Close Icon"/> :
                        <img src={BurgerIcon} alt="Burger Icon"/>}
                </button>
                {isMobileMenu && (
                    <div className="mobile-menu">
                        <HeaderLogo className="mobile"/>
                        <HeaderNav className="mobile-nav" menuItems={MENU_ITEMS_LEFT}/>
                        <HeaderNav className="mobile-nav" menuItems={MENU_ITEMS_RIGHT}/>
                        <Button classNames="outlined mobile" variant="outlined" text="My order"/>
                        <HeaderSocial className="mobile-social"/>
                    </div>
                )}
            </HeaderWrap>

        </header>
    );
};
