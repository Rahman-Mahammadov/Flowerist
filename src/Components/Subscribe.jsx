import { toast } from "react-toastify";
import arrowRight from "../assets/images/arrowRight.png";

const Subscribe = () => {
  return (
    <section className="bg-[#ffd1d7] max-container py-9 my-36 padding-x">
      <div className="flex flex-col items-center gap-4 justify-center">
        <h2 className="text-xl font-montserrat text-primary font-bold">
          Subscribe to our emails
        </h2>
        <p className="font-montserrat text-sm font-normal text-primary text-center">
          Be the first to know about new collections and exclusive offers.
        </p>
        <div className="relative">
          <input
            type="email"
            placeholder="Subscribe to our emails"
            className="min-w-80 px-4 py-2 rounded-md outline-none relative"
          />
          <button onClick={()=> toast("Successfully subscribed")}>
            
            <img
              src={arrowRight}
              width={12}
              height={12}
              className="absolute right-2 top-[10px] cursor-pointer"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
