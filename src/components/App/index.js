import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as GameActions from "../../actions";
import Secret from "../Secret";
import Board from "../Board";
import PegTray from "../Peg/PegTray";
import Caption from "../Caption";
import DefaultModal from "../Modal";

const App = ({ game, actions }) => {
  const renderModal = (solved) => {
    const props = {
      className: solved ? "mm-solved-modal" : "mm-lost-modal",
      overlayClassName: "modal-overlay",
      message: solved ? "Congratulations, you win!" : "Boom, try again!"
    };
    return <DefaultModal {...props} />;
  };
  const revealed = game.solved || game.lost;
  return (
    <div className="mastermind-game theme-default">
      <Secret slots={game.secret} revealed={revealed} />
      <Board {...game} />
      <PegTray
        maxColors={game.config.availableColors}
        {...(revealed || actions)}
      />
      <button onClick={actions.newGame}>New game</button>
      {revealed && renderModal(game.solved)}
      <Caption />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    game: state.mastermind
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(GameActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
