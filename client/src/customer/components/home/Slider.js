import { useEffect, useRef, useState } from "react";
import sliderStyle from "../../styles/home/Slider.module.css";
import lightsWideImage from "../../images/img_lights_wide.jpg";
import mountainsWideImage from "../../images/img_mountains_wide.jpg";
import natureWideImage from "../../images/img_nature_wide.jpg";
import snowWideImage from "../../images/img_snow_wide.jpg";

const sliderImages = [lightsWideImage, mountainsWideImage, natureWideImage, snowWideImage];
const length = sliderImages.length;

export default function Slider() {
  const [imageIndex, setImageIndex] = useState(0);
  const sliderElement = useRef();
  let sliderTimeout = useRef({});

  const previousSliderImage = function () {
    const newIndex = imageIndex > 0 ? imageIndex - 1 : length - 1;
    clearTimeout(sliderTimeout.current);
    setImageIndex(newIndex);
  };

  const nextSliderImage = function () {
    const newIndex = imageIndex < length - 1 ? imageIndex + 1 : 0;
    clearTimeout(sliderTimeout.current);
    setImageIndex(newIndex);
  };

  const showSliderImage = function () {
    console.log("Hello");
  };

  useEffect(() => {
    sliderElement.current.style.backgroundImage = `url(${sliderImages[imageIndex]})`;
    sliderTimeout.current = setTimeout(() => {
      const newIndex = imageIndex < length - 1 ? imageIndex + 1 : 0;
      setImageIndex(newIndex);
    }, 2000);
  }, [imageIndex, sliderTimeout]);

  return <div className={sliderStyle.slider} ref={sliderElement}>
    <button className={sliderStyle.previousButton} onClick={previousSliderImage}>Previous</button>
    <button className={sliderStyle.nextButton} onClick={nextSliderImage}>Next</button>
    <button className={sliderStyle.showButton} onClick={showSliderImage}>Show</button>
  </div>;
}