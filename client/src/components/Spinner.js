import spinnerStyle from "../styles/Spinner.module.css";

export default function Spinner(props) {
  const style = {
    show: {
      display: "flex",
    },
    hide: {
      display: "none",
    },
  };

  return (
    <div
      className={spinnerStyle.spinnerContainer}
      style={props.isLoading ? style.show : style.hide}
    >
      <div className={spinnerStyle.spinner}></div>
    </div>
  );
}
