import { Link } from "react-router-dom";

const Collection = ({ src, text, id }) => {
 
  return (
    <Link to={`/catalog/collection/${id}`}
      className=" md:w-[32%]  max-md:w-[48%] mb-6 relative group"
    >
      <div className="font-montserrat text-xl text-center p-5 text-white z-10  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:top-5 transition-all">
        {text.toUpperCase()}
      </div>
      <img src={src} alt="flower" className="w-full" />

      <div className="absolute top-0 left-0 right-0 w-full h-full bg-[#898989]  opacity-40 flex justify-center items-center group-hover:h-0 transition-all"></div>
    </Link>
  );
};

export default Collection;
