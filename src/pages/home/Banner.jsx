import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import {
  bannerImgFive,
  bannerImgFour,
  bannerImgOne,
  bannerImgThree,
  bannerImgTwo,
} from "../../assets/img";
const Banner = () => {
  return (
    <div>
      <Swiper 
        modules={[Navigation]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img src={bannerImgOne} alt="bannerImg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bannerImgTwo} alt="bannerImg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bannerImgThree} alt="bannerImg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bannerImgFour} alt="bannerImg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bannerImgFive} alt="bannerImg" />
        </SwiperSlide>
      </Swiper>
      
    </div>
  );
};

export default Banner;
