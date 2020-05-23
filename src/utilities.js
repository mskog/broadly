function formattedRuntime(runtime) {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  return `${hours}h ${minutes}m`;
}

function releaseYear(releaseDate) {
  return new Date(releaseDate).getFullYear();
}

function thumbnail(url) {
  if (process.env.NODE_ENV === "development") {
    return url;
  }
  return `https://thumbs.mskog.com/240x0/${url}`;
}

function placeholder(url) {
  if (process.env.NODE_ENV === "development") {
    return url;
  }
  return `https://thumbs.mskog.com/20x0/filters:blur(5)/${url}`;
}

function cdnImage(url) {
  if (process.env.NODE_ENV === "development") {
    return url;
  }
  return `https://thumbs.mskog.com/${url}`;
}

module.exports = {
  formattedRuntime,
  releaseYear,
  thumbnail,
  placeholder,
  cdnImage
};
