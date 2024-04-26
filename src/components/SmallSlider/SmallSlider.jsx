import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import {SMALL_SLIDER_ITEMS} from "./constants.jsx";
import {Button} from "../Button/Button.jsx";
import {Heading3} from "../Heading3/Heading3.jsx";
import {SubTitle} from "../SubTitle/SubTitle.jsx";
import {Text1} from "../Text1/Text1.jsx";
import {Text2} from "../Text2/Text2.jsx";
import {SwiperInner} from "./Styles.jsx";
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const SmallSlider = () => {
    return (
        <SwiperInner>
            <Swiper
                loop={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Navigation]}
                keyboard={{
                    enabled: true,
                }}
                className="mySwiper"
            >
                {SMALL_SLIDER_ITEMS.map((slide) => (
                    <SwiperSlide
                        key={slide.id}
                        {...slide}
                    >
                        <div className="swiper-text">
                            <SubTitle>{slide.text}</SubTitle>
                            <Heading3>{slide.title}</Heading3>
                            <Text1>{slide.description}</Text1>
                            <Text2>{slide.name}</Text2>
                            <Button text={slide.button}/>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </SwiperInner>
    )
}
