import "./styles.css";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import SwiperCore, { Keyboard, Mousewheel } from "swiper"; // swiper 키보드 모듈
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import Page from "./components/Page";

export default function App() {
  // swiper 제어 모듈
  SwiperCore.use([Keyboard, Mousewheel]);
  const swiperRef = useRef();

  const toSlide = (num) => {
    console.log("go to slide", num);
    swiperRef.current.swiper.slideTo(num);
  };

  return (
    <>
      <nav>
        <a
          href="#titlePage"
          onClick={(e) => {
            e.preventDefault();
            toSlide(0);
          }}
        >
          title
        </a>
        <a
          href="#aboutPage"
          onClick={(e) => {
            e.preventDefault();
            toSlide(1);
          }}
        >
          about
        </a>
        <a
          href="#worksPage"
          onClick={(e) => {
            e.preventDefault();
            toSlide(2);
          }}
        >
          works
        </a>
      </nav>
      <Swiper
        ref={swiperRef}
        direction="vertical"
        mousewheel
        scrollbar={{ draggable: true }}
        keyboard={{ enabled: true }}
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        // 현재 슬라이더 위치
        onSlideChange={(swiper) => console.log(swiper.activeIndex)}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Page title="title" pageNum={0} />
        </SwiperSlide>
        <SwiperSlide>
          <Page title="about" pageNum={1} />
        </SwiperSlide>
        <SwiperSlide>
          <Page title="works" pageNum={2} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
