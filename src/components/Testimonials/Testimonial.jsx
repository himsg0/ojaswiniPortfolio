import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import PressImage1 from "../../img/press1.png";
import PressImage2 from "../../img/press2.png";
import PressImage3 from "../../img/press3.png";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: PressImage1,
      review:
        "https://www.adgully.com/new-tv-series-karmbhoomi--change-has-arrived-68309.html",
    },
    {
      img: PressImage2,
      review:
        "https://timesofindia.indiatimes.com/entertainment/events/noida/chekhov-ki-duniya-comes-to-noida/articleshow/64258182.cms",
    },
    {
      img: PressImage3,
      review:
        "https://timesofindia.indiatimes.com/entertainment/events/noida/students-play-extras-at-tv-shoot-in-greater-noida-college-/articleshow/54611828.cms",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Here’s what the </span>
        <span> Press is saying… </span>
        <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            <a href={client.review} target="_blank">
              <img src={client.img} alt="" />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
