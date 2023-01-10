import alertStyle from "../../styles/commons/Alert.module.css";
import successIcon from "../../images/success.png";
import warningIcon from "../../images/warning.png";
import errorIcon from "../../images/error.png";

const alertType = {
  success: "success",
  warning: "warning",
  error: "error",
};

const alertClassKey = {
  success: "alertSuccess",
  warning: "alertWarning",
  error: "alertError",
};

const alertIcon = {
  success: successIcon,
  warning: warningIcon,
  error: errorIcon,
};

const styleConfig = {
  show: {
    display: "flex",
  },
  hide: {
    display: "none",
  },
};

export default function Alert(props) {
  const { show, type, message } = props.alertData;

  return (
    <div
      className={`${alertStyle.alert} ${alertStyle[alertClassKey[type]]}`}
      style={show ? styleConfig.show : styleConfig.hide}
    >
      <div className={alertStyle.alertMessage}>{message}</div>
      <img src={alertIcon[type]} alt={type} className={alertStyle.alertIcon} />
    </div>
  );
}

export { alertType };
