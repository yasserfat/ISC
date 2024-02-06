import React, {createContext, useState } from "react";

 const ThemeColors = {
  Inetech: "",
  Wed: "",
  Inetech:""

};

 const ThemeColorContext = createContext({
  color: ThemeColors.blue,
  changeColor: (color) => {},
});

export default function ThemeColorWrapper(props) {
  const [color, setColor] = useState(ThemeColors.blue);

  function changeColor(color) {
    setColor(color);
  }

  return (
    <ThemeColorContext.Provider
      value={{ color: color, changeColor: changeColor }}
    >
      {props.children}
    </ThemeColorContext.Provider>
  );
}