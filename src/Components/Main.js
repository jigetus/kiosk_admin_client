import React from "react";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Loading: true,
    };
  }
  getData = async () => {
    fetch("getdata.php")
      .then((response) => response.json())
      .then((res) => {
        res.forEach((element, index) => {
          if (index > 2) return false;
          const tmp = { id: element.id, ip: element.ip, date: element.date };
          //   console.log(tmp);
          //   data = { ...data, ...tmp };
        });
      });
  };

  logOutHandler = (event) => {
    fetch("abortses.php");
    window.location.reload();
  };
  render() {
    const { Loading } = this.state;
    if (Loading)
      return (
        <Container
          component="main"
          maxWidth="xs"
          className={"centered_container"}
        >
          <CircularProgress color="secondary" />
        </Container>
      );
    return (
      <Container
        component="main"
        maxWidth="xs"
        className={"centered_container"}
      >
        <button onClick={this.logOutHandler}>Выйти</button>
        <h3>Статус киосков:</h3>
        <ul></ul>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
