import homeStyle from "../styles/home/Home.module.css";
import Content from "../components/home/Content";
import Sidebar from "../components/home/Sidebar";

export default function Home() {
  return <div className={homeStyle.home}>
    <div className={homeStyle.sidebar}>
      <Sidebar />
    </div>
    <div className={homeStyle.content}>
      <Content />
    </div>
  </div>;
}
