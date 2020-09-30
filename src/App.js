import React from "react";
import { connect } from "react-redux";
import Loginform from "./Components/Loginform";
import postData from "./functions";
import { ChangeLoginStatus } from "./redux/actions";
import Main from "./Components/Main";

const App = (props) => {
  const { isLogged, ChangeLoginStatus } = props;
  if (!isLogged) {
    postData("login.php").then((res) => {
      // console.log(res);
      if (res.code === 200) {
        ChangeLoginStatus(true);
      } else {
        ChangeLoginStatus(false);
      }
    });
  }

  if (isLogged) return <Main />;

  return <Loginform />;
};

const mapStateToProps = (state) => ({ isLogged: state.isLogged });

const mapDispatchToProps = {
  ChangeLoginStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
