import logo from "../assets/images/LOGO.png";
import cards from "../assets/images/cards.png";
import social1 from "../assets/images/Vector.png";
import social2 from "../assets/images/Vector (1).png";
import social3 from "../assets/images/Vector (2).png";

const Footer = () => {
  return (
    <>
      <div className="mt-32">
        <div className="flex justify-between padding-x py-6 text-center max-sm:flex-col max-sm:gap-10 mt-7">
          <div>
            <h1 className="text-primary font-montserrat font-bold text-2xl ">
              Menu
            </h1>
            <ul className="text-primary mt-5 text-sm font-montserrat flex flex-col gap-2">
              <li>Search</li>
              <li>Home</li>
              <li>About us</li>
              <li>Catalog</li>
              <li>Collections</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="">
              <img src={logo} width={135} height={135} />
            </div>

            <ul className="text-primary mt-5 text-sm font-montserrat">
              <li>
                <p>6201 Hollywood blvd</p>
              </li>
              <li className="mb-3">
                <p>Los Angeles, California 90028</p>
              </li>
              <li>
                <p>Monday - Friday 9:00 am - 8:00 pm</p>
              </li>
              <li>
                <p>Saturday 10:00 am - 5:00 pm</p>
              </li>
              <li className="mb-3">
                <p>Sunday 10:00 am - 5:00 pm</p>
              </li>

              <li>
                <p>
                  <u>+214 772 56 74</u>
                </p>
              </li>

              <li>
                <p>
                  <u>cherryblossom@gmail.com</u>
                </p>
              </li>
            </ul>

            <div
              id="social-logos"
              className="flex justify-center gap-3 mt-3  w-full"
            >
              <img src={social1} alt="" />
              <img src={social2} alt="" />
              <img src={social3} alt="" />
            </div>
          </div>
          <div>
            <h2 className="text-primary font-montserrat font-bold text-2xl ">
              Legal Notices
            </h2>

            <ul className="text-primary mt-5 text-sm font-montserrat flex flex-col gap-2">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Refund Policy</li>
              <li>Shipping police</li>
              <li>Billing and payment</li>
            </ul>
          </div>
        </div>

        <div id="images" className="mt-7">
          <div>
            <a href="#" className="flex justify-center">
              <img src={cards} alt="cards" width={500} />
            </a>
          </div>
          <p></p>
        </div>
      </div>
    </>
  );
};

export default Footer;
