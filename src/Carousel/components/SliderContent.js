import React from "react";

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
      <div class="cont" id="testim-content">
        {sliderImage.map(({slide, index, person, Position, Comment, src, active }) => (
          <div className={index === activeIndex ? "active" : ""}>
            <div class="img"><img src={src} /></div>
            <h2>{person} <br />{Position}</h2>
            <p>{Comment}</p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default SliderContent;
