import React from "react";
import {ButtonStyled} from "./Styles.jsx";
export const Button = ({text, onClick, classNames}) => {

    return (
        <ButtonStyled className={classNames} onClick={onClick}>
            {text}
        </ButtonStyled>
    );
};
