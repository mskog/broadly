import React from "react";

import NewsItem from "./NewsItem";

export default function News({ newsItems }: { newsItems: any[] }) {
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
}
