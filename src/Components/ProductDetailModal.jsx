/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import cards from "/images/image 13.png";
import { Button } from "../Components";
import { cartClicked } from "../app/cartClickSlicer";
import { getUser } from "./Auth/login";
import {
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalHeader,
  TEModalBody,
} from "tw-elements-react";
import { instance, instance2 } from "../Api";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { sizes } from "../constants";

export default function VerticalyCentered({ show, setShow, id }) {
  const [singleFlower, setSingleFlower] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    const getSingleProd = async () => {
      const {
        data: { data },
      } = await instance.get(`/flowers/${id}?populate=*`);
      setSingleFlower(data);
    };
    getSingleProd();
  }, []);

  console.log(size);

  const handleCartClick = async () => {
    const userId = getUser()?.user.id;
    if (userId) {
      const {
        data: { data },
      } = await instance.get("/cart-products?populate=*");

      const inBasket = data.some((prod) => {
        console.log(prod.attributes?.size);
        console.log(size);
        return (
          prod.attributes?.flower?.data[0]?.id == singleFlower?.id &&
          prod?.attributes?.user?.data[0]?.id == userId &&
          prod.attributes?.size === size
        );
      });

      if (!inBasket) {
        const res = await instance2.post(
          "/cart-products",
          JSON.stringify({
            data: {
              user: userId,
              flower: singleFlower?.id,
              size: size,
              quantity: quantity,
            },
          })
        );
      } else {
        const {
          data: { data },
        } = await instance.get(
          `/cart-products?populate[user][populate]=*&populate[flower][populate]=*&filters[user]=${userId}&filters[flower]=${singleFlower.id}&filters[size]=${size}`
        );

        const res = await instance2.put(
          `/cart-products/${data[0].id}`,
          JSON.stringify({
            data: {
              quantity: quantity + data[0].attributes.quantity,
            },
          })
        );
      }

      toast.success("Basket refreshed", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      dispatch(cartClicked());
    } else {
      toast.error("Log in or sign up to order flowers");
    }
  };

  return (
    <>
      <TEModal show={show} setShow={setShow}>
        <TEModalDialog size="sm">
          <TEModalContent>
            <TEModalHeader>
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                onClick={() => setShow(!show)}
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </TEModalHeader>

            <TEModalBody>
              <div className="flex flex-col items-center  justify-center">
                <div className="flex flex-col items-start">
                  <div>
                    <img
                      src={`${import.meta.env.VITE_API_UPLOAD_IMG}${
                        singleFlower?.attributes?.img.data[0]?.attributes?.url
                      }`}
                      width={330}
                      className="rounded-md"
                    />
                  </div>

                  <div className="text-primary font-montserrat text-[16px]">
                    <p className="my-3">{singleFlower?.attributes?.name}</p>

                    <p className="font-bold mt-3">
                      ${singleFlower?.attributes?.price}
                    </p>

                    <p className="text-[12px] mt-2">
                      <u>Shipping</u> calculated at checkout.
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-around gap-2 mt-4 items-start">
                      <span className="text-[15px] font-montserrat">Size</span>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {sizes.map((s) => {
                          return (
                            <>
                              <button
                                onClick={() => {
                                  setSize(s);
                                }}
                                className="px-1 text-center  border-primary border-[1px] rounded-md w-[31%]  cursor-pointer focus:bg-primary focus:text-white"
                              >
                                <p>{s}</p>
                              </button>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-5 w-full mt-7">
                    <div className="start-0 flex flex-col justify-between h-full gap-3">
                      <p className="font-montserrat text-sm ">Quantity</p>
                      <div className="flex justify-between items-center font-montserrat text-sm border-[1px] border-primary px-2 rounded-md">
                        <button
                          className="text-xl hover:scale-110"
                          onClick={() => setQuantity(quantity - 1)}
                        >
                          -
                        </button>
                        <span>{quantity}</span>
                        <button
                          className="text-xl hover:scale-110"
                          onClick={() => setQuantity(quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <Button
                      px={"px-3"}
                      py={"py-2.5"}
                      label={"Add to cart"}
                      font={"text-[18px]"}
                      color={"text-[#fff]"}
                      bg={"bg-primary"}
                      onClick={handleCartClick}
                    />
                  </div>

                  <p className="font-montserrat text-[11px] my-4">
                    Pickup available at <strong>Hollywood blvd</strong>. Usually
                    ready in tomorrow
                  </p>

                  <a href="" className="mt-3">
                    <img src={cards} alt="cards" />
                  </a>
                </div>
              </div>
            </TEModalBody>
          </TEModalContent>
        </TEModalDialog>
      </TEModal>
    </>
  );
}
