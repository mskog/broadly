import React from "react";

import NewsItem from "./NewsItem";

export default function News({ newsItems }) {
  if (newsItems.length === 0) {
    return <></>;
  }

  return (
    <div className="pt-20">
      <h2 className="font-bold text-3xl">News</h2>
      <ul>
        {newsItems.map(item => {
          const { title, url, metadata } = item;
          return (
            <NewsItem key={title} title={title} url={url} metadata={metadata} />
          );
        })}
      </ul>
    </div>
  );
}
