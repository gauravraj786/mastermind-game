import React from "react";
import Row from "../Row";

const Secret = ({ revealed, slots, colors }) => {
  return (
    <Row
      className="mm-secret"
      colors={colors}
      length={slots.length}
      slots={(revealed && slots) || undefined}
    />
  );
};

export default Secret;
