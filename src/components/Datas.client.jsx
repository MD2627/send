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
                  // width={"10%"}
                  alt={`Image of ${collection.title}`}
                  data={collection.image}
                />
            <div className="custom">
              {collection.title}
            </div>
              </Link>
            )}
          </>
        );
      })}
    </AwesomeSlider>
  );
}
export default Datas;
