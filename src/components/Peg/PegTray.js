import React from "react";
import Peg from "./Peg";

const PegTray = ({ maxColors, play }) => {
  const renderSlots = (maxColors, onClickHandler) => {
    const slots = [];
    let i;

    for (i = 0; i < maxColors; i += 1) {
      slots.push(<Peg key={i} color={i} onClickHandler={onClickHandler} />);
    }

    return slots;
  };

  return <div className="mm-peg-tray">{renderSlots(maxColors, play)}</div>;
};

export default PegTray;
