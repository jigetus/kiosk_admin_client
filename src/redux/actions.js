export function ChangeLoginStatus(value) {
  return {
    type: "APP_CHANGE_LOGGIN_STATUS",
    payload: value,
  };
}

export function SetKioskData(value) {
  return {
    type: "APP_SET_KIOSK_DATA",
    payload: value,
  };
}
export function SelectKioskValue(value) {
  return {
    type: "APP_SELECT_KIOSK",
    payload: value,
  };
}

export function AppSetWs1(value) {
  return {
    type: "APP_SET_WS1",
    payload: value,
  };
}
export function AppSetWs2(value) {
  return {
    type: "APP_SET_WS2",
    payload: value,
  };
}
export function AppSetWs3(value) {
  return {
    type: "APP_SET_WS3",
    payload: value,
  };
}
export function AppSetWs666(value) {
  return {
    type: "APP_SET_WS666",
    payload: value,
  };
}

export function PushMessage(value) {
  return {
    type: "APP_PUSH_MESSAGE",
    payload: value,
  };
}
