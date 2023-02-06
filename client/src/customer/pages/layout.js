import { useContext, useCallback, useEffect } from "react";
import { Outlet } from "react-router-dom";
import layoutStyle from "../styles/layout/Layout.module.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { AppProvider, AppContext } from "../App";
import Account from "../../models/account";

export default function Layout() {
  const { account, setAccount } = useContext(AppContext);

  const autoLogin = useCallback(async function () {
    if (!account) {
      const accountData = JSON.parse(localStorage.getItem("account"));

      if (accountData) {
        const { username, password } = accountData;

        if (username && password && !username.includes(" ") && !password.includes(" ")) {
          const responseData = await Account.login(username, password);

          if (responseData.success) {
            const currentAccount = new Account(responseData.data);
            setAccount(currentAccount);
          }
        }
      }
    }
  }, [account, setAccount]);

  useEffect(function () {
    autoLogin();
  }, [autoLogin]);

  return (
    <AppProvider>
      <div className={layoutStyle.layout}>
        <div className={layoutStyle.headerContainer}>
          <Header />
        </div>
        <div className={layoutStyle.mainContainer}>
          <Outlet />
        </div>
        <div className={layoutStyle.footerContainer}>
          <Footer />
        </div>
      </div>
    </AppProvider>
  );
}
