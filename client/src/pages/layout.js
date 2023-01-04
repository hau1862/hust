import { Outlet } from "react-router-dom";
import layoutStyle from "../styles/layout/Layout.module.css";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import Footer from "../components/layout/Footer";

export default function Layout() {
  return (
    <div className={layoutStyle.layout}>
      <div className={layoutStyle.header}>
        <Header />
      </div>
      <div className={layoutStyle.container}>
        <div className={layoutStyle.sidebar}>
          <Sidebar />
        </div>
        <div className={layoutStyle.content}>
          <Outlet />
          <Footer />
          <div>fsdf</div>
          <div>fsdf</div>
          <div>fsdf</div>
          <div>fsdf</div>
          <div>fsdf</div>
          <div>fsdf</div>
          <div>fsdf</div>
          <div>fsdf</div>
          <div>fsdf</div>
          <div>fsdf</div>
          <div>fsdf</div>
          <div>fsdf</div>
          <div>fsdf</div>
          <div>fsdf</div>
          <div>fsdf</div>
          <div>fsdf</div>
          <div>fsdf</div>
          <div>fsdf</div>
          <div>fsdf</div>
          <div>fsdf</div>
          <div>fsdf</div>
          <div>fsdf</div>
          <div>fsdf</div>
          <div>fsdf</div>
          <div>fsdf</div>
          <div>fsdf</div>
          <div>fsdf</div>
          <div>fsdf</div>
          <div>fsdf</div>
          <div>fsdf</div>
          <div>fsdf</div>
          <div>fsdf</div>
          <div>fsdf</div>
          <div>fsdf</div>
          <div>fsdf</div>
          <div>fsdf</div>
          <div>fsdf</div>
          <div>fsdf</div>
          <div>fsdf</div>
          <div>fsdf</div>
          <div>fsdf</div>
          <div>fsdf</div>
          <div>fsdf</div>
          <div>fsdf</div>
          <div>fsdf</div>
          <div>fsdf</div>
          <div>fsdf</div>
          <div>fsdf</div>
          <div>fsdf</div>
          <div>fsdf</div>
        </div>
      </div>
    </div>
  );
}