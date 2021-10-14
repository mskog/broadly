import React from "react";

import { NewsItem as NewsItemType } from "generated/graphql";

import NewsItem from "./NewsItem";

type NewsProps = {
  newsItems: Pick<NewsItemType, "title" | "url" | "metadata">[];
};

const News = ({ newsItems }: NewsProps): JSX.Element => {
  if (newsItems.length === 0) {
    return <></>;
  }

  return (
    <div className="pt-20">
      <h2 className="text-3xl font-bold">News</h2>
      <ul>
        {newsItems.slice(0, 5).map((item) => {
          const { title, url, metadata } = item;
          return (
            <NewsItem key={title} title={title} url={url} metadata={metadata} />
          );
        })}
      </ul>
    </div>
  );
};

export default News;
