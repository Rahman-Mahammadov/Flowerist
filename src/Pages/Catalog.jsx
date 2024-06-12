import { FlowersList, Footer } from "../Components";


const Catalog = () => {

 
  return (
    <div className="flex flex-col">
      <h2 className="font-montserrat text-center text-2xl my-20 text-primary font-bold">
        OUR CATALOG
      </h2>

      <div className="padding-x self-end mb-12">
      </div>

      <FlowersList />

      <Footer/>
    </div>
  );
};

export default Catalog;
