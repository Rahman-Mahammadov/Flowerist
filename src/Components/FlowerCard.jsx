/* eslint-disable react/prop-types */
import Button from "./Button";
import VerticalyCentered from "../Components/ProductDetailModal";
import { useState } from "react";

const FlowerCard = ({ src, desc, price, width = null, id }) => {
  const [showVerticalyCenteredModal, setShowVerticalyCenteredModal] =
    useState(false);
  return (
    <>
      <div
        onClick={() => {
          setShowVerticalyCenteredModal(true);
        }}
        className={
          !width &&
          "lg:w-[32%] max-sm:w-[49%] sm:w-[49%] max-[577px]:w-[90%] m-auto mb-8 shadow-[4px_4px_8px_0_rgba(0,0,0,0.25)] rounded-lg hover:-translate-y-6 transition-all"
        }
      >
        <div className="h-[70%]">
          <img src={src} alt="" className="w-full h-full" />
        </div>

        <div
          id="details"
          className="flex justify-between items-center px-2 max-sm:flex-col max-sm:items-start max-sm:justify-between"
        >
          <div className="flex flex-col justify-start">
            <p className="font-montserrat max-lg:text-md text-primary max-md:text-[13px] mt-2 ">
              {desc}
            </p>
            <span className="font-montserrat text-md text-primary font-bold max-sm:text-sm">
              ${price}
            </span>
          </div>

          <div className="max-sm:mb-2">
            
            <Button
              bg={"bg-primary"}
              font={"text-xs"}
              py={"py-2"}
              px={"px-2"}
              my={"my-4"}
              label={"Add to cart"}
              color={"text-white"}
            />
          </div>
        </div>
      </div>

      <VerticalyCentered
        show={showVerticalyCenteredModal}
        setShow={setShowVerticalyCenteredModal}
        id={id}
      />
    </>
  );
};

export default FlowerCard;
