import React from "react";
import Peg from "../Peg/Peg";
import PegSlot from "../Peg/PegSlots";

const Row = ({ activeSlot, length, className, slots }) => {
  const renderSlots = () => {
    const slot = slots || Array(length).fill(null);

    return slot.map((color, index) => {
      const pegProps = {
        key: index,
        active: activeSlot === index
      };

      return color === null ? (
        <PegSlot {...pegProps} />
      ) : (
        <Peg {...pegProps} color={color} />
      );
    });
  };

  return <div className={className}>{renderSlots()}</div>;
};

Row.defaultProps = {
  className: "mm-row"
};

export default Row;
