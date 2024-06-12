import {
  Header,
  Delivery,
  FlowersList,
  CollectionsList,
  WhyUsList,
  Subscribe,
  AccordionBasicExample,
  BlogList,
  Address,
} from "../Components";

// `products?filters[name][$contains]=${input}&populate=*`

const HomePage = () => {
  return (
    <>
      <Header />
      <Delivery />

      <div id="list">
        <h2 className="font-montserrat text-center text-2xl my-20 text-primary font-bold">
          TOP RATED PRODUCTS
        </h2>
      </div>
      <FlowersList
        url={"/flowers?pagination[start]=0&pagination[limit]=6&populate=*"}
      />
      <CollectionsList />
      <WhyUsList />
      <Subscribe />
      <AccordionBasicExample />
      <BlogList />
      <Address />
    </>
  );
};

export default HomePage;
