const IMG_PATH = " https://image.tmdb.org/t/p";

export function makeImagePath(id: string, format?: string) {
  console.log(id);
  console.log(format);
  return `${IMG_PATH}/${format ? format : "original"}/${id}`;
}
