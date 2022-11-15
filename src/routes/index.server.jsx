import { Link } from "@shopify/hydrogen";
import { Suspense } from "react";
import Featured from "../components/Featured.server";
import FeaturedCollections from "../components/FeaturedCollections.server";
import { Layout } from "../components/Layout.server";
import Test from "../components/Test.client";
import ServerTest from "./ServerTest.server";

export default function Home() {
  return (
    <Layout>
      <Suspense>
        <Test />
        
    <Featured/>
        <FeaturedCollections/>
        <ServerTest />
      </Suspense>
    </Layout>
  );
}
