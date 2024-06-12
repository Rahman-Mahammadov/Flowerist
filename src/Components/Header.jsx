import { Button, scrollToSection } from "../Components/index";

const Header = () => {
  return (
    <>
      <section className="max-container w-full bg-hero h-[79vh] bg-cover bg-center flex flex-col justify-center gap-4 items-center bg-fixed">
        <h2 className="text-center font-montserrat text-[70px] leading-tight text-white font-bold max-md:text-[50px] max-sm:text-[35px]">
          CHOOSE FLOWERS <br /> FOR ANY OCCASION
        </h2>
        <p className="text-center font-montserrat leading-tight text-white font-normal text-2xl max-md:text-xl max-sm:text-[18px]">
          Our goal is to provide the highest quality <br /> and fresh flower
          delivery in Los Angeles.
        </p>

        <Button
          color={"text-primary"}
          bg={"bg-white"}
          label={"Wiev now"}
          px={"px-10"}
          py={"py-2.5"}
          font={"text-2xl"}
          onClick={() => {
            scrollToSection("list");
          }}
        />
      </section>
    </>
  );
};

export default Header;
