import React from "react";
import colorname from "colornames";

const ColorInput = ({
  colorval,
  setcolorval,
  sethexvalue,
  toggle,
  settoggle,
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="InputForm">
      <input
        type="text"
        placeholder="Enter Color"
        value={colorval}
        onChange={(e) => {
          setcolorval(e.target.value);
          sethexvalue(colorname(e.target.value));
        }}
      />
      <button type="button" onClick={() => settoggle(!toggle)}>
        Toggler
      </button>
    </form>
  );
};

export default ColorInput;
