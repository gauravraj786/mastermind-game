import React from "react";
import { types } from "../../utils/constants";
import Bulb from "../Bulb";

const Indicator = ({ result, length }) => {
  const getDefaultResult = (length) => {
    return { nCorrect: 0, nExist: 0, nIncorrect: length };
  };
  const getBulbs = (result) => {
    const bulbs = [
      ...Array(result.nCorrect).fill(types.CORRECT),
      ...Array(result.nExist).fill(types.EXISTS),
      ...Array(result.nIncorrect).fill(types.INCORRECT)
    ];

    return bulbs.map((value, index) => {
      return <Bulb key={index} type={value} />;
    });
  };

  const results = result || getDefaultResult(length);
  return <div className="mm-indicator">{getBulbs(results)}</div>;
};

export default Indicator;
