import React from "react";

import { truncate } from "lodash";

export default function NewsItem({ title, description, image, url }) {
  const thumbnail = `https://thumbs.mskog.com/100x100/smart/${image}`;
  const thumbnailMobile = `https://thumbs.mskog.com/240x120/smart/${image}`;

  return (
    <li className="py-6 flex md:flex-row flex-col">
      <a className="flex-none" href={url}>
        <img
          className="h-32 w-32 mr-4 rounded md:block hidden"
          src={thumbnail}
          alt={title}
        />
        <img
          className="w-full object-cover mr-4 rounded-t-lg md:hidden block"
          src={thumbnailMobile}
          alt={title}
        />
      </a>
      <div className="pt-4 md:pt-0">
        <a href={url}>
          <h2 className="text-xl mb-3">{truncate(title, { length: 100 })}</h2>
        </a>
        <p className="text-gray-400 hidden md:block">{description}</p>
      </div>
    </li>
  );
}
