import { applyMiddleware, createStore } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

const initialState = {
  kiosk_data: {},
  isLogged: false,
  selectedKiosk: 0,
  ws1: null,
  ws2: null,
  ws3: null,
  ws666: null,
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "APP_CHANGE_LOGGIN_STATUS":
      return { ...state, isLogged: payload };
    case "APP_SET_KIOSK_DATA":
      return { ...state, kiosk_data: payload };
    case "APP_SELECT_KIOSK":
      return { ...state, selectedKiosk: payload };
    case "APP_SET_WS1":
      const socket1 = new WebSocket("ws://" + payload + ":8088");
      socket1.onopen = function (e) {
        console.log("Соединение установлено c ws1");
      };
      socket1.onmessage = function (event) {
        console.log(`Данные получены с сервера: ${event.data}`);
      };
      socket1.onclose = function (event) {
        if (event.wasClean) {
          console.log(
            `[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`
          );
        } else {
          console.log("[close] Соединение прервано");
        }
      };
      socket1.onerror = function (error) {
        console.log(`[error] ${error.message}`);
      };
      return { ...state, ws1: socket1 };
    case "APP_SET_WS2":
      const socket2 = new WebSocket("ws://" + payload + ":8088");
      socket2.onopen = function (e) {
        console.log("Соединение установлено c ws2");
      };
      socket2.onmessage = function (event) {
        console.log(`Данные получены с сервера: ${event.data}`);
      };
      socket2.onclose = function (event) {
        if (event.wasClean) {
          console.log(
            `[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`
          );
        } else {
          console.log("[close] Соединение прервано");
        }
      };
      socket2.onerror = function (error) {
        console.log(`[error] ${error.message}`);
      };
      return { ...state, ws2: socket2 };
    case "APP_SET_WS3":
      const socket3 = new WebSocket("ws://" + payload + ":8088");
      socket3.onopen = function (e) {
        console.log("Соединение установлено c ws3");
      };
      socket3.onmessage = function (event) {
        console.log(`Данные получены с сервера: ${event.data}`);
      };
      socket3.onclose = function (event) {
        if (event.wasClean) {
          console.log(
            `[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`
          );
        } else {
          console.log("[close] Соединение прервано");
        }
      };
      socket3.onerror = function (error) {
        console.log(`[error] ${error.message}`);
      };
      return { ...state, ws3: socket3 };
    case "APP_SET_WS666":
      const socket666 = new WebSocket("ws://" + payload + ":8088");
      socket666.onopen = function (e) {
        console.log("Соединение установлено c ws666");
      };
      socket666.onmessage = function (event) {
        console.log(`Данные получены с сервера: ${event.data}`);
      };
      socket666.onclose = function (event) {
        if (event.wasClean) {
          console.log(
            `[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`
          );
        } else {
          console.log("[close] Соединение прервано");
        }
      };
      socket666.onerror = function (error) {
        console.log(`[error] ${error.message}`);
      };
      return { ...state, ws666: socket666 };

    case "APP_PUSH_MESSAGE":
      const { selectedKiosk, ws1, ws2, ws3, ws666 } = state;
      switch (selectedKiosk) {
        case 1:
          ws1.send(payload);
          break;
        case 2:
          ws2.send(payload);
          break;
        case 3:
          ws3.send(payload);
          break;
        case 4:
          ws1.send(payload);
          ws2.send(payload);
          ws3.send(payload);
          break;
        case 666:
          ws666.send(payload);
          break;
        default:
          break;
      }
      return { ...state };
    default:
      return { ...state };
  }
};

export default function configureStore() {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  return createStore(rootReducer, composeWithDevTools(middleWareEnhancer));
}
