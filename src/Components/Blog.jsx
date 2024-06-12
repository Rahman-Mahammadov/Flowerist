/* eslint-disable react/prop-types */

const Blog = ({ img, heading, text }) => {
  return (
    <div className=" shadow-[4px_4px_8px_0_rgba(0,0,0,0.25)] rounded-md hover:-translate-y-6 transition-all cursor-pointer">
      <div className="w-full h-[230px]">
        <img src={img} alt="blog" className="w-full h-full object-cover" />
      </div>

      <div className="bg-white px-3">
        <h2 className="font-montserrat text-xl text-primary font-semibold py-4">
          {heading}
        </h2>
        <p className="font-montserrat text-sm text-primary font-normal pb-10">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Blog;
