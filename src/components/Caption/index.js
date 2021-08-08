import React from "react";
import { types } from "../../utils/constants";
import Bulb from "../Bulb";

const Caption = () => {
  return (
    <div className="mm-caption">
      <div className="caption-line">
        <Bulb type={types.CORRECT} />
        <span>Correct</span>
      </div>
      <div className="caption-line">
        <Bulb type={types.EXISTS} />
        <span>Color Correct</span>
      </div>
    </div>
  );
};

export default Caption;
