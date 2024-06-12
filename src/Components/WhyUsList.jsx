import WhyUs from "./WhyUs";
import icon1 from "../assets/images/whyus1.png";
import icon2 from "../assets/images/whyus2.png";

const WhyUsList = () => {
  return (
    <>
      <h2 className="text-center font-montserrat font-bold mt-20 ">WHY CHOOSE US?</h2>

      <section className="flex flex-wrap px-[15%] max-md:padding-x justify-between mt-24">
        <WhyUs
          heading={"Extensive сhoice"}
          text={
            "We have a huge selection of the most beautiful flowers in town. Our flower shop stocks all types of flowers, including roses, tulips, lilies, and more!"
          }
          icon1={icon1}
          icon2={icon2}
        />
        <WhyUs
          heading={"Extensive сhoice"}
          text={
            "We have a huge selection of the most beautiful flowers in town. Our flower shop stocks all types of flowers, including roses, tulips, lilies, and more!"
          }
          icon1={icon1}
          icon2={icon2}
        />
        <WhyUs
          heading={"Extensive сhoice"}
          text={
            "We have a huge selection of the most beautiful flowers in town. Our flower shop stocks all types of flowers, including roses, tulips, lilies, and more!"
          }
          icon1={icon1}
          icon2={icon2}
        />
      </section>
    </>
  );
};

export default WhyUsList;
