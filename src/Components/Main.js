import React from "react";
import { connect } from "react-redux";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import TopButtons from "./TopButtons";
import Monitor from "./Monitor";
import {
  SetKioskData,
  AppSetWs2,
  AppSetWs1,
  AppSetWs3,
  AppSetWs666,
} from "../redux/actions";
import SelectKiosk from "./SelectKiosk";
import ControlButtons from "./ControlButtons";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Loading: true,
    };
    this.getData();
  }
  getData = async () => {
    fetch("getdata.php")
      .then((response) => response.json())
      .then((res) => {
        let tmp = [];
        res.forEach((element, index) => {
          if (index > 2) return false;
          const a = element.date.split(/[^0-9]/);
          const d = new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5]);
          tmp.push({
            id: parseInt(element.id),
            ip: element.ip,
            date: element.date,
            isOnline: Date.now() - d.getTime() < 11000 ? true : false,
          });
        });
        console.log(tmp);
        this.sendIpForWS(tmp);
        this.props.SetKioskData(tmp);
        this.setState({
          Loading: false,
        });
      });
  };
  sendIpForWS = (kiosks) => {
    const { AppSetWs2, AppSetWs1, AppSetWs3, AppSetWs666 } = this.props;
    kiosks.map((item, key) => {
      switch (item.id) {
        case 1:
          AppSetWs1(item.ip);
          break;
        case 2:
          AppSetWs2(item.ip);
          break;
        case 3:
          AppSetWs3(item.ip);
          break;
        case 666:
          AppSetWs666(item.ip);
          break;
        default:
          return false;
      }
    });
  };

  render() {
    const { Loading } = this.state;
    if (Loading)
      return (
        <Container component="main" maxWidth="xs" style={{ display: "flex" }}>
          <div className={"centered_container"}>
            <CircularProgress color="secondary" />
          </div>
        </Container>
      );
    return (
      <Container component="main" maxWidth="xs">
        <div className={"centered_container"}>
          <TopButtons />
          <Monitor />
          <SelectKiosk />
          <ControlButtons />
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  SetKioskData,
  AppSetWs2,
  AppSetWs1,
  AppSetWs3,
  AppSetWs666,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
