import React from "react";

import Item from "./Item";

type ListProps = {
  newsItems: Array<any>;
};

export default function List({ newsItems }: ListProps) {
  return (
    <div>
      <ul>
        {newsItems.map((item) => {
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
