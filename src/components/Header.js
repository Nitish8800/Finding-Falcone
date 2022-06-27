import "../css/App.css";
import React from "react";
import { connect } from "react-redux";
import { resetSelectionState } from "../actions";

function Header(props) {
  let { history, resetSelectionState } = props,
    handleButtonClick = () => {
      resetSelectionState();
      history.push("/");
    };
  const handleResetButtonCLick = () => {
    resetSelectionState();
  };

  return (
    <div className="header-container">
      <div className="header-text">Finding Falcone!</div>
      <div className="header-buttons-container">
        <div className="reset-button" onClick={handleResetButtonCLick}>
          Reset
        </div>
        <a href="/" className="reset-button" onClick={handleButtonClick}>
          Home
        </a>
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    resetSelectionState: async () => {
      // action for resetting the selection state of the store
      await resetSelectionState(dispatch);
    },
  };
};
export default connect(null, mapDispatchToProps)(Header);
