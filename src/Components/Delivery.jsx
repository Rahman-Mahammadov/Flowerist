import delivery from "../assets/images/Delivery.png";
import basket from "../assets/images/basket.png";

const Delivery = () => {
  return (
    <section className="max-container flex w-full items-center py-8 padding-x justify-between max-md:flex-col max-md:gap-7  hover:shadow-[0_4px_6px_0_rgba(0,0,0,0.25)]">
      <div className="flex justify-between gap-4 max-md:w-full">
        <div>
          <h2 className="font-montserrat font-bold text-xl max-lg:text-base max-md:text-sm whitespace-nowrap">
            Need flowers delivered today?
          </h2>
          <p className="font-montserrat text-sm max-lg:text-[12px]">
            Call or chat us
          </p>
        </div>

        <img src={delivery} width={60} />
      </div>

      <di className="flex justify-between gap-4 max-md:w-full">
        <div>
          <h2 className=" font-bold font-montserrat text-xl max-lg:text-base max-md:text-sm whitespace-nowrap">
            Free delivery within 4 miles
          </h2>
          <p className="font-montserrat text-sm max-lg:text-[12px]">
            No minimum order
          </p>
        </div>

        <img src={basket} width={60} alt="" />
      </di>
    </section>
  );
};

export default Delivery;
