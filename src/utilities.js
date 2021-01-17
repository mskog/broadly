function formattedRuntime(runtime) {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  if (hours === 0) {
    return `${minutes}m`;
  }
  return `${hours}h ${minutes}m`;
}

function releaseYear(releaseDate) {
  return releaseDate ? new Date(releaseDate).getFullYear() : "????";
}

function thumbnail(url) {
  return `https://thumbs.mskog.com/240x0/${url}`;
}

function placeholder(url) {
  return `https://thumbs.mskog.com/20x0/filters:blur(5)/${url}`;
}

function cdnImage(url) {
  return `https://thumbs.mskog.com/filters:quality(80)/${url}`;
}

function resolutionDisplay(resolution) {
  return resolution === "2160p" ? "4k" : resolution;
}

module.exports = {
  formattedRuntime,
  releaseYear,
  thumbnail,
  placeholder,
  cdnImage,
  resolutionDisplay
};
