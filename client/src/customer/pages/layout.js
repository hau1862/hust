import { Outlet } from "react-router-dom";
import layoutStyle from "../styles/layout/Layout.module.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { AppProvider } from "../App";

export default function Layout() {
  return (
    <AppProvider>
      <div className={layoutStyle.layout}>
        <div className={layoutStyle.header}>
          <Header />
        </div>
        <div className={layoutStyle.container}>
          <Outlet />
        </div>
        <div className={layoutStyle.footer}>
          <Footer />
        </div>
      </div>
    </AppProvider>
  );
}
