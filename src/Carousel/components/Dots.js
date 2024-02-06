import React from "react";

function Dots({ activeIndex, onclick, sliderImage }) {
  return (
    <ul class="dots" id="testim-dots">
    {sliderImage.map((slide, index) => (
        <span
          key={index}
          className={`${activeIndex === index ? "dot active" : "dot"}`}
          onClick={() => onclick(index)}
        ></span>
      ))}
    </ul>
  );
}

export default Dots;
