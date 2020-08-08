import React from "react";

import Item from "./Item";

export default function List({ newsItems, title }) {
  return (
    <div>
      <h1 className="font-bold text-4xl">{title}</h1>
      <ul>
        {newsItems.map(item => {
          const { title: itemTitle, url, newsworthy, metadata } = item;
          return (
            <Item
              key={itemTitle}
              title={itemTitle}
              url={url}
              metadata={metadata}
              newsworthy={newsworthy}
            />
          );
        })}
      </ul>
    </div>
  );
}
