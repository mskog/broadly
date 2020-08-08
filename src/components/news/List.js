import React from "react";

import Item from "./Item";

export default function List({ newsItems, title }) {
  return (
    <div>
      <h1 className="font-bold text-4xl">{title}</h1>
      <ul>
        {newsItems.map(item => {
          return (
            <Item
              key={item.title}
              title={item.title}
              url={item.url}
              image={item.metadata.image}
              description={item.metadata.description}
              newsworthy={item.newsworthy}
            />
          );
        })}
      </ul>
    </div>
  );
}
