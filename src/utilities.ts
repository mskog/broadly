export function formattedRuntime(runtime: number): string {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  if (hours === 0) {
    return `${minutes}m`;
  }
  return `${hours}h ${minutes}m`;
}

export function releaseYear(releaseDate: string): string {
  return releaseDate ? new Date(releaseDate).getFullYear().toString() : "????";
}

export function thumbnail(url: string): string {
  return `https://thumbs.mskog.com/240x0/filters:quality(50)/${url}`;
}

export function placeholder(url: string): string {
  return `https://thumbs.mskog.com/20x0/filters:blur(5):quality(5)/${url}`;
}

export function cdnImage(url: string): string {
  return `https://thumbs.mskog.com/filters:quality(80)/${url}`;
}

export function resolutionDisplay(resolution: string): string {
  return resolution === "2160p" ? "4k" : resolution;
}
