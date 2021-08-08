import React from "react";
import { COLORS } from "../../utils/constants";

const Peg = ({ color, onClickHandler, active }) => {
  return (
    <div className="mm-peg-wrapper">
      {active && <div className="active-slot" />}
      <div
        className={"mm-peg color " + COLORS[color]}
        onClick={onClickHandler && (() => onClickHandler(color))}
      />
    </div>
  );
};

export default Peg;
