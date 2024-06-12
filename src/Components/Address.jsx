import modal from "../assets/images/modal.png";
import modal1 from "../assets/images/modal1.png";

const Address = () => {
  return (
    <section id="address"
      className="max-container w-full bg-hero  bg-cover bg-center flex
    flex-col justify-center gap-4 items-center bg-fixed mt-20 py-24 max-sm:padding-x max-sm:text-sm"
    >
      <div
        id="modal"
        className="lg:w-[32%] max-sm:w-full sm:w-1/2 md:w-[40%] bg-white rounded-md px-18 py-2 text-center flex flex-col gap-4 justify-around items-center  "
      >
        <div className="relative mt-8">
          <img src={modal1} alt="" className="absolute -top-3 left-2" />
          <img src={modal} alt="" />
        </div>
        <p className="font-montserrat  text-primary lg:text-lg">
          <strong className="lg:text-xl">6201 Hollywood blvd</strong> <br /> Los
          Angeles, California 90028 <br />{" "}
        </p>
        <p className="font-montserrat text-md text-primary mb-5 lg:text-lg">
          Monday - Friday 9:00 am - 8:00 pm <br /> Saturday 10:00 am - 5:00 pm{" "}
          <br /> Sunday 10:00 am - 5:00 pm
        </p>
      </div>
    </section>
  );
};

export default Address;
