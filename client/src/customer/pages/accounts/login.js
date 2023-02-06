import { useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import loginStyle from "../../styles/accounts/Login.module.css";
import { AppContext } from "../../App";
import Account from "../../../models/account";

export default function Login() {
  const { showAlert, alertType, locale, account, setAccount } = useContext(AppContext);
  const navigate = useNavigate();

  const handleSubmitLoginForm = async function (event) {
    event.preventDefault();
    const loginForm = event.target;
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username.includes(" ") || password.includes(" ")) {
      showAlert(alertType.warning, locale.login.empty);
    } else {
      const responseData = await Account.login(username, password);

      if (responseData.success) {
        const currentAccount = new Account(responseData.data);
        setAccount(currentAccount);
        showAlert(alertType.success, responseData.message);
        localStorage.setItem("account", JSON.stringify(responseData.data));
        navigate("/");
      } else {
        showAlert(alertType.error, responseData.message);
      }
    }

    loginForm.reset();
  };

  useEffect(function () {
    if (account) {
      navigate("/");
    }
  }, [navigate, account]);

  return <div className={loginStyle.login}>
    <form className={loginStyle.loginForm} onSubmit={handleSubmitLoginForm}>
      <div className={loginStyle.formHeading}>Login</div>
      <div className={loginStyle.formGroup}>
        <label className={loginStyle.formLabel} htmlFor="username">Username</label>
        <input className={loginStyle.formInput} id="username" type="text" name="username" placeholder="Enter your username" />
      </div>
      <div className={loginStyle.formGroup}>
        <label className={loginStyle.formLabel} htmlFor="password">Password</label>
        <input className={loginStyle.formInput} id="password" type="password" name="password" placeholder="Enter your password" />
      </div>
      <div className={loginStyle.forgotPassword}>
        <Link className={loginStyle.link} to="#">Forgot Password?</Link>
      </div>
      <div className={loginStyle.formGroup}>
        <input className={loginStyle.formSubmit} type="submit" name="submit" value="Login" />
      </div>
      <div className={loginStyle.register}>
        <span className={loginStyle.registerText}>Not a member?</span>
        <Link to="/accounts/register" className={loginStyle.link}>Create account</Link>
      </div>
    </form>
  </div>;
}