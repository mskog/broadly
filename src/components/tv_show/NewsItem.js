import React from "react";

import { truncate } from "lodash";

export default function NewsItem({ title, metadata, url }) {
  const { image, description } = metadata || {};

  const thumbnail = `https://thumbs.mskog.com/100x100/smart/${image}`;
  const thumbnailMobile = `https://thumbs.mskog.com/480x240/smart/${image}`;

  return (
    <li className="flex flex-col py-6 md:flex-row">
      <a className="flex-none w-full mr-4 md:h-32 md:w-32" href={url}>
        {image && (
          <>
            <img
              className="hidden w-32 h-32 mr-4 rounded md:block"
              src={thumbnail}
              alt={title}
            />
            <img
              className="block object-cover w-full rounded-t-lg md:hidden"
              src={thumbnailMobile}
              alt={title}
            />
          </>
        )}
      </a>
      <div className="pt-4 md:pt-0">
        <a href={url}>
          <h2 className="mb-3 text-xl">{truncate(title, { length: 100 })}</h2>
        </a>
        <p className="hidden text-gray-400 md:block">{description}</p>
      </div>
    </li>
  );
}
