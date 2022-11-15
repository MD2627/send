import React from "react";
import { Link, Image } from "@shopify/hydrogen";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
function Datas({ props }) {
  console.log(props);
  return (
    <AwesomeSlider className="h-96">
      {props.nodes.map((collection, i) => {
        return (
          <>
            {collection?.image && (
              <Link key={i} to={`/collections/${collection.handle}`}>
                <Image
                  className="object-cover items-center h-screen"
                  alt={`Image of ${collection.title}`}
                  data={collection.image}
                />
              </Link>
            )}
            
          </>
        );
      })}
    </AwesomeSlider>
  
  );
}
export default Datas;
