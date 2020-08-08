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
          return (
            <NewsItem
              key={item.title}
              title={item.title}
              url={item.url}
              description={item.description}
              image={item.metadata.image}
            />
          );
        })}
      </ul>
    </div>
  );
}
