/* eslint-disable no-unused-vars */
import { BlogList, ProductsOnSale } from "../Components";
import { cartClicked } from "../app/cartClickSlicer";
import trash from "../assets/images/Group 379@2x.png";
import { toast } from "react-toastify";
import { Button } from "../Components";
import { useEffect, useState } from "react";
import { instance, instance2 } from "../Api";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { getUser } from "../Components/Auth/login";
import { totalCartAmount } from "../app/basketSlicer";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [rerender, setRerender] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [totalAmount, setTotalAmount] = useState();
  useEffect(() => {
    async function getProducts() {
      const userId = await getUser().user.id;

      const {
        data: { data },
      } = await instance.get(
        `/cart-products?populate[user][populate]=*&populate[flower][populate]=*&filters[user]=${userId}`
      );

      console.log(data);
      setCartProducts(data);
    }

    getProducts();
  }, [rerender]);

  useEffect(() => {
    const total = cartProducts.reduce((acc, item) => {
      return (acc +=
        item?.attributes?.quantity *
        item?.attributes?.flower?.data[0]?.attributes?.price);
    }, 0);

    setTotalAmount(total);
  }, [cartProducts]);

  dispatch(totalCartAmount(totalAmount));

  const toastAndRender = () => {
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

    setRerender(!rerender);
    dispatch(cartClicked());
  };

  const handleIncrement = async (id, qty) => {
    const res = await instance2.put(
      `/cart-products/${id}`,
      JSON.stringify({
        data: {
          quantity: qty + 1,
        },
      })
    );
    console.log("salamlar");
    toastAndRender();
  };

  const handleDecrement = async (id, qty) => {
    const res = await instance2.put(
      `/cart-products/${id}`,
      JSON.stringify({
        data: {
          quantity: qty - 1,
        },
      })
    );

    toastAndRender();
  };

  const handleDeletion = async (id) => {
    const data = await instance2.delete(`/cart-products/${id}`);
    console.log(data);
    toastAndRender();
  };

  const handlePayment = () => {
    cartProducts.forEach(async (prod) => {
      const data = await instance2.delete(`/cart-products/${prod.id}`);

      setTimeout(() => {
        navigate("/order");
      }, 2000);
    });
  };

  if (cartProducts.length > 0) {
    return (
      <>
        <div className="max-container">
          <div className="flex justify-between padding-x mt-10">
            <p className="font-montserrat text-[18px] text-primary max-sm:text-xs">
              Home / <span>Cart</span>
            </p>

            <a className="font-montserrat text-[18px] text-primary max-sm:hidden">
              <u>Continue Shopping</u>
            </a>
          </div>

          {/* Cart Products' List */}

          <div id="container" className="mt-16">
            {/* Single Product */}

            {cartProducts.map((product) => {
              return (
                <>
                  <div>
                    <hr />
                    <div className="flex  padding-x items-center gap-6 my-4 ">
                      <img
                        src={`${import.meta.env.VITE_API_UPLOAD_IMG}${
                          product?.attributes.flower.data[0].attributes.img
                            .data[0].attributes.url
                        }`}
                        width={180}
                        alt="flower"
                        className="rounded-md min-w-28 h-full"
                      />

                      <div className="flex justify-between items-center w-full max-md:flex-col max-md:items-start">
                        <div>
                          <h3 className="font-montserrat text-sm text-primary font-normal max-sm:text-xs">
                            {product?.attributes.flower.data[0].attributes.name}
                          </h3>
                          <p className="font-montserrat text-[17px] text-primary font-bold my-3 max-sm:text-sm">
                            ${" "}
                            {
                              product?.attributes.flower.data[0].attributes
                                .price
                            }
                          </p>

                          <span className="font-montserrat text-xs text-primary font-normal">
                            Size: {product?.attributes.size}
                          </span>
                        </div>
                        <div className="flex justify-end gap-14 items-center">
                          <div className="flex gap-6">
                            <div className="flex justify-between items-center font-montserrat text-sm border-[1px] border-primary px-2 rounded-md gap-4">
                              <button
                                className="text-xl hover:scale-110"
                                onClick={() => {
                                  handleDecrement(
                                    product.id,
                                    product?.attributes.quantity
                                  );
                                }}
                              >
                                -
                              </button>
                              <span>{product?.attributes.quantity}</span>
                              <button
                                className="text-xl hover:scale-110"
                                onClick={() => {
                                  handleIncrement(
                                    product.id,
                                    product?.attributes.quantity
                                  );
                                }}
                              >
                                +
                              </button>
                            </div>

                            <img
                              src={trash}
                              className="hover:scale-110"
                              width={25}
                              alt=""
                              onClick={() => handleDeletion(product?.id)}
                            />
                          </div>

                          <p className="font-montserrat text-[17px] text-primary font-bold max-md:hidden">
                            $
                            {product?.attributes.quantity *
                              product?.attributes.flower.data[0].attributes
                                .price}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>

          {/* Inputs */}
          <div className="flex items-end justify-between padding-x max-md:flex-col max-md:items-start">
            <div className="font-montserrat text-[16px] text-primary mt-20 w-1/2 max-md:w-full">
              <h2 className="my-4">Special instructions for the seller</h2>

              <textarea
                name=""
                id=""
                className="border-[1px] border-primary w-full p-4 h-36 text-sm outline-none max-sm:w-full"
                placeholder="Add you instructions for the seller here"
              ></textarea>

              <h2 className="my-4">Special instructions for the seller</h2>

              <textarea
                name=""
                id=""
                className="border-[1px] border-primary w-full p-4 h-36 text-sm outline-none  max-sm:w-full"
                placeholder="Gift message"
              ></textarea>
            </div>

            <div className="max-md:w-full flex flex-col items-end mt-14">
              <div className="flex justify-between mb-10 w-full">
                <p className="font-montserrat text-primary text-sm">Subtotal</p>

                <span className="font-montserrat text-primary text-lg font-bold">
                  ${totalAmount}
                </span>
              </div>

              <hr className="text-primary  mb-4 w-full font-bold md:hidden" />

              <Button
                color={"text-white"}
                bg={"bg-primary"}
                label={"View now"}
                px={"px-8"}
                py={"py-2.5"}
                font={"text-xl"}
                onClick={handlePayment}
              />
            </div>
          </div>

          <div className="my-20">
            <BlogList />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h2 className="font-montserrat text-2xl text-primary text-center my-40">
          Cart is empty
        </h2>
      </>
    );
  }
};

export default Cart;
