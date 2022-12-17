import { useState, createContext } from "react";
import Spinner from "./components/Spinner";
import Alert, { alertType } from "./components/Alert";
const AppContext = createContext();

const sampleAlertData = {
  show: false,
  type: alertType.success,
  message: "Hello World",
};

function AppProvider(props) {
  const [isLoading, setLoading] = useState(false);
  const [alertData, setAlertData] = useState(sampleAlertData);

  return (
    <AppContext.Provider
      value={{
        toggleLoading() {
          setLoading(!isLoading);
        },
        showAlert(type, message) {
          setAlertData({ ...sampleAlertData, type, message, show: true });

          setTimeout(() => {
            setAlertData(sampleAlertData);
          }, 2000);
        },
      }}
    >
      <Spinner isLoading={isLoading} />
      <Alert alertData={alertData} />
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
