import React from "react";

const Bulb = ({ type }) => {
  return (
    <div className="bulb">
      <span className={type} />
    </div>
  );
};

export default Bulb;
