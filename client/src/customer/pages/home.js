import homeStyle from "../styles/home/Home.module.css";
import Sidebar from "../components/home/Sidebar";
import Slider from "../components/home/Slider";
import Content from "../components/home/Content";

export default function Home() {
  return <div className={homeStyle.home}>
    <div className={homeStyle.sidebar}>
      <Sidebar />
    </div>
    <div className={homeStyle.main}>
      <div className={homeStyle.slider}>
        <Slider />
      </div>
      <div className={homeStyle.content}>
        <Content />
      </div>
    </div>
  </div>;
}
