import React from "react";
import { connect } from "react-redux";

const Main = (props) => {
  const logOutHandler = (event) => {
    fetch("abortses.php");
    window.location.reload();
  };
  return (
    <div>
      <button onClick={logOutHandler}>Выйти</button>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
