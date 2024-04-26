import React, { useState } from "react";
import { GALLERY_ITEMS } from "./constants.jsx";
import { GalleryInner } from "./Styles.jsx";
import { Button } from "../Button/Button.jsx";
import {Heading3} from "../Heading3/Heading3.jsx";

export const Gallery = () => {
    const [visibleItems, setVisibleItems] = useState(4);

    const viewMore = () => {
        setVisibleItems((prevVisibleItems) => prevVisibleItems + 4);
    };

    return (
        <GalleryInner>
            <Heading3 title='Customer Gallery'/>
            <div className="gallery-img">
                {GALLERY_ITEMS.slice(0, visibleItems).map((img) => (
                    <img key={img.id} src={img.image_url} alt={img.alt} />
                ))}
            </div>
            {visibleItems < GALLERY_ITEMS.length && (
                <Button text="View More" onClick={viewMore} />
            )}
        </GalleryInner>
    );
};
