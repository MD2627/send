import { Link, Image, gql, useShopQuery, CacheLong } from "@shopify/hydrogen";
import Datas from "./Datas.client";
import Tabin from "./Tabin.client";

export default function Featured() {
  const {
    data: { collections },
  } = useShopQuery({
    query: QUERY,
    cache: CacheLong(),
  });

  return (
    <>
      <Datas props={collections} />
      <Tabin props={collections} />
    </>
  );
}

const QUERY = gql`
  query FeaturedCollections {
    collections(first: 3, sortKey: UPDATED_AT) {
      nodes {
        id
        title
        handle
        image {
          altText
          width
          height
          url
        }
        products(first: 100) {
          nodes {
            id
            title
            vendor
            handle
            descriptionHtml
            images(first: 1) {
              nodes {
                url
                altText
                width
                height
              }
            }
          }
        }
      }
    }
  }
`;
