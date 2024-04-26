import React from "react";
import {FooterInner} from "./Styles.jsx";
import {FOOTER_ITEMS} from "./constants.jsx";
import {HeaderLogo} from "../HeaderLogo/HeaderLogo.jsx";
import {Copyright} from "../Copyright/Copyright.jsx";
import {Line} from "../Line/Line.jsx";
import {Heading4} from "../Heading4/Heading4.jsx";

export const Footer = () => {
    return (
        <FooterInner>
            <div className="footer-content">
                <div className="footer-logo">
                    <Line/>
                    <HeaderLogo/>
                    <Line/>
                </div>
                <div className="footer-links">
                    {FOOTER_ITEMS.map((block) => (
                        <div className="footer-links-block" key={block.id}>
                            <Heading4>{block.blockTitle}</Heading4>
                            <ul className={block.classNames}>
                                {block.items.map((item, index) => (
                                    <li key={index}>
                                        {item.icon ? (
                                            <a className="footer-social" href={item.href}>
                                                <img src={item.icon} alt={item.title}/>
                                            </a>
                                        ) : (
                                            <a href={item.href}>{item.title}</a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <Copyright/>
            </div>
        </FooterInner>
    );
};
