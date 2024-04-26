import React from "react";
import {Button} from "../Button/Button.jsx";
import {Heading2} from "../Heading2/Heading2.jsx";
import {SubTitle} from "../SubTitle/SubTitle.jsx";
import {Text1} from "../Text1/Text1.jsx";
import {ImageTextInner} from "./Styles.jsx";
import It from "./../../assets/images/i-t.png";

export const ImageText = () => {
    return (
        <ImageTextInner>
            <div className="image">
                <img src={It} alt="img"/>
            </div>
            <div className="text">
                <div className="text-content">
                    <SubTitle className="sub-title" title="Quality Craftmanship from build to delivery"/>
                    <Heading2 title="Discover the beauty of a handmade kitchen"/>
                    <Text1 className="paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget est sit amet sapien
                        venenatis
                        maximus vel in urna. Nam mauris arcu, feugiat in finibus vitae, sollicitudin id purus. Ut
                        imperdiet,
                        magna eu pharetra tincidunt, mauris purus ultrices.
                    </Text1>
                    <Button text="About Us"/>
                </div>
            </div>
        </ImageTextInner>
    );
};
