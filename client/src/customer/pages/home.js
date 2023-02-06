import homeStyle from "../styles/home/Home.module.css";
import Sidebar from "../components/home/Sidebar";
import Slider from "../components/home/Slider";
import Content from "../components/home/Content";

export default function Home() {
  return <div className={homeStyle.home}>
    <div className={homeStyle.sidebarContainer}>
      <Sidebar />
    </div>
    <div className={homeStyle.mainContainer}>
      <div className={homeStyle.sliderContainer}>
        <Slider />
      </div>
      <div className={homeStyle.contentContainer}>
        <Content />
      </div>
    </div>
  </div>;
}
