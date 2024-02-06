import SliderContent from "./components/SliderContent";
import Dots from "./components/Dots";
import Arrows from "./components/Arrows";
import React, { useEffect, useState } from "react";

function Carousel(props) {
    const Testimonials = props.Testimonials;

    const len = Testimonials.length - 1;

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <section class="testim" id="testim" >
            <div class="wrap">
                <h2 class="textwrapper_header sponsors_header">
                    <a href="#" class="textwrapper_header_link">
                        Testimonials
                    </a>
                </h2>
                <Arrows
                    prevSlide={() =>
                        setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
                    }
                    nextSlide={() =>
                        setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
                    } />

                <Dots
                    activeIndex={activeIndex}
                    sliderImage={Testimonials}
                    onclick={(activeIndex) => setActiveIndex(activeIndex)}
                />
                <SliderContent activeIndex={activeIndex} sliderImage={Testimonials} />
            </div>
        </section >
    );


}


export default Carousel;


