import React from "react";
import { connect } from "react-redux";
import { PushMessage } from "../redux/actions";

class ControButtons extends React.Component {
  state = {};

  render = () => {
    const { selectedKiosk, PushMessage } = this.props;
    if (selectedKiosk === 0) return null;
    return (
      <div className="buttons_container">
        <button onClick={() => PushMessage("CEF_RELOAD")}>
          Перезагрузить сайт
        </button>
        <button onClick={() => PushMessage("APP_RELOAD")}>
          Перезагрузить оболочку
        </button>
        <button onClick={() => PushMessage("APP_MINIMIZE")}>
          Свернуть оболочку
        </button>
        <button onClick={() => PushMessage("APP_MAXIMIZE")}>
          Развернуть оболочку
        </button>
        <button
          onClick={() => {
            var result = window.confirm(
              "Вы действительно хотите перезагрузить Windows?"
            );
            if (result) {
              PushMessage("WIN_REBOOT");
            }
          }}
        >
          Выключить Windows
        </button>
      </div>
    );
  };
}

const mapStateToProps = (state) => ({ selectedKiosk: state.selectedKiosk });

const mapDispatchToProps = { PushMessage };

export default connect(mapStateToProps, mapDispatchToProps)(ControButtons);
