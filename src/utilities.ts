export default class Utilities {
  formattedRuntime(runtime: number) {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;

    if (hours === 0) {
      return `${minutes}m`;
    }
    return `${hours}h ${minutes}m`;
  }

  releaseYear(releaseDate: string) {
    return new Date(releaseDate).getFullYear();
  }

  thumbnail(url: string) {
    return `https://thumbs.mskog.com/240x0/${url}`;
  }

  placeholder(url: string) {
    return `https://thumbs.mskog.com/20x0/filters:blur(5)/${url}`;
  }

  cdnImage(url: string) {
    return `https://thumbs.mskog.com/filters:quality(80)/${url}`;
  }
}
