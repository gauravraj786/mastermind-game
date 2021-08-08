import React from "react";

const PegSlot = ({ active }) => {
  return (
    <div className="mm-peg-slot">
      {active && <div className="active-slot" />}
      <div className="mm-peg-slot-outer" />
      <div className="mm-peg-slot-inner" />
    </div>
  );
};

export default PegSlot;
