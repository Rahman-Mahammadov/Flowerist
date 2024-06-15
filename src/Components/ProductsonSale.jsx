import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import src from "/images/flower1.png";
import { FlowerCard } from "../Components";

const ProductsOnSale = () => {
  return (
    <>
      <h2 className="font-montserrat text-xl font-bold text-center my-20">
        Special Offer
      </h2>
      <div className="w-full max-container padding-x">
        <Swiper
          className="flex flex-wrap max-container justify-between"
          slidesPerView={3}
          spaceBetween={10}
          
          navigation={false}
          modules={[Pagination, Navigation, Autoplay]}
        >
          <SwiperSlide>
            <FlowerCard
              src={src}
              desc={"Milana (bouquet with garden roses)"}
              price={"150"}
              width={"w-full"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <FlowerCard
              src={src}
              desc={"Milana (bouquet with garden roses)"}
              price={"150"}
              width={"w-full"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <FlowerCard
              src={src}
              desc={"Milana (bouquet with garden roses)"}
              price={"150"}
              width={"w-full"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <FlowerCard
              src={src}
              desc={"Milana (bouquet with garden roses)"}
              price={"150"}
              width={"w-full"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <FlowerCard
              src={src}
              desc={"Milana (bouquet with garden roses)"}
              price={"150"}
              width={"w-full"}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default ProductsOnSale;
