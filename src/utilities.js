function formattedRuntime(runtime) {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  return `${hours}h ${minutes}m`;
}

function releaseYear(releaseDate) {
  return new Date(releaseDate).getFullYear();
}

function thumbnail(url) {
  return `https://thumbs.mskog.com/240x0/${url}`;
}

module.exports = { formattedRuntime, releaseYear, thumbnail };
