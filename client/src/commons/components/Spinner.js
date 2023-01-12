import spinnerStyle from "../styles/Spinner.module.css";

const styleConfig = {
  show: {
    display: "flex",
  },
  hide: {
    display: "none",
  },
};

export default function Spinner(props) {
  const { loading } = props;

  return (
    <div
      className={spinnerStyle.spinnerContainer}
      style={loading ? styleConfig.show : styleConfig.hide}
    >
      <div className={spinnerStyle.spinner}></div>
    </div>
  );
}