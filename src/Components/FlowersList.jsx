/* eslint-disable react/prop-types */
import FlowerCard from "./FlowerCard";
import { Button } from "../Components";
import { useEffect, useState } from "react";
import { instance } from "../Api";
import { useParams } from "react-router-dom";

const FlowersList = ({ url = null }) => {
  const { inputSearch, id } = useParams();
  const [moreProducts, setMoreProducts] = useState(null)

  const [flowers, setFlowers] = useState([]);
  useEffect(() => {
    if (url) {
      const getFlowers = async () => {
        const {
          data: { data },
        } = await instance.get(url);
        setFlowers(data);
      };

      getFlowers();
    } else {
      if (id) {
        const getCollectionFlowers = async () => {
          const {
            data: { data },
          } = await instance.get(
            `collections?filters[id][$eq]=${id}&populate[flowers][populate]=*`
          );

          setFlowers(data[0]?.attributes?.flowers.data);
        };

        getCollectionFlowers();
      } else if (inputSearch) {
        const getInputFlowers = async () => {
          const {
            data: { data },
          } = await instance.get(
            `/flowers?filters[name][$containsi]=${inputSearch}&populate=*`
          );

          setFlowers(data);
        };

        getInputFlowers();
      }
    }
  }, []);

  const handleView = async()=>{
    const res = await instance.get('/flowers?pagination[start]=7&pagination[limit]=6&populate=*')

    console.log(res)
    console.log('salam')
  }

  if (flowers.length > 0) {
    return (
      <div className="flex flex-col items-center gap-20 max-container padding-x w-full">
        <section className="flex flex-wrap  justify-between max-container w-full">
          {flowers?.map((flower) => {
            return (
              <>
                <FlowerCard
                  src={`${import.meta.env.VITE_API_UPLOAD_IMG}${
                    flower?.attributes?.img.data[0]?.attributes?.url
                  }`}
                  desc={flower.attributes.name}
                  price={flower.attributes.price}
                  id={flower.id}
                />
              </>
            );
          })}
        </section>

       
      </div>
    );
  } else{
    return<>
      <h2 className="font-montserrat text-2xl text-primary text-center">No flowers found, search again</h2>
    </>
  }
};

export default FlowersList;
