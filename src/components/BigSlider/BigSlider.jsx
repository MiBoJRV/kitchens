import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import {SLIDER_ITEMS} from "./constants.jsx";
import {Button} from "../Button/Button.jsx";
import {Heading1} from "../Heading1/Heading1.jsx";
import {SubTitle} from "../SubTitle/SubTitle.jsx";
import {SwiperInner} from "./Styles.jsx";
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';

export default function App() {
    return (
        <SwiperInner>
            <Swiper
                loop={true}
                pagination={{
                    clickable: true,
                }}
                keyboard={{
                    enabled: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {SLIDER_ITEMS.map((slide) => (
                    <SwiperSlide
                        key={slide.id}
                        {...slide}
                    >
                        <div className="swiper-text">
                            <SubTitle> {slide.text}</SubTitle>
                            <Heading1>{slide.title}</Heading1>
                            <Button text={slide.button} />
                        </div>
                        <img src={slide.image_url} alt="slide"/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </SwiperInner>
    );
}
