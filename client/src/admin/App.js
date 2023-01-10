import { useState, createContext } from "react";
import Spinner from "./components/commons/Spinner";
import Alert, { alertType } from "./components/commons/Alert";

const AppContext = createContext();

const sampleAlertData = {
  show: false,
  type: alertType.success,
  message: "Hello World",
};

function AppProvider(props) {
  const [loading, setLoading] = useState(false);
  const [alertData, setAlertData] = useState(sampleAlertData);

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
    <AppContext.Provider value={{ toggleLoading, showAlert }}>
      <Spinner loading={loading} />
      <Alert alertData={alertData} />
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
