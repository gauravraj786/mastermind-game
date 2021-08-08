import React from "react";
import Indicator from "../Indicator";
import Row from "../Row";

const Board = ({ config, rows, secret, activeRow, activeSlot, results }) => {
  const renderCodeRows = () => {
    let i,
      boardRows = [];

    for (i = config.maxRows - 1; i >= 0; i -= 1) {
      const slots = rows[i];

      boardRows.push(
        <div key={i}>
          <Row
            slots={slots}
            length={secret.length}
            activeSlot={i === activeRow && activeSlot}
          />
          <Indicator result={results[i]} length={secret.length} />
        </div>
      );
    }

    return boardRows;
  };

  return (
    <div className="mm-board">
      <div className="rows">{renderCodeRows()}</div>
    </div>
  );
};

export default Board;
