/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import { NewsItem } from "generated/graphql";

import Item from "./Item";

type ListProps = {
  newsItems: Array<
    Pick<NewsItem, "title" | "url" | "metadata"> & { newsworthy?: any }
  >;
};

const List = ({ newsItems }: ListProps): JSX.Element => {
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
};

export default List;
