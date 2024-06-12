import Blog from "./Blog";
import blog5 from "../assets/images/blog5.jpg";
import blog6 from "../assets/images/blog6.webp";
import blog7 from "../assets/images/blog7.jpg";
import blog8 from "../assets/images/blog8.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";

const BlogList = () => {
  return (
    <div className="px-[15%] bg-coral-red py-8">
      <Swiper
        className="flex flex-wrap max-container justify-between"
        slidesPerView={3}
        spaceBetween={10}
        loop={true}
        navigation={false}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{ delay: 1500 }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          650: {
            slidesPerView: 2,
          },
          1050: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <Blog
            img={blog7}
            heading={"In amet, mollis"}
            text={
              "Ipsum dui sit non ipsum leo, dictumst. Dictumst. Et pulvinar leo, id ut. Eget mattis pellentesque mattis dolor adipiscing accumsan elit. Non libero, libero, amet tortor, velit ex."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Blog
            img={blog8}
            heading={"In amet, mollis"}
            text={
              "Ipsum dui sit non ipsum leo, dictumst. Dictumst. Et pulvinar leo, id ut. Eget mattis pellentesque mattis dolor adipiscing accumsan elit. Non libero, libero, amet tortor, velit ex."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Blog
            img={blog6}
            heading={"In amet, mollis"}
            text={
              "Ipsum dui sit non ipsum leo, dictumst. Dictumst. Et pulvinar leo, id ut. Eget mattis pellentesque mattis dolor adipiscing accumsan elit. Non libero, libero, amet tortor, velit ex."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Blog
            img={blog5}
            heading={"In amet, mollis"}
            text={
              "Ipsum dui sit non ipsum leo, dictumst. Dictumst. Et pulvinar leo, id ut. Eget mattis pellentesque mattis dolor adipiscing accumsan elit. Non libero, libero, amet tortor, velit ex."
            }
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BlogList;
