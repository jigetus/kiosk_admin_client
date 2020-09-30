import React from "react";

export default class TopButtons extends React.Component {
  state = {};
  logOutHandler = (event) => {
    fetch("abortses.php");
    window.location.reload();
  };
  render = () => (
    <div className="topbuttons_container">
      <button onClick={() => window.location.reload()}>Обновить</button>
      <button onClick={this.logOutHandler}>Выйти</button>
    </div>
  );
}
