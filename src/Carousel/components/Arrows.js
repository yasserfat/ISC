import React from "react";

function Arrows({ prevSlide, nextSlide }) {
  return (
    <div className="arrows">
      <span id="right-arrow" class="arrow right fa fa-chevron-right" onClick={nextSlide}></span>
      <span id="left-arrow" class="arrow left fa fa-chevron-left" onClick={prevSlide}></span>
    </div>
  );
}

export default Arrows;
