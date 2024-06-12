/* eslint-disable react/prop-types */

const WhyUs = ({ heading, icon1, icon2, text }) => {
  return (
    <section className="lg:w-[32%] max-sm:w-[100%] md:w-[49%] px-2 pb-6 shadow-[2px_4px_5px_0_rgba(0,0,0,0.25)]  hover:-translate-y-6 transition-all">
      <div className="flex justify-between items-center font-bold text-primary my-10">
        <h2 className="font-montserrat text-lg">{heading}</h2>
        <div className="relative">
          <img
            src={icon1}
            alt=""
            width={40}
            height={40}
            className="absolute -top-3 right-6"
          />
          <img src={icon2} alt="" width={50} height={50} />
        </div>
      </div>
      <p className="font-montserrat text-sm">{text}</p>
    </section>
  );
};

export default WhyUs;
