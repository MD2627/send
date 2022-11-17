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
            <TabPanel className="flex">
              {data.products.nodes.map((head) => {
                return (
                  <>
                    <Link key={i} to={`/products/${head.handle}`}>
                      <div className="flex">
                        <div>
                          {head.images.nodes.map((img) => {
                            return (
                              <Image
                                className="rounded shadow-border overflow-clip inline-block aspect-[5/4] md:aspect-[3/2] object-cover"
                                width={"30%"}
                                height={"30%"}
                                alt={`Image of ${img.title}`}
                                data={img}
                              />
                            );
                          })}
                          {head.title}
                        </div>
                      </div>
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
