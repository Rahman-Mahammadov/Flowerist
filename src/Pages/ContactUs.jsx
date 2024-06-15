import { Address, Subscribe, Footer} from "../Components";
import polygon from "/images/Polygon 4.png";

const ContactUs = () => {
  return (
    <div>
      <p className="font-montserrat padding-x text-sm text-primary max-sm:text-xs my-16">
        Home / <span>Cart</span>
      </p>

      <h2 className="font-montserrat text-2xl text-center text-primary font-bold">
        Contacts
      </h2>

      <Address />

      <h2 className="font-montserrat text-2xl text-center text-primary font-bold my-24">
        HOW TO GET TO US?
      </h2>
      <div className="relative max-sm:w-[80%] max-md:w-[60%] md:w-1/2 lg:w-1/3 my-10 mx-auto bg-coral-red h-[60vh]">
        <img
          src={polygon}
          width={70}
          className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 cursor-pointer"
        />
      </div>

      <Subscribe/>

      <Footer/>
    </div>
  );
};

export default ContactUs;
