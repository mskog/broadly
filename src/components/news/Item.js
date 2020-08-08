import React from "react";
import { Link } from "react-router-dom";

import { truncate } from "lodash";

export default function Item({ title, url, image, description, newsworthy }) {
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
        {newsworthy && (
          <Link to={`/tv_shows/${newsworthy.id}`}>
            <h3 className="text-lg font-bold text-teal-500">
              {newsworthy.name}
            </h3>
          </Link>
        )}
        <a href={url}>
          <h2 className="text-xl mb-3">{truncate(title, { length: 100 })}</h2>
        </a>
        <p className="text-gray-400 hidden md:block">{description}</p>
      </div>
    </li>
  );
}
