import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Link, Image } from "@shopify/hydrogen";
function Tabin({ props }) {
 
  return (
    <>
      <Tabs>
        <TabList className="text-center mt-10 ">
          {props.nodes.map((data, i) => {
            return <Tab key={i}>{data.title}</Tab>;
          })}
        </TabList>
        {props.nodes.map((datas, i) => {
          return (
            <TabPanel>
              <Link key={i} to={`/collections/${datas.handle}`}>
                <div className="flex justify-around mt-10">
                  <Image
                    className="rounded shadow-border overflow-clip inline-block aspect-[5/4] md:aspect-[3/2] object-cover"
                    height={336}
                    alt={`Image of ${datas.title}`}
                    data={datas.image}
                  />
                  <Image
                    className="rounded shadow-border overflow-clip inline-block aspect-[5/4] md:aspect-[3/2] object-cover"
                    height={336}
                    alt={`Image of ${datas.title}`}
                    data={datas.image}
                  />
                  <Image
                    className="rounded shadow-border overflow-clip inline-block aspect-[5/4] md:aspect-[3/2] object-cover"
                    height={336}
                    alt={`Image of ${datas.title}`}
                    data={datas.image}
                  />
                </div>
              </Link>
            </TabPanel>
          );
        })}
      </Tabs>
    </>
  );
}

export default Tabin;
