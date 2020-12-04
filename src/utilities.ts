export function formattedRuntime(runtime?: number) {
  if (!runtime) return "?";
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  if (hours === 0) {
    return `${minutes}m`;
  }
  return `${hours}h ${minutes}m`;
}

export function releaseYear(releaseDate?: Date) {
  return releaseDate
    ? new Date(releaseDate.toString()).getFullYear().toString()
    : "????";
}

export function thumbnail(url: string) {
  return `https://thumbs.mskog.com/240x0/${url}`;
}

export function placeholder(url: string) {
  return `https://thumbs.mskog.com/20x0/filters:blur(5)/${url}`;
}

export function cdnImage(url?: string) {
  if (url === undefined) return "";
  return `https://thumbs.mskog.com/filters:quality(80)/${url}`;
}
