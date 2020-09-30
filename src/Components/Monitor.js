import React from "react";
import { connect } from "react-redux";

class Monitor extends React.Component {
  state = {};

  displayKiosksStatus = () => {
    const { kiosk_data } = this.props;
    return kiosk_data.map((item, key) => {
      if (key <= 2) {
        let online = item.isOnline ? "В сети" : "Не в сети";
        return (
          <td key={item.id} className={item.isOnline ? "online" : "offline"}>
            {online}
          </td>
        );
      }
      return false;
    });
  };
  render = () => {
    return (
      <div className="monitor_container">
        <h3>Мониторинг</h3>
        <table border={1} cellPadding={50} cellSpacing={0}>
          <tbody>
            <tr>
              <td>Киоск 1</td>
              <td>Киоск 2</td>
              <td>Киоск 3</td>
              {/* <td>Тест</td> */}
            </tr>
            <tr>{this.displayKiosksStatus()}</tr>
          </tbody>
        </table>
      </div>
    );
  };
}

const mapStateToProps = (state) => ({ kiosk_data: state.kiosk_data });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Monitor);
