import React from "react";
import Slider from "react-slick";
import s from './Slider.module.css';

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider className={s.skiderr} {...settings}>
      <div>
        <img className={s.kartinka} src="https://trinityrental.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ftrinityrental-e51d5.appspot.com%2F0_lambo_urus_7e99c2f6b1%2F0_lambo_urus_7e99c2f6b1.jpeg&w=1920&q=75"></img>
      </div>
      <div>
      <img className={s.kartinka} src="https://trinityrental.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ftrinityrental-e51d5.appspot.com%2Fmain_dc8d82ab64%2Fmain_dc8d82ab64.jpg&w=1920&q=75"></img>
      </div>
      <div>
      <img className={s.kartinka} src="https://trinityrental.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ftrinityrental-e51d5.appspot.com%2F0_lambo_urus_7e99c2f6b1%2F0_lambo_urus_7e99c2f6b1.jpeg&w=1920&q=75"></img>
      </div>
      <div>
      <img className={s.kartinka} src="https://trinityrental.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ftrinityrental-e51d5.appspot.com%2Fmain_dc8d82ab64%2Fmain_dc8d82ab64.jpg&w=1920&q=75"></img>
      </div>
      <div>
      <img className={s.kartinka} src="https://trinityrental.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ftrinityrental-e51d5.appspot.com%2F0_lambo_urus_7e99c2f6b1%2F0_lambo_urus_7e99c2f6b1.jpeg&w=1920&q=75"></img>
      </div>
      <div>
      <img className={s.kartinka} src="https://trinityrental.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ftrinityrental-e51d5.appspot.com%2Fmain_dc8d82ab64%2Fmain_dc8d82ab64.jpg&w=1920&q=75"></img>
      </div>
    </Slider>
  );
}