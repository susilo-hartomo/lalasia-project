import React from "react";
import { NextPage, GetStaticProps } from "next";

import Layout from "@/components/Layout";

const index: NextPage = () => {
  return (
    <Layout title={"article"} content={"asdas"}>
      <h1>Article</h1>
      <h2>
        We display product based on latest products we have, if you want to see
        old products please enter the name of the item
      </h2>
      {/* <Carousel /> */}
      {/* <DailyNews /> */}
      {/* <TrendingTopics */}
      {/* <NewsLetter /> */}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};

export default index;