import React from "react";
import { connect } from "react-redux";
import { SelectKioskValue } from "../redux/actions";

class SelectKiosk extends React.Component {
  state = {};

  renderKioskCard = (kiosk) => {
    const { SelectKioskValue, selectedKiosk } = this.props;
    if (kiosk.isOnline)
      return (
        <div
          onClick={() => SelectKioskValue(kiosk.id)}
          className={selectedKiosk === kiosk.id ? "card_selected card" : "card"}
          key={kiosk.id}
        >
          {kiosk.id}
        </div>
      );
    return (
      <div className={"card_offline card"} key={kiosk.id}>
        {kiosk.id}
      </div>
    );
  };
  render = () => {
    const { kiosk_data, SelectKioskValue, selectedKiosk } = this.props;
    return (
      <div className="selectkiosk_container">
        <h3>Управление</h3>
        <div className="card_container">
          {kiosk_data.map((item) => this.renderKioskCard(item))}
          <div
            onClick={() => SelectKioskValue(4)}
            className={selectedKiosk === 4 ? "card_selected card" : "card"}
          >
            Все
          </div>
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state) => ({
  selectedKiosk: state.selectedKiosk,
  kiosk_data: state.kiosk_data,
});

const mapDispatchToProps = { SelectKioskValue };

export default connect(mapStateToProps, mapDispatchToProps)(SelectKiosk);
