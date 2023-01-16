import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import sliderStyle from "../../styles/home/Slider.module.css";
import lightsWideImage from "../../images/img_lights_wide.jpg";
import mountainsWideImage from "../../images/img_mountains_wide.jpg";
import natureWideImage from "../../images/img_nature_wide.jpg";
import snowWideImage from "../../images/img_snow_wide.jpg";

export default function Slider() {
  const [imageIndex, setImageIndex] = useState(0);
  const sliderImages = useMemo(() => [lightsWideImage, mountainsWideImage, natureWideImage, snowWideImage], []);
  const length = sliderImages.length;
  const sliderElement = useRef();
  let sliderTimeout = useRef({});

  const previousSliderImage = useCallback(() => {
    const newIndex = imageIndex > 0 ? imageIndex - 1 : length - 1;
    clearTimeout(sliderTimeout.current);
    setImageIndex(newIndex);
  }, [imageIndex, length, sliderTimeout]);

  const nextSliderImage = useCallback(() => {
    const newIndex = imageIndex < length - 1 ? imageIndex + 1 : 0;
    clearTimeout(sliderTimeout.current);
    setImageIndex(newIndex);
  }, [imageIndex, length, sliderTimeout]);

  const showSliderImage = useCallback(() => {
    console.log("Hello");
  }, []);

  useEffect(() => {
    sliderElement.current.style.backgroundImage = `url(${sliderImages[imageIndex]})`;
    sliderTimeout.current = setTimeout(() => {
      nextSliderImage();
    }, 2000);
  }, [imageIndex, sliderImages, nextSliderImage, sliderTimeout]);

  return <div className={sliderStyle.slider} ref={sliderElement}>
    <button className={sliderStyle.previousButton} onClick={previousSliderImage}>Previous</button>
    <button className={sliderStyle.nextButton} onClick={nextSliderImage}>Next</button>
    <button className={sliderStyle.showButton} onClick={showSliderImage}>Show</button>
  </div>;
}