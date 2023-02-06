import { useState, createContext } from "react";
import appStyle from "./App.module.css";
import Spinner from "../commons/components/Spinner";
import Alert, { alertType } from "../commons/components/Alert";
import locale from "./locales/en.json";

const sampleAlertData = {
  show: false,
  type: alertType.success,
  message: "Hello World",
};
const styleConfig = {
  show: {
    display: "block"
  },
  hide: {
    display: "none"
  }
};

const AppContext = createContext();

function AppProvider(props) {
  const [loading, setLoading] = useState(false);
  const [alertData, setAlertData] = useState(sampleAlertData);
  const [account, setAccount] = useState(null);

  const toggleLoading = function () {
    setLoading(!loading);
  };
  const showAlert = function (type, message) {
    setAlertData({ ...sampleAlertData, type, message, show: true });

    setTimeout(() => {
      setAlertData(sampleAlertData);
    }, 2000);
  };

  return (
    <AppContext.Provider value={{ toggleLoading, showAlert, alertType, locale, account, setAccount }}>
      <div className={appStyle.app}>
        <div className={appStyle.alertContainer} style={alertData.show ? styleConfig.show : styleConfig.hide}>
          <Alert alertData={alertData} />
        </div>
        <div className={appStyle.spinnerContainer} style={loading ? styleConfig.show : styleConfig.hide}>
          <Spinner loading={loading} />
        </div>
        <div className={appStyle.childrenContainer} style={loading ? styleConfig.hide : styleConfig.show}>
          {props.children}
        </div>
      </div>
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
