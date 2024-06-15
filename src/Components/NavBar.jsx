import hamburger from "/images/hamburger.png";
import logo from "/images/LOGO.png";
import search1 from "/images/Search 1.png";
import cart from "/images/cart.png";
import closeButton from "/images/Group 408.png";
import { SearchModal, SignIn, Login, scrollToSection } from "../Components";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { instance } from "../Api";
import { getUser } from "./Auth/login";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [loggedOut, setLoggedOut] = useState(false);
  const [show, setShow] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [totalCart, setTotalCart] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const cartClicked = useSelector((state) => state.cartClick.value);
  const [menuClick, setMenuClick] = useState(false);
  const navigate = useNavigate();

  const closeHamburger = () => {
    setMenuClick(!menuClick);
  };

  useEffect(() => {
    const getBasketAmount = async () => {
      const userId = await getUser().user.id;

      const {
        data: { data },
      } = await instance.get(
        `/cart-products?populate[user][populate]=*&populate[flower][populate]=*&filters[user]=${userId}`
      );

      setCartProducts(data);
    };

    getBasketAmount();
  }, [cartClicked]);

  useEffect(() => {
    const total = cartProducts.reduce((acc, item) => {
      return (acc +=
        item?.attributes?.quantity *
        item?.attributes?.flower?.data[0]?.attributes?.price);
    }, 0);

    setTotalCart(total);

    if (!menuClick) {
      document.body.style.overflowX = "hidden";
    } else {
      document.body.style.overflowX = "auto";
    }
  }, [cartProducts]);

  return (
    <>
      <nav
        className={`bg-white flex justify-between items-center max-container padding-x py-4 sticky top-0 left-0 z-40`}
        id="navbar"
      >
        <div>
          <img
            src={hamburger}
            width={40}
            height={40}
            className="cursor-pointer"
            onClick={() => setMenuClick(!menuClick)}
          />
        </div>

        <div className="max-lg:hidden ml-16">
          <Link to="/">
            <img src={logo} width={150} height={350} alt="hamburger" />
          </Link>
        </div>

        <div
          id="cart"
          className="flex justify-center items-center gap-7 max-sm:gap-1"
        >
          <div className="flex justify-end gap-4 font-montserrat text-md text-primary max-sm:hidden">
            {!userData ? (
              <>
                <p
                  className="cursor-pointer"
                  onClick={() => setShowLogin(!showLogin)}
                >
                  Log in
                </p>
                <span>|</span>
                <p className="cursor-pointer" onClick={() => setShow(!show)}>
                  Sign up
                </p>
              </>
            ) : (
              <>
                <p
                  className="cursor-pointer"
                  onClick={() => {
                    localStorage.removeItem("userData");
                    setLoggedOut(!loggedOut);
                  }}
                >
                  Log out
                </p>
              </>
            )}
          </div>
          <div
            className=" cursor-pointer w-13 shadow-[2px_2px_4px_0_rgba(0,0,0,0.25)] rounded-md px-5 py-3"
            onClick={() => setShowSearchModal(!showSearchModal)}
          >
            <img src={search1} alt="search" className="w-full h-full" />
          </div>

          <div
            onClick={() => navigate("/cart")}
            className="flex justify-center items-center gap-4 shadow-[2px_2px_4px_0_rgba(0,0,0,0.25)] px-4 py-2.5 rounded-md"
          >
            <img width={17} src={cart} alt="" />
            <span className="text-primary font-montserrat">${totalCart}</span>
          </div>
        </div>

        {/* NAVIGATION */}
        <div
          className={`absolute top-0 right-0 h-screen bg-white flex flex-col justify-start  pt-20 w-1/4 px-7 max-md:w-1/2 z-10 opacity-100 transition-all ${
            !menuClick && `translate-x-full`
          }`}
        >
          <div
            className="flex justify-end cursor-pointer"
            onClick={closeHamburger}
          >
            <img
              src={closeButton}
              alt="close"
              height={26}
              width={25}
              className="my-6"
            />
          </div>
          <hr />
          <ul className="flex flex-col justify-between gap-6 font-montserrat text-lg my-7 items-end">
            <Link
              className="hover:scale-125 transition-all"
              onClick={() => {
                setShowSearchModal(!showSearchModal);
                closeHamburger();
              }}
            >
              Search
            </Link>
            <Link
              to="/"
              preventScrollReset={true}
              onClick={closeHamburger}
              className="hover:scale-125 transition-all"
            >
              Home
            </Link>

            <Link
              className="hover:scale-125 transition-all"
              onClick={() => {
                scrollToSection("list");
                closeHamburger;
              }}
            >
              Catalog
            </Link>
            <Link
              className="hover:scale-125 transition-all"
              to="/"
              onClick={() => {
                scrollToSection("collections");
                closeHamburger();
              }}
            >
              Collections
            </Link>
            <Link
              className="hover:scale-125 transition-all"
              onClick={() => {
                scrollToSection("address");
                closeHamburger();
              }}
            >
              Contacts
            </Link>
            {!userData ? (
              <>
                <p
                  className="cursor-pointer hover:scale-125 transition-all"
                  onClick={() => setShowLogin(!showLogin)}
                >
                  Log in
                </p>

                <p
                  className="cursor-pointer hover:scale-125 transition-all"
                  onClick={() => setShow(!show)}
                >
                  Sign up
                </p>
              </>
            ) : (
              <>
                <p
                  className="cursor-pointer"
                  onClick={() => {
                    localStorage.removeItem("userData");
                    setLoggedOut(!loggedOut);
                  }}
                >
                  Log out
                </p>
              </>
            )}
          </ul>
        </div>
      </nav>

      <SearchModal show={showSearchModal} setShow={setShowSearchModal} />
      <SignIn show={show} setShow={setShow} />
      <Login showLogin={showLogin} setShowLogin={setShowLogin} />
    </>
  );
};

export default NavBar;
