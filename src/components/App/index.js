import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as GameActions from "../../actions";
import Secret from "../Secret";
import Board from "../Board";
import PegTray from "../Peg/PegTray";
import Caption from "../Caption";
import DefaultModal from "../Modal";

const App = ({ game, actions }) => {
  const [toggle, setToggle] = useState(false);
  const [infoText, setText] = useState("Show rules");
  const [cls, setCls] = useState({ info: true });

  useEffect(() => {
    if (!toggle) {
      setText("Show rules");
      setCls({
        ...cls,
        hidden: true,
      });
    } else {
      setText("Hide rules");
      setCls({
        ...cls,
        hidden: false,
      });
    }
  }, [toggle]);

  const renderModal = (solved) => {
    const props = {
      className: solved ? "mm-solved-modal" : "mm-lost-modal",
      overlayClassName: "modal-overlay",
      message: solved ? "Congratulations, you win!" : "Boom, try again!",
    };
    return <DefaultModal {...props} />;
  };
  const revealed = game.solved || game.lost;
  return (
    <div className="mastermind-game theme-default">
      <h1>
        <span className="M">M</span>
        <span className="A">A</span>
        <span className="S">S</span>
        <span className="T">T</span>
        <span className="E">E</span>
        <span className="R">R</span>
        <span className="MIND">MIND</span>
      </h1>

      <div className="rules">
        <span className="rules-toggle" onClick={() => setToggle(!toggle)}>
          {infoText}
        </span>
        <p className={classNames(cls)}>
          Try to guess the pattern, in both order and color, within ten turns.
          After submitting a row, a small black peg is placed for each code peg
          from the guess which is correct in both color and position. A white
          peg indicates the existence of a correct color code peg placed in the
          wrong position. More info on{" "}
          <a
            href="https://en.wikipedia.org/wiki/Mastermind_(board_game)"
            target="_blank"
          >
            Wikipedia
          </a>
          .
        </p>
      </div>
      <div className="flex">
        <Board {...game} />
        <PegTray
          maxColors={game.config.availableColors}
          {...(revealed || actions)}
        />
      </div>
      <Secret slots={game.secret} revealed={revealed} />
      <div>
        <button onClick={actions.newGame}>New game</button>
      </div>
      {revealed && renderModal(game.solved)}
      <Caption />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    game: state.mastermind,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(GameActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
