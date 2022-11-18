import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Link, Image } from "@shopify/hydrogen";
function Tabin({ props }) {
  return (
    <>
      <Tabs>
        <TabList className="text-center mt-10 dara">
          {props.nodes.map((data, i) => {
            return <Tab key={i}>{data.title}</Tab>;
          })}
        </TabList>
        {props.nodes.map((data, i) => {
          return (
            <TabPanel>
              {data.products.nodes.slice(0, 3).map((head) => {
                return (
                  <>
                    <Link className="two" key={i} to={`/products/${head.handle}`}>
                      {head.images.nodes.map((img) => {
                        return (
                          <Image
                            className="rounded flex align-center aspect-[5/4] md:aspect-[3/2] object-cover"
                            width={"60%"}
                            height={"30%"}
                            alt={`Image of ${img.title}`}
                            data={img}
                          />
                        );
                      })}
                      <div className="text-center">{head.title}</div>
                    </Link>
                  </>
                );
              })}
            </TabPanel>
          );
        })}
      </Tabs>
    </>
  );
}

export default Tabin;
