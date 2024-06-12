import Collection from "./Collection";
import { getCollections } from "../Api/apicalls";
import { useEffect, useState } from "react";

const CollectionsList = () => {
  const [collections, setCollections] = useState([]);


  useEffect(() => {
    const getAllCollections = async () => {
      const result = await getCollections();
      setCollections(result);
    };

    getAllCollections();
  }, []);
  return (
    <section id="collections" className="flex flex-wrap px-[15%] max-md:padding-x justify-between mt-36">
      {collections.map((collection) => {
        return (
          <>
            <Collection
              src={`${import.meta.env.VITE_API_UPLOAD_IMG}${
                collection?.attributes?.collection_img?.data[0]?.attributes?.url
              }`}
              text={collection.attributes.collection_name}
              id={collection.id}
            />
            <div key={collection.id}></div>
          </>
        );
      })}
    </section>
  );
};

export default CollectionsList;
