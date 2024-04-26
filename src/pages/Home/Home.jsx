import React from "react";
import {Header} from "../../components/Header/Header.jsx";
import BigSlider from "../../components/BigSlider/BigSlider.jsx";
import {ImageText} from "../../components/ImageText/ImageText.jsx";
import {SmallSlider} from "../../components/SmallSlider/SmallSlider.jsx";
import {Gallery} from "../../components/Gallery/Gallery.jsx";
import {Footer} from "../../components/Footer/Footer.jsx";

export const Home = () => {
    return (
        <>
            <Header/>
            <main>
                <BigSlider/>
                <ImageText/>
                <SmallSlider/>
                <Gallery/>
            </main>
            <Footer/>
        </>
    )
}