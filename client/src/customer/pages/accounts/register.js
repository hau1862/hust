import { useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import registerStyle from "../../styles/accounts/Register.module.css";
import { AppContext } from "../../App";
import Account from "../../../models/account";

export default function Register() {
  const { showAlert, alertType, locale, account } = useContext(AppContext);
  const navigate = useNavigate();

  const handleSubmitRegisterForm = async function (event) {
    event.preventDefault();
    const registerForm = event.target;
    const fullName = registerForm.fullName.value.trim();
    const username = registerForm.username.value;
    const password = registerForm.password.value;
    const passwordConfirm = registerForm.passwordConfirm.value;

    if (username.includes(" ") || password.includes(" ") || passwordConfirm.includes(" ") || fullName === "") {
      showAlert(alertType.warning, locale.register.empty);
    } else if (password !== passwordConfirm) {
      showAlert(alertType.warning, locale.register.confirmError);
    } else {
      const responseData = await Account.login(username, password);

      if (responseData.success) {
        showAlert(alertType.success, responseData.message);
        localStorage.setItem("account", JSON.stringify(responseData.data));
        navigate("/");
      } else {
        showAlert(alertType.error, responseData.message);
      }
    }

    registerForm.reset();
  };

  useEffect(function () {
    if (account) {
      navigate("/");
    }
  }, [account, navigate]);

  return <div className={registerStyle.register}>
    <form className={registerStyle.registerForm} onSubmit={handleSubmitRegisterForm}>
      <div className={registerStyle.formHeading}>Register</div>
      <div className={registerStyle.formGroup}>
        <label className={registerStyle.formLabel} htmlFor="full-name">Full Name</label>
        <input className={registerStyle.formInput} id="full-name" type="text" name="fullName" placeholder="Enter your full name" />
      </div>
      <div className={registerStyle.formGroup}>
        <label className={registerStyle.formLabel} htmlFor="username">Username</label>
        <input className={registerStyle.formInput} id="username" type="text" name="username" placeholder="Enter your username" />
      </div>
      <div className={registerStyle.formGroup}>
        <label className={registerStyle.formLabel} htmlFor="password">Password</label>
        <input className={registerStyle.formInput} id="password" type="password" name="password" placeholder="Enter your password" />
      </div>
      <div className={registerStyle.formGroup}>
        <label className={registerStyle.formLabel} htmlFor="confirm-password">Confirm Password</label>
        <input className={registerStyle.formInput} id="confirm-password" type="password" name="confirmPassword" placeholder="Repeat your password" />
      </div>
      <div className={registerStyle.formGroup}>
        <input className={registerStyle.formSubmit} type="submit" name="submit" value="Create Account" />
      </div>
      <div className={registerStyle.login}>
        <span className={registerStyle.loginText}>Have an account?</span>
        <Link to="/accounts/login" className={registerStyle.link}>Login</Link>
      </div>
    </form>
  </div>;
}